import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Icon(props: { text: string; icon: any; url?: string }) {
  const router = useRouter();
  return (
    <button
      disabled={props?.url === undefined}
      onClick={
        props?.url === undefined
          ? () => {}
          : () => window.open(props.url, "_blank")
      }
      className="flex flex-row space-x-2 rtl:space-x-reverse items-center"
    >
      <div className="w-10 h-10 items-center justify-center flex">
        {props.icon}
      </div>
      <label className="text-xs sm:text-sm xl:text-sm font-bold">
        {props.text}
      </label>
    </button>
  );
}

export default function Footer() {
  return (
    <div
      className="bg-gray-600 text-white rounded-t-xl w-screen flex overflow-hidden
            items-center justify-end flex-col p-5 pt-16 space-y-5"
    >
      <div className="flex flex-col lg:flex-row w-screen items-center justify-evenly lg:px-10 max-lg:space-y-5 lg:space-x-5 rtl:space-x-reverse">
        <div className="lg:w-1/3 w-full space-y-5 flex flex-col">
          <p className="text-xs sm:text-sm xl:text-lg text-justify">
            انتشارات خط هشت افتخار دارد با مجوز رسمی از وزرارت فرهنگ و ارشاد
            اسلامی با شماره مجوز ( 11897) و بیش از ده سال سابقه فعالیت در حوزه
            نشر: در زمینه چاپ کتاب به دو صورت دیجیتال ( تیراژ کم ) و افست در
            کوتاهترین و سریعترین زمان ممکن با شرایط استثنایی و با رعایت کلیه
            مراحل آماده سازی کتاب شامل صفحه آرایی و طراحی جلد و …. اقدام نموده و
            کتاب شما را با ( موضوعات مختلف تبدیل پایان نامه به کتاب ، آموزشی،
            علمی ، شعر، داستان ، رمان ، ترجمه و ……. ) با اخذ شابک ISBN از اداره
            شابک و فیپا از کتابخانه ملی در وزارت فرهنگ و ارشاد اسلامی مجوز چاپ
            گرفته و اعلام وصول نماید .
          </p>
          <div className="flex flex-row space-x-5 rtl:space-x-reverse">
            <Icon
              text="نماد اعتماد"
              icon={
                <div className="h-10 w-10 items-center justify-center flex rounded-xl bg-white text-lg lg:text-3xl">
                  <a
                    referrerPolicy="origin"
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=284371&amp;Code=gBjq7O5O8goWmRHZYK1Y"
                  >
                    <img
                      referrerPolicy="origin"
                      src="https://Trustseal.eNamad.ir/logo.aspx?id=284371&amp;Code=gBjq7O5O8goWmRHZYK1Y"
                      alt=""
                      style={{ cursor: "pointer" }}
                      id="gBjq7O5O8goWmRHZYK1Y"
                    />
                  </a>
                </div>
              }
            />
            <Icon
              text="۰۹۱۴۳۵۸۵۲۱۸ - ۰۴۵۳۳۲۴۹۰۴۷"
              url="tel:09396554370"
              icon={
                <div className="h-10 w-10 items-center justify-center flex rounded-xl bg-green-400 text-lg text-white">
                  <BsFillTelephoneFill />
                </div>
              }
            />
            <Icon
              text="currencyno_plus"
              url="https://instagram.com/currencyno_plus"
              icon={
                <Image
                  src={require("@/public/instaLogo.png")}
                  alt="اینستاگرام"
                />
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-center xl:justify-evenly  justify-center sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
          <div className="h-96 rounded-xl w-96 overflow-hidden">
            <div
              style={{
                overflow: "hidden",
                maxWidth: "100%",
                width: "500px",
                height: "500px",
              }}
            >
              <div
                id="g-mapdisplay"
                style={{
                  height: "100%",
                  width: "100%",
                  maxWidth: "100%",
                }}
              >
                <iframe
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "0",
                  }}
                  src="https://www.google.com/maps/embed/v1/search?q=38.24185415827948,48.29008340835571&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center max-lg:space-y-2 lg:space-x-2 rtl:space-x-reverse">
        <p className="text-center">
          تمام حقوق این وبسایت متعلق به انتشارات خط ۸ است. ۱۴۰۳
        </p>
      </div>
    </div>
  );
}
