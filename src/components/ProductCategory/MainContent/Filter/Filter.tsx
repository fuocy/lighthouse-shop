import Product from "src/model/Product";
import PriceRange from "./PriceRange";
import Checkboxs from "./Checkboxs";
// import AccordionCategory from "./Accordions/AccordionCategory";
import FilterStatus from "./Accordions/FilterStatus";

type AppProps = {
  productsList: Product[];
};

export default function Filter({ productsList }: AppProps) {
  return (
    <div>
      {/* <AccordionCategory /> */}
      <PriceRange />
      <FilterStatus />
      <Checkboxs productsList={productsList} />
    </div>
  );
}
