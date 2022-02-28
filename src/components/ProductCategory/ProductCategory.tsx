import CurrentPath from "@/components/common/CurrentPath";
import MainContent from "./MainContent";

import Title from "./Title";
import ImageSearchBar from "./ImageSearchBar";
export default function ProductCategory() {
  return (
    <div className="layout-container">
      <CurrentPath url1="Men's product" />
      <div className="flex">
        <Title />
        <ImageSearchBar />
      </div>
      <MainContent />
    </div>
  );
}
