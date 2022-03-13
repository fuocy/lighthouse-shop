import Product from "src/model/Product";
import PriceRange from "./PriceRange";
import Checkboxs from "./Checkboxs";
import FilterStatus from "./Accordions/FilterStatus";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

type AppProps = {
  productsList: Product[];
};

export default function Filter({ productsList }: AppProps) {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const toggleFilter = () => {
    setIsShowFilter((isShow) => !isShow);
  };

  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSize);
    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if ((windowSize.width as number) < 630) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize.width]);

  return (
    <>
      {isMobile && !isShowFilter && (
        <GiHamburgerMenu className="text-2xl z-20 " onClick={toggleFilter} />
      )}
      {isMobile && isShowFilter && (
        <CgClose className="text-2xl z-20 " onClick={toggleFilter} />
      )}
      <div
        className={`sm:absolute sm:top-0 sm:left-[-200px] ${
          isShowFilter &&
          "sm:top-[420px] sm:left-0 sm:z-10 shadow-lg bg-white text-sm w-[230px]"
        }`}
      >
        <PriceRange />
        <FilterStatus />
        <Checkboxs productsList={productsList} />
      </div>
    </>
  );
}
