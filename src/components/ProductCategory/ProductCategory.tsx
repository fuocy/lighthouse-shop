import CurrentPath from "@/components/common/CurrentPath";
import MainContent from "./MainContent/MainContent";
import Title from "./Title";
import ImageSearchBar from "./ImageSearchBar";
import Product from "src/model/Product";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "src/store/redux-toolkit/hooks";
import { filterSearchActions } from "src/store/redux-toolkit/filterSearch";

interface AppProps {
  productsList: Product[];
}

export default function ProductCategory({ productsList }: AppProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterSearchActions.resetQuery());
  }, [dispatch, router.query.productCategory]);

  return (
    <div className="layout-container pb-20 sm:px-4 ">
      <CurrentPath url1={`${router.query.productCategory}'s product`} />
      <div className="flex xs:flex-col gap-3">
        <Title productsList={productsList} />
        <ImageSearchBar />
      </div>
      <MainContent productsList={productsList} />
    </div>
  );
}
