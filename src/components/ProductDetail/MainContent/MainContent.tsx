import ClothesColor from "./ClothesColor";
import ClothesInfo from "./ClothesInfo";
import ClothesShow from "./ClothesShow";
import SimilarProduct from "./SimilarProduct";

export default function MainContent() {
  return (
    <div className="grid grid-cols-product-detail gap-x-7 gap-y-[50px]">
      <ClothesColor />
      <ClothesShow />
      <ClothesInfo />
      <SimilarProduct />
    </div>
  );
}
