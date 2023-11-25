import Banner from "@/components/UI/banner";
import Header from "@/components/UI/header";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Page404() {
  const router = useRouter();
  return (
    <div>
      <Header state={0} />
      <div
        className="flex items-center justify-center h-screen flex-col space-y-5
        sm:space-y-5 bg-gray-100 p-5 px-36"
      >
        <button
          onClick={() => router.push("/")}
          className=" flex flex-col items-center space-x-5 rtl:space-x-reverse"
        >
          <Image
            src={
              "https://currencyno.storage.iran.liara.space/Core/CurrencynoIcon.png"
            }
            width="0"
            height="0"
            sizes="100wv"
            className="w-36 h-36 rounded-full"
            alt="icon"
          />
        </button>
        <label className="text-xl text-gray-500 container bg-white p-5 rounded-xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </label>
        <button
          onClick={() => router.push("/")}
          className="bg-black p-5 text-white rounded-xl"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
}
