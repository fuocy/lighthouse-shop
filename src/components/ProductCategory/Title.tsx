import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import Product from "src/model/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AppProps {
  productsList: Product[];
}

const sortProducts = (
  products: Product[],
  type: string | string[] | undefined
) => {
  if (type === "asc") {
    return products.sort((productA, productB) =>
      productA.price > productB.price ? 1 : -1
    );
  }

  if (type === "desc") {
    return products.sort((productA, productB) =>
      productA.price < productB.price ? 1 : -1
    );
  }

  return products;
};

export default function Title({ productsList }: AppProps) {
  const [btnPress, setBtnPress] = useState("");
  const router = useRouter();

  const sortAscendingHandler = () => {
    if (router.query.sort === "asc") {
      router.push(`${router.query.productCategory}`);
    } else {
      router.push(`${router.query.productCategory}?sort=asc`);
    }
  };

  const sortDescendingHandler = () => {
    if (router.query.sort === "desc") {
      router.push(`${router.query.productCategory}`);
    } else {
      router.push(`${router.query.productCategory}?sort=desc`);
    }
  };

  useEffect(() => {
    setBtnPress(
      router.query.sort === "asc"
        ? "btn1"
        : router.query.sort === "desc"
        ? "btn2"
        : ""
    );
  }, [setBtnPress, router.query.sort]);

  return (
    <div>
      <ToastContainer />
      <div className="mt-[30px] font-bold text-5xl mb-6 capitalize">
        {router.query.productCategory}
        {router.query.productCategory !== "shoes" &&
        router.query.productCategory !== "accessory"
          ? "'s "
          : " "}
        products
      </div>
      <p className="text-slate-600  text-base mb-[61px] font-medium">
        {` Showing ${
          productsList.length < 10 ? productsList.length : 9
        } products
        out of ${productsList.length} products`}
      </p>
      <div
        className="text-right text-sm font-semibold uppercase 
  relative"
      >
        <p>sorted by:</p>
        <div className="absolute top-[-3px] right-[-90px] flex items-center gap-2">
          <button
            onClick={sortAscendingHandler}
            className={`flex-center 
      py-1 px-2 bg-white text-black z-10 transition duration-300 ${
        btnPress === "btn1" && "bg-primary-color"
      }`}
          >
            <FaSortAmountDownAlt className="text-lg" />
          </button>
          <button
            onClick={sortDescendingHandler}
            className={`flex-center 
      py-1 px-2 bg-white text-black z-10 transition duration-300 ${
        btnPress === "btn2" && "bg-primary-color"
      }`}
          >
            <FaSortAmountDown className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
