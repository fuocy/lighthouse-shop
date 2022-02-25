import { TiStarburst } from "react-icons/ti";
import { BsCheck } from "react-icons/bs";
import ClothesSelection from "./ClothesSelection";
import Tabbed from "./Tabbed";
export default function ClothesInfo() {
  return (
    <div>
      <div className="bg-white px-[30px] pt-[37px] pb-[25px] mb-[30px] relative before:content-['Limited'] before:top-[35px] before:absolute before:right-[28px] before:text-rede7 before:bg-[#fdeeee] before:px-[18px] before:py-[12px] before:inline-block before:font-semibold">
        <h2 className="text-[44px] font-extrabold mb-12">
          Nike Men&apos;s Shirt
        </h2>
        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <TiStarburst className="text-3xl text-primary-color" />
            <BsCheck className="text-xl text-black -translate-x-[25px]" />
          </div>
          <p className="-translate-x-[15px] text-xl font-medium">Nike</p>
        </div>
        <p className="mb-[30px] text-[#4b5563] leading-relaxed text-lg max-w-[438px]">
          These men&apos; flannel shirts have a simple design and are available
          in three colors: moss green, dark lead, and wine...
        </p>
        <div className="flex items-center gap-[10px] mb-[78px]">
          <div className="bg-[#fafafa] px-[9px] py-[12px] text-[#4b5563]">
            Men&apos;s Shirt
          </div>
          <div className="bg-[#fafafa] px-[9px] py-[12px] text-[#4b5563]">
            Shirt
          </div>
          <div className="bg-[#fafafa] px-[9px] py-[12px] text-[#4b5563]">
            Nike
          </div>
        </div>
        <ClothesSelection />
      </div>
      <Tabbed />
    </div>
  );
}
