import Footer from "@/components/UI/footer";
import Header from "@/components/UI/header";
import Banner from "@/components/UI/banner";
import ProductLists from "@/components/store/productsList";
import { useAppSelector } from "@/store/HOCs";
import { NextSeo } from "next-seo";

export default function MainPage() {
  const products = useAppSelector((store) => store.products);
  return (
    <>
      <div className="flex flex-col items-center bg-gray-100">
        <Header state={0} />
        <div className="h-screen"></div>
        <Footer />
      </div>
    </>
  );
}
