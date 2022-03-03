import CurrentPath from "@/components/common/CurrentPath";
import MainContent from "./MainContent";
import Title from "./Title";
import ImageSearchBar from "./ImageSearchBar";
import Product from "src/model/Product";
import { useRouter } from "next/router";

interface AppProps {
  productsList: Product[];
}

export default function ProductCategory({ productsList }: AppProps) {
  const router = useRouter();

  return (
    <div className="layout-container pb-20">
      <CurrentPath url1={`${router.query.productCategory}'s product`} />
      <div className="flex">
        <Title productsList={productsList} />
        <ImageSearchBar />
      </div>
      <MainContent productsList={productsList} />
    </div>
  );
}
