import ClothesColor from "./ClothesColor";
import ClothesInfo from "./ClothesInfo/ClothesInfo";
import ClothesShow from "./ClothesShow";
import SimilarProduct from "./SimilarProduct";
import Product from "src/model/Product";
import RecentlyViewed from "./RecentlyViewed";
interface AppProps {
  singleProduct: Product;
  allProducts: Product[];
}

export default function MainContent({ singleProduct, allProducts }: AppProps) {
  return (
    <div className="grid grid-cols-product-detail gap-x-7 gap-y-[50px] sm:grid-cols-1">
      <ClothesColor singleProduct={singleProduct} />
      <ClothesShow singleProduct={singleProduct} />
      <ClothesInfo singleProduct={singleProduct} />
      <SimilarProduct
        singleProduct={singleProduct}
        allProductsSSG={allProducts}
      />
      <RecentlyViewed allProductsSSG={allProducts} />
    </div>
  );
}
