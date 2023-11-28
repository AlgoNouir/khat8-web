import Footer from "@/components/UI/footer";
import Header from "@/components/UI/header";
import Banner from "@/components/UI/banner";
import ProductLists from "@/components/store/productsList";
import { useAppDispatch, useAppSelector } from "@/store/HOCs";
import { NextSeo } from "next-seo";
import { Collapse } from "antd";
import Image from "next/image";
import Input from "@/components/UI/input";
import PhoneInput from "@/components/UI/phoneInput";
import { useState } from "react";
import { setNotif } from "@/store/core/slice";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const [name, nameHandler] = useState("");
  const [desc, descHandler] = useState("");
  const [phone, phoneHandler] = useState<number | "">();
  return (
    <>
      <div className="flex space-y-5 flex-col items-center  bg-gray-100">
        <Header state={0} />
        <div className="px-36 w-full space-y-5 pt-12">
          <div className="w-full bg-white p-10 rounded-xl">
            <label>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </label>
          </div>

          <div
            className="lg:space-x-5 space-y-5 flex flex-col bg-white w-full rounded-xl
            lg:flex-row items-center justify-between p-5 rtl:space-x-reverse"
          >
            <div className="flex flex-col space-y-5 items-center">
              <div className="w-96">
                <Image
                  src="https://currencyno.storage.iran.liara.space/Banners/caffeh/topBanners/reserveCaffee.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="reserve"
                  className="h-auto w-full opacity-50"
                />
              </div>
              <label className="text-center text-xl font-bold text-gray-600 ">
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
              </label>
            </div>
            <div className="flex flex-col space-y-5 items-center">
              <div className="space-y-5">
                <Input
                  value={name}
                  handler={nameHandler}
                  title="نام و نام خانوادگی"
                />
                <PhoneInput
                  value={phone}
                  handler={phoneHandler}
                  title="شماره تلفن"
                />
              </div>
              <button
                onClick={() => {
                  if (
                    phone !== undefined &&
                    name !== undefined &&
                    phone !== ""
                  ) {
                    dispatch(
                      coffeeOrderThunk({ name, phone, desc: desc || "" })
                    );
                    nameHandler("");
                    phoneHandler("");
                  } else {
                    dispatch(
                      setNotif({
                        type: "error",
                        title: "مشکل در ارسال اطلاعات",
                        message: "لطفا همه فیلد ها را به درستی پر کنید",
                      })
                    );
                  }
                }}
                className="bg-amber-400 p-5 rounded-xl w-44 text-xl"
              >
                ارسال درخواست
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white p-5 rounded-xl space-y-5">
            <label className="text-xl font-bold">سوالات متداول</label>
            <Collapse
              ghost
              items={[
                {
                  key: 1,
                  label: (
                    <p className="text-lg">
                      پروسه ثبت یک کتاب چقدر طول می کشد؟
                    </p>
                  ),
                  children: (
                    <label className="md:leading-loose text-justify">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </label>
                  ),
                },
                {
                  key: 2,
                  label: (
                    <p className="text-lg">هزینه ثبت یک کتاب چقدر است ؟</p>
                  ),
                  children: (
                    <label className="md:leading-loose text-justify">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </label>
                  ),
                },
                {
                  key: 3,
                  label: (
                    <p className="text-lg">
                      مدارک مورد نیاز برای ثبت کتاب چیست؟
                    </p>
                  ),
                  children: (
                    <label className="md:leading-loose text-justify">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </label>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
