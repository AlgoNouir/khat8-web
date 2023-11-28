// base
import { useRouter } from "next/router";

// icons
import { AiFillHome } from "react-icons/ai";
import { FaInfo, FaShoppingCart } from "react-icons/fa";
import { MdSearch, MdPerson } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { AutoComplete } from "antd";
import { useAppSelector } from "@/store/HOCs";
import { useState } from "react";

export default function Header(props: { state: number }) {
  const router = useRouter();
  const products = useAppSelector((store) => store.products);
  const [options, setOptions] = useState<{ value: string; id: number }[]>([]);

  return (
    <div className="bg-black px-5 py-2 fixed left-0 z-50 right-0 top-0 flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-5 rtl:space-x-reverse h-full">
        {[
          { name: "خانه", dir: "/" },
          { name: "لیست محصولات", dir: "/lists/all/" },
          { name: "ثبت کتاب", dir: "/book" },
          { name: "کتاب آنلاین", dir: "/lists/all/" },
          { name: "درباره ما", dir: "/info" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.dir)}
            className="flex flex-row items-center space-x-2 rtl:space-x-reverse rounded-xl group p-2 hover:bg-white transition-all h-full"
          >
            <p className="text-white group-hover:text-black transition-all">
              {item.name}
            </p>
          </button>
        ))}
      </div>
      <div className="flex flex-row space-x-3 rtl:space-x-reverse">
        <button className="flex flex-row items-center justify-center group bg-white rounded-xl p-1">
          <div className=" font-bold text-xl rounded-full">
            <MdSearch />
          </div>
          <div className="">
            <AutoComplete
              popupClassName=""
              className="text-xs w-64 outline-none ms-2"
              options={options}
              bordered={false}
              onSelect={(obj) => {
                router.push(
                  `/product/${
                    products.find((product) => product.persianName === obj)?.id
                  }`
                );
                setOptions([]);
              }}
              onSearch={(text) =>
                setOptions(
                  products
                    .filter((p) => p.persianName.includes(text))
                    .map((p) => ({ value: p.persianName, id: p.id }))
                )
              }
              placeholder="محصول خود را جست و جو کنید ..."
            />
          </div>
        </button>
        <button
          onClick={() => router.push("/profile")}
          className="bg-white font-bold text-xl rounded-full p-1"
        >
          <MdPerson />
        </button>
      </div>
    </div>
  );
}
