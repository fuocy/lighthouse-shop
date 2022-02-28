import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";

export default function Title() {
  return (
    <div>
      <div className="mt-[30px] font-bold text-5xl mb-6">
        Men&apos;s products
      </div>
      <p className="text-slate-600  text-base mb-[61px] font-medium">
        Showing 24 products out of 231 products
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
