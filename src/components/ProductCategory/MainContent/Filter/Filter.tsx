import Product from "src/model/Product";
import PriceRange from "./PriceRange";
import Checkboxs from "./Checkboxs";
// import AccordionCategory from "./Accordions/AccordionCategory";
import FilterStatus from "./Accordions/FilterStatus";
import { GiHamburgerMenu } from "react-icons/gi";

type AppProps = {
  productsList: Product[];
};

export default function Filter({ productsList }: AppProps) {
  return (
    <>
      <div className="sm:absolute sm:top-0 sm:left-[-200px]">
        {/* <AccordionCategory /> */}
        <PriceRange />
        <FilterStatus />
        <Checkboxs productsList={productsList} />
      </div>
    </>
  );
}
