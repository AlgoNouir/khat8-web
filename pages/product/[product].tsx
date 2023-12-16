// main
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// components & icons
import { Dropdown } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import Footer from "@/components/UI/footer";
import Header from "@/components/UI/header";

// redux
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { setNotif } from "@/store/core/slice";
import { addToCartThunk } from "@/store/account/thunk";
import { keeperCounterType } from "@/store/product/slice";
import ProductLists from "@/components/store/productsList";
import ImageCarousel from "@/components/UI/carousel";
import { addOfflineProduct } from "@/store/account/slice";
import { HiBuildingStorefront } from "react-icons/hi2";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { SERVER_URL } from "@/core";
import { axiosNoUser } from "@/core/axios";
import { NextSeo } from "next-seo";
import Head from "next/head";

function ProductDetail(props: { name: string; amount: string }) {
  return (
    <div className="p-5 flex flex-row space-x-5 rtl:space-x-reverse items-center px-10 border-b">
      <div className="w-3 h-3 bg-amber-400 rounded-full" />
      <p className="text-lg text-gray-500">{props.name}</p>
      <p className="text-2xl font-bold text-gray-600">{props.amount}</p>
    </div>
  );
}

export default function ProductPage(props: any) {
  // redux
  const account = useAppSelector((store) => store.account);
  const dispatch = useAppDispatch();
  const tmp = useAppSelector((store) => store.products);

  // main
  const router = useRouter();
  const productId = router.query.product;

  // data
  const product = tmp.find(
    (p) => p.id === (typeof productId === "string" ? parseInt(productId) : -1)
  );
  const inCart =
    product && account.cartProduct.find((p) => p.product === product.id);

  const products =
    product &&
    tmp.filter((p) => p.category === product.category && p.id !== product.id);

  const tmp_product = product?.counts.filter((p) => p.amount > 0) || [];

  // states
  const [count, countHandler] = useState(inCart?.count || 1);
  const [select, selectHandler] = useState<keeperCounterType | undefined>(
    undefined
  );

  useEffect(() => {
    const selected =
      product?.counts.find((p) => p.id === inCart?.select) || tmp_product[0];
    selectHandler(selected);
  }, [selectHandler, product, inCart]);

  return (
    <>
      {product !== undefined ? (
        <div className="flex flex-col items-center w-full bg-gray-100 max-lg:px-0 px-36">
          <Header state={0} />
          <div className="space-y-5 p-5 sm:container pt-20">
            <div
              className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 xl:space-x-5 
            rtl:space-x-reverse rounded-xl bg-bg-200 shadow-xl"
            >
              <div
                className="xl:w-1/2 p-10 flex
                relative  items-center justify-center flex-col space-y-20"
              >
                <div className="flex flex-col space-y-5 w-full text-center">
                  <label className="text-xl font-bold">
                    {product.persianName}
                  </label>
                  <label className="text-gray-500 font-bold">
                    {product.garanty}
                  </label>
                </div>
                <div
                  className="w-full flex flex-col space-y-5 sm:space-y-0 sm:flex-row space-x-5 
                  items-center justify-center sm:justify-between "
                >
                  {select === undefined ? (
                    <div className="flex items-center justify-center w-full h-20">
                      <label className="text-5xl font-bold text-gray-300">
                        ناموجود :(
                      </label>
                    </div>
                  ) : (
                    <>
                      {product.offerPrice > 0 ? (
                        <div
                          className="-rotate-12 text-red-700 w-24 h-24 rounded-full 
                        absolute flex items-center justify-center flex-col top-5 left-5"
                        >
                          <p className="text-4xl">{`${Intl.NumberFormat(
                            "fa-IR"
                          ).format(
                            Math.round(
                              (-100 * (product.offerPrice - product.price)) /
                              product.price
                            )
                          )}%`}</p>
                          <small className="">تخفیف !</small>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="flex flex-row w-full justify-center sm:justify-start items-center space-x-5 rtl:space-x-reverse">
                        <div>
                          {product.offerPrice > 0 ? (
                            <del className="text-xl text-red-700">
                              {Intl.NumberFormat("fa-IR").format(product.price)}
                            </del>
                          ) : (
                            <></>
                          )}
                          <div className="flex flex-row space-x-5 rtl:space-x-reverse items-center">
                            <p className="text-4xl font-bold">
                              {Intl.NumberFormat("fa-IR").format(
                                product.offerPrice > 0
                                  ? product.offerPrice
                                  : product.price
                              )}
                            </p>

                            <small className="text-xl">تومان</small>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <div
                          style={{
                            direction: "ltr",
                          }}
                          className="flex flex-rowx space-x-5"
                        >
                          <button
                            onClick={() => {
                              if (count > 0) countHandler((v) => v - 1);
                            }}
                            className="bg-prime-300 w-12 rounded-xl"
                          >
                            -
                          </button>
                          <div className="grow flex items-center justify-center text-xl font-bold">
                            <p>{Intl.NumberFormat("fa-IR").format(count)}</p>
                          </div>
                          <button
                            onClick={() => {
                              // TODO fix this and set amount to max person order
                              if ((select?.amount || 100000) > count) {
                                countHandler((v) => v + 1);
                              } else {
                                dispatch(
                                  setNotif({
                                    type: "warning",
                                    title: "اضافه نشد",
                                    message:
                                      "شما نمی توانید بیشتر از این مقدار خریداری نمایید",
                                  })
                                );
                              }
                            }}
                            className="bg-prime-300 w-12 rounded-xl"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            if (
                              product.counts.length === 0 ||
                              select !== undefined
                            ) {
                              if (
                                count > 0 ||
                                (inCart !== undefined && inCart.count !== count)
                              ) {
                                // check is online or offline
                                if (account.user !== undefined) {
                                  dispatch(
                                    addToCartThunk({
                                      product: product.id,
                                      select: select?.id || -1,
                                      count,
                                    })
                                  );

                                  dispatch(
                                    setNotif({
                                      title: "افزودن به سبد خرید",
                                      message:
                                        inCart === undefined
                                          ? `${product.persianName} با موفقیت به سبد خرید شما افزوده شد`
                                          : `${product.persianName} با موفقیت ویرایش شد`,
                                      type:
                                        inCart === undefined
                                          ? "success"
                                          : "info",
                                    })
                                  );
                                } else {
                                  dispatch(
                                    addOfflineProduct({
                                      id: -1,
                                      product: product.id,
                                      select: select?.id || -1,
                                      count,
                                    })
                                  );
                                }
                              } else {
                                dispatch(
                                  setNotif({
                                    title: "خطای تعداد",
                                    message:
                                      "مقدار محصول مورد نظر شما بایستی بیشتر از ۰ باشد",
                                    type: "error",
                                  })
                                );
                              }
                            } else {
                              dispatch(
                                setNotif({
                                  title: "انتختب نوع محصول",
                                  message:
                                    "لطفا نوع محصول خود را کنار اسم محصول انتخاب کنید",
                                  type: "error",
                                })
                              );
                            }
                          }}
                          className={`${inCart === undefined ||
                            (count === 0 &&
                              inCart !== undefined &&
                              inCart.count !== count)
                            ? "bg-green-700"
                            : "bg-accent-200"
                            } p-3 w-44 rounded-xl`}
                        >
                          <p className=" font-bold text-white">
                            {inCart === undefined ||
                              (count === 0 &&
                                inCart !== undefined &&
                                inCart.count !== count)
                              ? "افزودن به سبد خرید"
                              : "ثبت تغیرات سفارش"}
                          </p>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="xl:w-1/2 p-5">
                <ImageCarousel images={[product.image]} />
              </div>
            </div>
            <div
              className="w-full rounded-xl bg-gray-600 text-white shadow-xl p-10
                        flex flex-col space-y-5"
            >
              <label className="text-xl font-bold">توضیحات :</label>
              <p className="text-lg text-justify">{product.desc}</p>
            </div>
            {products !== undefined && products?.length > 0 ? (
              <ProductLists
                products={products}
                title={{ name: "محصولات مشابه" }}
              />
            ) : (
              <></>
            )}
            {products !== undefined && products?.length > 0 ? (
              <ProductLists
                products={products}
                title={{ name: "از همین نویسنده" }}
              />
            ) : (
              <></>
            )}
          </div>
          <Footer />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { product } = context.params;

  const response = await axiosNoUser.get("product/retreve/", {
    params: {
      ID: product,
    },
  });

  const torob: { name: string; content: string; keyOverride: string }[] = [
    {
      name: "product_id",
      content: response.data.id,
      keyOverride: "product_id",
    },
    {
      name: "product_name",
      content: response.data.persianName,
      keyOverride: "product_name",
    },
    {
      name: "product_price",
      content:
        response.data.offerPrice === 0
          ? response.data.price
          : response.data.offerPrice,
      keyOverride: "product_price",
    },
    {
      name: "product_old_price",
      content: response.data.price,
      keyOverride: "product_old_price",
    },
    {
      name: "availability",
      content:
        response.data.counts.find((c: any) => c.amount > 0) === undefined
          ? "outofstock"
          : "instock",
      keyOverride: "availability",
    },
    {
      name: "guarantee",
      content: response.data.garanty,
      keyOverride: "guarantee",
    },
    {
      name: "image",
      content: `https://currencyno.storage.iran.liara.space/${response.data.image[0]}`,
      keyOverride: "image",
    },
  ];

  return {
    props: { torob },
    notFound: response.status !== 200,
  };
}
