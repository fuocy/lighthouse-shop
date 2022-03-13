import ProductList from "./ProductList";
import Product from "src/model/Product";
import Filter from "./Filter/Filter";

interface AppProps {
  productsList: Product[];
}

export default function MainContent({ productsList }: AppProps) {
  return (
    <div
      className="grid grid-cols-product-category gap-x-4 items-start
    lg:grid-cols-[180px_1fr]
    sm:grid-cols-1
    "
    >
      <Filter productsList={productsList} />
      <ProductList productsList={productsList} />
    </div>
  );
}
