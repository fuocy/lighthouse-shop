import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import ClothesSelection from "./ClothesSelection";
import Tabbed from "./Tabbed/Tabbed";
import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}

export default function ClothesInfo({ singleProduct }: AppProps) {
  return (
    <div>
      <div className="bg-white px-[30px] pt-[37px] pb-[25px] mb-[30px] relative ">
        {singleProduct.status.limited && (
          <div className="top-[35px] absolute right-[28px] text-rede7 bg-[#fdeeee] px-[18px] py-[12px] inline-block font-semibold">
            Limited
          </div>
        )}
        {singleProduct.status.prebuy && (
          <div className="top-[35px] absolute right-[28px] text-[##09a677] bg-[#99fad9] px-[18px] py-[12px] inline-block font-semibold">
            Prebuy
          </div>
        )}
        <h2 className="text-[44px] font-extrabold mb-12">
          {singleProduct.name}
        </h2>
        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <TiStarburst className="text-3xl text-primary-color" />
            <BsCheck className="text-xl text-black -translate-x-[25px]" />
          </div>
          <p className="-translate-x-[15px] text-xl font-medium capitalize">
            {singleProduct.brand}
          </p>
        </div>
        <p className="mb-[30px] text-[#4b5563] leading-relaxed text-lg max-w-[438px]">
          {singleProduct.description}
        </p>
        <ul className="flex items-center gap-[10px] mb-[78px]">
          {singleProduct.tag.map((singleTag) => (
            <li
              key={singleTag}
              className="bg-[#fafafa] px-[9px] py-[12px] text-[#4b5563]"
            >
              {singleTag}
            </li>
          ))}
        </ul>
        <ClothesSelection singleProduct={singleProduct} />
      </div>
      <Tabbed singleProduct={singleProduct} />
    </div>
  );
}
