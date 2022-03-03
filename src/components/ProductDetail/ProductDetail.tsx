import CurrentPath from "../common/CurrentPath";
import MainContent from "./MainContent/MainContent";
import Rating from "./Rating";
import Image from "next/image";
import footerImage from "assets/footer3.jpg";
import Product from "src/model/Product";
import { useRouter } from "next/router";
interface AppProps {
  singleProduct: Product;
}

export default function ProductDetail({ singleProduct }: AppProps) {
  const router = useRouter();

  return (
    <>
      <div className="layout-container">
        <CurrentPath
          url1={`${router.query.productCategory}'s Product`}
          url2={singleProduct.name}
        />
        <Rating singleProduct={singleProduct} />
        <MainContent singleProduct={singleProduct} />
      </div>
      <div className="mt-[70px] translate-y-1">
        <Image src={footerImage} alt="footer image" />
      </div>
    </>
  );
}
