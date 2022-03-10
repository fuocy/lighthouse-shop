import ComponentAccordion from "./Accordions/AccordionsGeneral";
import { GrSubtract } from "react-icons/gr";
import classes from "./PriceRange.module.css";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
import { filterPriceActions } from "src/store/redux-toolkit/filterPrice";
import useStore from "src/store/zustand/useStore";

const GAP = 1000;

export default function PriceRange() {
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const numFilteredPrice = useStore((state) => state.numFilteredPrice);
  const fetchedMinPrice = useAppSelector((state) => state.filterPrice.minPrice);
  const fetchedMaxPrice = useAppSelector((state) => state.filterPrice.maxPrice);

  const updateMinAndProgress = (value: any) => {
    setMinInput(value);
    const percent = (+value / 12000) * 100;
    progressRef.current!.style.left = percent + "%";
  };

  const updateMaxAndProgress = (value: any) => {
    setMaxInput(value);
    const percent = 100 - (+value / 12000) * 100;
    progressRef.current!.style.right = percent + "%";
  };

  useEffect(() => {
    // DEFAULT VALUE INPUT
    const DEFAULT_MIN_VAL = "2500";
    const DEFAULT_MAX_VAL = "8500";

    updateMinAndProgress(fetchedMinPrice ?? DEFAULT_MIN_VAL);
    updateMaxAndProgress(fetchedMaxPrice ?? DEFAULT_MAX_VAL);
  }, [fetchedMinPrice, fetchedMaxPrice]);

  // const handleChangeInput = (e: any) => {};

  const handleChangeSlider = (e: any) => {
    if (e.target.name === "min-range") {
      updateMinAndProgress(e.target.value);
      if (+maxInput - +e.target.value < GAP) {
        updateMinAndProgress((+maxInput - GAP).toString());
      }
    } else {
      updateMaxAndProgress(e.target.value);
      if (+e.target.value - +minInput < GAP) {
        updateMaxAndProgress((+minInput + GAP).toString());
      }
    }
  };

  const handleFilter = () => {
    dispatch(filterPriceActions.setRange({ min: +minInput, max: +maxInput }));
  };

  return (
    <ComponentAccordion heading="Price">
      <div className="px-6 py-3 pb-5 mb-5 shadow-sm">
        <div className="flex items-center gap-5 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm">From</span>
            {/* <input
              type="text"
              className=" w-16 py-2 px-2 outline-none border border-gray-500 rounded-md text-sm text-center"
              name="min-input"
              value={minInput}
              onChange={handleChangeInput}
            /> */}
            <div className=" text-center select-none font-semibold text-lg w-[66px]">
              {`$${minInput}`}
            </div>
          </div>
          {/* <GrSubtract className="text-base" /> */}
          <div className="flex items-center gap-2">
            <span className="text-sm">To</span>
            {/* <input
              type="text"
              className=" w-16 py-2 px-2 outline-none border border-gray-500 rounded-md text-sm text-center"
              name="max-input"
              value={maxInput}
              onChange={handleChangeInput}
            /> */}
            <div className="text-center select-none font-semibold text-lg w-[66px]">
              {`$${maxInput}`}
            </div>
          </div>
        </div>
        <div className="h-[5px] bg-[#ddd] rounded-md relative">
          <div
            className={`h-[5px] absolute bg-primary-color rounded-md`}
            ref={progressRef}
          ></div>
        </div>
        <div className="relative">
          <input
            className={`absolute top-[-5px] h-[5px] appearance-none [background:none] w-full pointer-events-none ${classes.sliderThumb}`}
            type="range"
            min="0"
            max="12000"
            step="100"
            name="min-range"
            onChange={handleChangeSlider}
            value={minInput}
          />
          <input
            className={`absolute top-[-5px] h-[5px] appearance-none [background:none] w-full  pointer-events-none ${classes.sliderThumb}`}
            type="range"
            min="0"
            max="12000"
            step="100"
            name="max-range"
            onChange={handleChangeSlider}
            value={maxInput}
          />
        </div>
        <div className="text-center mb-6">
          <button
            onClick={handleFilter}
            className="mt-8 border-2 py-3 px-5  hover:border-primary-color transition active:translate-y-[1px]"
          >
            <p>Apply filter</p>
          </button>
        </div>
        <div>
          <span className="">Result: </span>
          <span>{numFilteredPrice} products</span>
        </div>
      </div>
    </ComponentAccordion>
  );
}
