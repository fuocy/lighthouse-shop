import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Product from "src/model/Product";
import Link from "next/link";
import useStore from "src/store/zustand/useStore";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { imageActions } from "src/store/redux-toolkit/imageSlice";
import { useAppSelector } from "src/store/redux-toolkit/hooks";
import useHtttp from "src/hooks/useHttp";
import { fetchAllProducts } from "src/hooks/lib/api";
import LoadingSpinner from "@/components/common/LoadingSpinner";

interface AppProps {
  singleProduct: Product;
}

export default function RecentlyViewed({ singleProduct }: AppProps) {
  // const [allProducts, setAllProducts] = useState<Product[]>([]);
  const viewedProductIds = useAppSelector(
    (state) => state.viewed.viewedProductIds
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    sendRequest,
    data: allProducts,
    error,
    status,
  } = useHtttp(fetchAllProducts);

  const [rederedViewedProducts, setRederedViewedProducts] = useState<Product[]>(
    []
  );

  useEffect(() => {
    // const fetchAllProducts = async () => {
    //   const { data } = await axios.get(`/api/filter-type/filter-type-all`);
    //   const allProducts = data.filteredProducts.map((product: Product) => ({
    //     ...product,
    //     id: product._id.toString(),
    //   }));

    //   setAllProducts(allProducts);
    // };
    // fetchAllProducts().catch((error) => {
    //   console.log(`${error.message} 😥😥😥`);
    // });
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (status === "completed" && !error) {
      const recentlyViewedProducts = allProducts.filter((product: Product) =>
        viewedProductIds.includes(product.id)
      );

      const sortedRecentlyView = recentlyViewedProducts
        .slice()
        .sort(function (a: Product, b: Product) {
          return (
            viewedProductIds.indexOf(a.id) - viewedProductIds.indexOf(b.id)
          );
        });

      setRederedViewedProducts(sortedRecentlyView);
    }
  }, [allProducts, error, status, viewedProductIds]);

  if (error) {
    return <div>{error}</div>;
  }

  if (status === "pending") {
    return (
      <div className="col-span-full">
        <h4 className="text-2xl font-semibold mb-5 text-gray-700">
          Recently Viewed
        </h4>
        <LoadingSpinner />;
      </div>
    );
  }

  // useEffect(() => {
  //   const swiper = new Swiper(".swiper", {
  //     modules: [Navigation, Pagination],
  //     direction: "horizontal",
  //     loop: false,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     slidesPerView: 5,
  //     speed: 300,
  //     effect: "flip",
  //     flipEffect: {
  //       slideShadows: false,
  //     },
  //   });
  // }, []);

  const handleClickSimilarProduct = (viewedProduct: Product) => {
    router.push(`/${viewedProduct.category}/${viewedProduct.id}`);
    dispatch(imageActions.resetCurrentImage());
  };

  return (
    <div className="col-span-full">
      <h4 className="text-2xl font-semibold mb-5 text-gray-700">
        Recently Viewed
      </h4>
      {/* swiper */}
      <div className="relative ">
        {/* swiper-wrapper */}
        <ul className="grid grid-cols-5 gap-x-[17px] ">
          {/* swiper-slide */}
          {rederedViewedProducts.map((viewedProduct) => (
            <li key={viewedProduct.id} className=" group relative ">
              <button
                onClick={handleClickSimilarProduct.bind(null, viewedProduct)}
              >
                <div className="flex flex-col">
                  <div className="bg-background-grayec relative w-[220px] h-[250px]">
                    <Image
                      src={viewedProduct.image.img1}
                      alt=""
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white flex-1  flex flex-col justify-between ">
                    <h5 className="mb-6 text-sm font-medium">
                      {viewedProduct.name}
                    </h5>
                    <div className="text-base font-semibold relative">
                      {viewedProduct.discount > 0 && (
                        <div className="absolute -top-[2px] left-[140px] text-[12px] text-gray-500 line-through">{`$ ${viewedProduct.price}`}</div>
                      )}
                      {`$${(
                        viewedProduct.price -
                        (viewedProduct.price * viewedProduct.discount) / 100
                      ).toFixed(2)}`}
                    </div>
                  </div>
                  {viewedProduct.status.limited && (
                    <div className="absolute top-[8px] left-[8px] py-[7px] px-[10px] text-rede7 bg-[#fdeeee] font-medium">
                      Limited
                    </div>
                  )}
                  {viewedProduct.discount > 0 && (
                    <div className=" absolute bg-primary-color py-[5px] px-[10px] top-[8px] right-[8px]">
                      <p className="text-lg font-semibold leading-none">
                        {viewedProduct.discount}%
                      </p>
                      <p className="text-[9px] font-semibold text-center">
                        OFF
                      </p>
                    </div>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* <div className="swiper-pagination w-3 h-3 "></div>
        <div className="swiper-button-prev swiper-button-black"></div>
        <div className="swiper-button-next swiper-button-black"></div> */}
      </div>
    </div>
  );
}
