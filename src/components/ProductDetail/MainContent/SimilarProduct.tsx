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

interface AppProps {
  singleProduct: Product;
}

// const similarProducts = [
//   {
//     img: similar1,
//     name: "Modern Iranian Lotus Watch...",
//     id: 1,
//     price: 5000,
//     oldPrice: "",
//     tag: "Limited",
//   },
//   {
//     img: similar2,
//     name: "Blue short sleeve T-shirt...",
//     id: 2,
//     price: 40.7,
//     oldPrice: "",
//     tag: "",
//   },
//   {
//     img: similar3,
//     name: "LX leather handbag, model 007...",
//     id: 3,
//     price: 25.2,
//     oldPrice: 70,
//     tag: "25% off",
//   },
//   {
//     img: similar4,
//     name: "Cream and brown hand basket...",
//     id: 4,
//     price: 14.8,
//     oldPrice: "",
//     tag: "Limited",
//   },
//   {
//     img: similar5,
//     name: "Red winter blouse...",
//     id: 5,
//     price: 20.6,
//     oldPrice: "",
//     tag: "Limited",
//   },
// ];

// export function LimitedTag() {
//   return (

//   );
// }

// export function SaleOffTag() {
//   return (

//   );
// }

export function OldPriceTag() {
  return (
    <div className="invisible group-last:visible absolute -top-[2px] left-12 text-[12px] text-gray-500 line-through">{`$ ${70}`}</div>
  );
}

export default function SimilarProduct({ singleProduct }: AppProps) {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchSimilaryProducts = async () => {
      const { data } = await axios.get(
        `/api/filter-type/filter-type-${singleProduct.type}`
      );
      const similarProductsArr = data.filteredProducts.map(
        (product: Product) => ({
          ...product,
          id: product._id.toString(),
        })
      );

      setSimilarProducts(similarProductsArr);
    };
    fetchSimilaryProducts().catch((error) => {
      console.log(`${error.message} 😥😥😥`);
    });
  }, [singleProduct]);

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

  return (
    <div className="col-span-full">
      <h4 className="text-2xl font-semibold mb-5 text-gray-700">
        Similar products
      </h4>

      <div className="relative swiper">
        <ul className="grid grid-cols-5 gap-x-[17px] swiper-wrapper">
          {similarProducts.map((similar) => (
            <li key={similar.id} className=" group relative swiper-slide ">
              <Link href={`/${similar.category}/${similar.id}`} passHref>
                <a className="flex flex-col">
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
                </a>
              </Link>
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
