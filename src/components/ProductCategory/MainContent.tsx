import AccordionCategory from "./Accordions/AccordionCategory";
import Accordion from "./Accordions/fail";
import Checkboxs from "./Checkboxs/Checkboxs";
import ProductList from "./ProductList";
// import { PaginatedItems } from "./ProductList";
import Product from "src/model/Product";

interface AppProps {
  productsList: Product[];
}

export default function MainContent({ productsList }: AppProps) {
  return (
    <div className="grid grid-cols-product-category gap-x-4 items-start">
      <div>
        <AccordionCategory />
        <Checkboxs />
      </div>
      <ProductList productsList={productsList} />
      {/* <PaginatedItems itemsPerPage={9} /> */}
    </div>
  );
}
