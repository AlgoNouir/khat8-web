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
            src="/logo.jpg"
            width="0"
            height="0"
            sizes="100wv"
            className="w-96 h-96 rounded-full"
            alt="icon"
          />
        </button>
        <label className="text-xl text-gray-500 container bg-white p-5 rounded-xl">
          مرکز انتشارات خط هشت یکی از بزرگترین مراکز ارائه دهنده ی انواع خدمات
          چاپ و نشر کتاب و نشریه در استان اردبیل می باشد. این مرکز با هدف ارائه
          ی خدمات وسیعتر در قالب اخذ شابک،اخذ فیپا، اخذ مجوز چاپ ، اعلام وصول ،
          همکاری در فروش کتاب و…. فعالیت خودرا آغاز کرده ودر همین راستا جهت
          ارائه ی خدمات بیشتر و بهتر و گسترش این خدمات در سطح کشور به صورت
          گسترده،سایت انتشارات خط هشت را راه اندازی می کند.
        </label>
        <div className="bg-black p-5 rounded-xl text-white">
          <p>
            آدرس دفتر انتتشارات : اردبیل- میدان ججین_ خیابان شهید سلیمانی_روبروی
            اداره کل پست_جنب مهدیه اردبیل - دفتر انتشارات خط هشت
          </p>
          <div className="font-bold">
            <p>کد پستی : 5613951867</p>
            <p>تلفن تماس: 33249047_045</p>
            <p>موبایل: 09143585218</p>
            <p>ایمیل: ekhatte8@chmail.ir </p>
          </div>
          <p>مدیر انتشارات :علیرضا حسن زاده_شماره پروانه نشر 11897</p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="bg-white p-5 text-black font-bold shadow rounded-xl"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
}
