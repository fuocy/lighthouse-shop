import CurrentPath from "../common/CurrentPath";
import MainContent from "./MainContent/MainContent";
import Rating from "./Rating";
import Image from "next/image";
import footerImage from "assets/footer3.jpg";
import Product from "src/model/Product";
import { useRouter } from "next/router";
import { useAppDispatch } from "src/store/redux-toolkit/hooks";
import { useEffect } from "react";
import { imageActions } from "src/store/redux-toolkit/imageSlice";
import { viewedActions } from "src/store/redux-toolkit/viewedSlice";
interface AppProps {
  singleProduct: Product;
  allProducts: Product[];
}

export default function ProductDetail({
  singleProduct,
  allProducts,
}: AppProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(imageActions.resetCurrentImage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(viewedActions.markAsViewed(singleProduct.id));
  }, [dispatch, singleProduct.id]);

  return (
    <>
      <div className="layout-container sm:px-4">
        <CurrentPath
          url1={`${router.query.productCategory}'s Product`}
          url2={singleProduct.name}
        />
        <Rating singleProduct={singleProduct} />
        <MainContent singleProduct={singleProduct} allProducts={allProducts} />
      </div>
      <div className="mt-[70px] translate-y-5">
        <Image src={footerImage} alt="footer image" />
      </div>
    </>
  );
}
