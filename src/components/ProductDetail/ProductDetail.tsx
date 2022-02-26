import CurrentPath from "./CurrentPath";
import MainContent from "./MainContent/MainContent";
import Rating from "./Rating";
import Image from "next/image";
import footerImage from "assets/footer3.jpg";
export default function ProductDetail() {
  return (
    <>
      <div className="layout-container">
        <CurrentPath />
        <Rating />
        <MainContent />
      </div>
      <div className="mt-[70px] translate-y-1">
        <Image src={footerImage} alt="footer image" />
      </div>
    </>
  );
}
