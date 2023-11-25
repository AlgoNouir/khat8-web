import Footer from "@/components/UI/footer";
import Header from "@/components/UI/header";
import Banner from "@/components/UI/banner";
import ProductLists from "@/components/store/productsList";
import { useAppSelector } from "@/store/HOCs";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function MainPage() {
  const products = useAppSelector((store) => store.products);
  return (
    <>
      <NextSeo description="Home page description of the page" />
      <div className="flex flex-col items-center bg-gray-100">
        <Header state={0} />
        <div className="bg-black w-full h-[500px]"></div>
        <div className="sm:container p-5 space-y-2 sm:space-y-5 px-36">
          <div className="grid grid-cols-4 gap-5">
            {[
              { name: "کتاب ها", dir: "" },
              { name: "لوازم تحریر", dir: "" },
              { name: "test", dir: "" },
              { name: "test", dir: "" },
              { name: "test", dir: "" },
              { name: "test", dir: "" },
              { name: "test", dir: "" },
              { name: "test", dir: "" },
            ].map((item, index) => (
              <div
                className="relative w-full flex items-center justify-center
                h-80 border-black border-b-[16px] bg-white"
                key={index}
              >
                <Image
                  alt="بزودی"
                  src={"/comming-soon.png"}
                  width={300}
                  height={700}
                  className="h-64 object-contain"
                />
                <label className="absolute bottom-3">{item.name}</label>
              </div>
            ))}
          </div>
          <Banner
            images={[
              [
                { src: "store/3.jpg", url: "/lists/30" },
                { src: "store/6.png", url: "/lists/53" },
              ],
            ]}
          />
          <ProductLists
            products={products.filter(
              (product) =>
                product.counts.reduce((obj, p) => p.amount + obj, 0) < 4
            )}
            title={{ name: "پرفروش ترین ها", moreDir: "lists/all" }}
          />
          <Banner images={[{ src: "store/2.jpg", url: "/lists/52" }]} />
          <ProductLists
            products={products
              .filter((product) => product.offerPrice !== 0)
              .sort((product) => product.offerPrice - product.price)
              .reverse()}
            title={{ name: "بیشترین تخفیفات", moreDir: "lists/all" }}
          />
          <ProductLists
            products={products.filter((product) => product.category === 61)}
            title={{ name: "لپتاپ استوک", moreDir: "lists/61" }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
