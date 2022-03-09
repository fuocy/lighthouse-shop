import similar1 from "assets/clothes/similar/similar1.png";
import similar2 from "assets/clothes/similar/similar2.png";
import similar3 from "assets/clothes/similar/similar3.png";
import similar4 from "assets/clothes/similar/similar4.png";
import similar5 from "assets/clothes/similar/similar5.png";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
// import Swiper JS
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Product from "src/model/Product";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { imageActions } from "src/store/redux-toolkit/imageSlice";
import useStore from "src/store/zustand/useStore";
import { fetchAllProducts, fetchTypeProducts } from "src/hooks/lib/api";
import useHtttp from "src/hooks/useHttp";
import LoadingSpinner from "@/components/common/LoadingSpinner";

interface AppProps {
  singleProduct: Product;
}

// export function OldPriceTag() {
//   return (
//     <div className="invisible group-last:visible absolute -top-[2px] left-12 text-[12px] text-gray-500 line-through">{`$ ${70}`}</div>
//   );
// }

export default function SimilarProduct({ singleProduct }: AppProps) {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    sendRequest,
    data: typeProducts,
    error,
    status,
  } = useHtttp(fetchTypeProducts);

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      // Optional parameters
      direction: "horizontal",
      loop: false,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },

      slidesPerView: 5,
      speed: 300,
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
    });
    //   observer: true,
    //   observeParents: true,
    //   parallax: true,
    //   effect: "fade",
    //   direction: "horizontal",
    //   loop: true,
    //   centeredSlides: true,
    //   slidesPerView: 5,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   speed: 200,
  }, []);

  useEffect(() => {
    // const fetchSimilaryProducts = async () => {
    //   const { data } = await axios.get(
    //     `/api/filter-type/filter-type-${singleProduct.type}`
    //   );
    //   const similarProductsArr = data.filteredProducts.map(
    //     (product: Product) => ({
    //       ...product,
    //       id: product._id.toString(),
    //     })
    //   );

    //   setSimilarProducts(similarProductsArr);
    // };
    // fetchSimilaryProducts().catch((error) => {
    //   console.log(`${error.message} 😥😥😥`);
    // });
    sendRequest(singleProduct.type);
  }, [sendRequest, singleProduct.type]);

  useEffect(() => {
    if (status === "completed" && !error) {
      setSimilarProducts(typeProducts);
    }
  }, [typeProducts, error, status]);

  if (error) {
    return <div>{error}</div>;
  }

  if (status === "pending") {
    return (
      <div className="col-span-full">
        <h4 className="text-2xl font-semibold mb-5 text-gray-700">
          Similar products
        </h4>
        <LoadingSpinner />;
      </div>
    );
  }

  const handleClickSimilarProduct = (similar: Product) => {
    router.push(`/${similar.category}/${similar.id}`);
    dispatch(imageActions.resetCurrentImage());

    // setRecentlyViewed(similar.id);
  };

  return (
    <div className="col-span-full">
      <h4 className="text-2xl font-semibold mb-5 text-gray-700">
        Similar products
      </h4>

      <div className="relative swiper">
        <ul className="grid grid-cols-5 gap-x-[17px] swiper-wrapper">
          {similarProducts.map((similar) => (
            <li key={similar.id} className=" group relative swiper-slide ">
              <button onClick={handleClickSimilarProduct.bind(null, similar)}>
                <div className="flex flex-col">
                  <div className="bg-background-grayec relative w-[220px] h-[250px]">
                    <Image
                      src={similar.image.img1}
                      alt=""
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white flex-1  flex flex-col justify-between ">
                    <h5 className="mb-6 text-sm font-medium">{similar.name}</h5>
                    <div className="text-base font-semibold relative">
                      {similar.discount > 0 && (
                        <div className="absolute -top-[2px] left-[140px] text-[12px] text-gray-500 line-through">{`$ ${similar.price}`}</div>
                      )}
                      {`$${(
                        similar.price -
                        (similar.price * similar.discount) / 100
                      ).toFixed(2)}`}
                    </div>
                  </div>
                  {similar.status.limited && (
                    <div className="absolute top-[8px] left-[8px] py-[7px] px-[10px] text-rede7 bg-[#fdeeee] font-medium">
                      Limited
                    </div>
                  )}
                  {similar.discount > 0 && (
                    <div className=" absolute bg-primary-color py-[5px] px-[10px] top-[8px] right-[8px]">
                      <p className="text-lg font-semibold leading-none">
                        {similar.discount}%
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

        <div className="swiper-pagination w-3 h-3 "></div>
        <div className="swiper-button-prev swiper-button-black"></div>
        <div className="swiper-button-next swiper-button-black"></div>
        {/* 
        <BsChevronLeft className="absolute top-1/2 -translate-y-1/2 -left-12 text-4xl text-gray-300 hover:text-gray-600 transition duration-200 cursor-pointer" />
        <BsChevronRight className="absolute top-1/2 -translate-y-1/2 -right-12 text-4xl text-gray-300 hover:text-gray-600 transition duration-200 cursor-pointer" /> */}
      </div>
    </div>
  );
}
