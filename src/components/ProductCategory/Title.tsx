import { useRouter } from "next/router";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import Product from "src/model/Product";

interface AppProps {
  productsList: Product[];
}

export default function Title({ productsList }: AppProps) {
  const router = useRouter();

  return (
    <div>
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
          <div
            className="flex-center 
      py-1 px-2 bg-white text-black"
          >
            <FaSortAmountDownAlt className="text-lg" />
          </div>
          <div
            className="flex-center 
      py-1 px-2 bg-white text-black"
          >
            <FaSortAmountDown className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
