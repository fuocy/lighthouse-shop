import Product from "src/model/Product";
import PriceRange from "./PriceRange";
import Checkboxs from "./Checkboxs";
import AccordionCategory from "./Accordions/AccordionCategory";

type AppProps = {
  productsList: Product[];
};

export default function Filter({ productsList }: AppProps) {
  return (
    <div>
      {/* <AccordionCategory /> */}
      <PriceRange />
      <Checkboxs productsList={productsList} />
    </div>
  );
}
