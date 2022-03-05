import ClothesColor from "./ClothesColor";
import ClothesInfo from "./ClothesInfo";
import ClothesShow from "./ClothesShow";
import SimilarProduct from "./SimilarProduct";
import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}

export default function MainContent({ singleProduct }: AppProps) {
  return (
    <div className="grid grid-cols-product-detail gap-x-7 gap-y-[50px]">
      <ClothesColor singleProduct={singleProduct} />
      <ClothesShow singleProduct={singleProduct} />
      <ClothesInfo singleProduct={singleProduct} />
      <SimilarProduct singleProduct={singleProduct} />
    </div>
  );
}
