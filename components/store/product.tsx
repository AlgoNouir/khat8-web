import { productType } from "@/store/product/slice";
import { useRouter } from "next/router";
import { BiSolidOffer } from "react-icons/bi";
import CustomImage from "../UI/image";

export default function Product(props: {
  data: productType;
  hidePrice?: boolean;
}) {
  const router = useRouter();

  const { data } = props;

  return (
    <button
      onClick={() => router.push(`/product/${data.id}`)}
      className="bg-bg-200 rounded-xl p-5 flex flex-col relative justify-between h-full border-4  w-full space-y-5"
      dir="rtl"
    >
      {data.offerPrice > 0 && (
        <div className="flex flex-row items-center justify-between absolute left-5 -rotate-12">
          <div className="text-red-600 flex flex-col items-center space-x-1 rtl:space-x-reverse">
            <p className="text-lg">
              {Intl.NumberFormat("fa-IR").format(
                Math.round(
                  (-1000 * (data.offerPrice - data.price)) / data.price
                ) / 10
              )}{" "}
              ٪
            </p>
            <small>تخفیف !</small>
          </div>
        </div>
      )}
      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-center">
          <CustomImage name={data.image[0]} />
        </div>
        <p className="text-center text-gray-600">{data.persianName}</p>
      </div>
      {props.hidePrice === true ? (
        <></>
      ) : (
        <div className="flex flex-col justify-end">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row grow items-center space-x-2 rtl:space-x-reverse justify-end">
              <p
                className={`text-xl font-bold ${
                  data.offerPrice > 0 ? "text-green-700" : "text-text"
                }`}
              >
                {Intl.NumberFormat("fa-IR").format(
                  data.offerPrice > 0 ? data.offerPrice : data.price
                )}
              </p>
              <small className="text-gray-500">تومان</small>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
