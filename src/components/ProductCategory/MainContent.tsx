import AccordionCategory from "./Accordions/AccordionCategory";
import Accordion from "./Accordions/fail";
import Checkboxs from "./Checkboxs/Checkboxs";
import ProductList from "./ProductList";

export default function MainContent() {
  return (
    <div className="grid grid-cols-product-category gap-x-4 items-start">
      <div>
        <AccordionCategory />
        <Checkboxs />
      </div>
      <ProductList />
    </div>
  );
}
