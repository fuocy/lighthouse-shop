import ClothesColor from "./ClothesColor";
import ClothesInfo from "./ClothesInfo";
import ClothesShow from "./ClothesShow";

export default function MainContent() {
  return (
    <div className="grid grid-cols-product-detail gap-x-7 gap-y-28">
      <ClothesColor />
      <ClothesShow />
      <ClothesInfo />
      <div className="bg-green-500 h-[200px] col-span-full">3 </div>
    </div>
  );
}
