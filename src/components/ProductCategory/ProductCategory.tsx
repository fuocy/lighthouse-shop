import CurrentPath from "@/components/common/CurrentPath";
import MainContent from "./MainContent";
import Title from "./Title";
import ImageSearchBar from "./ImageSearchBar";
import Product from "src/model/Product";

interface AppProps {
  productsList: Product[];
}

export default function ProductCategory({ productsList }: AppProps) {
  return (
    <div className="layout-container pb-20">
      <CurrentPath url1="Men's product" />
      <div className="flex">
        <Title />
        <ImageSearchBar />
      </div>
      <MainContent productsList={productsList} />
    </div>
  );
}
