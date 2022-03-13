import Image from "next/image";
import { useEffect, useState } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Product from "src/model/Product";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { imageActions } from "src/store/redux-toolkit/imageSlice";

interface AppProps {
  singleProduct: Product;
  allProductsSSG: Product[];
}

export default function SimilarProduct({
  singleProduct,
  allProductsSSG,
}: AppProps) {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const router = useRouter();
  const dispatch = useDispatch();
  ///////////////////////////////////////////////////
  // IS MOBILE
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSize);
    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if ((windowSize.width as number) < 630) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize.width]);
  ///////////////////////////////////////////////////

  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: isMobile ? 2 : 5,
    speed: 700,
    effect: "flip",
    flipEffect: {
      slideShadows: false,
    },
  });

  const handleClickSimilarProduct = (similar: Product) => {
    router.push(`/${similar.category}/${similar.id}`);
    dispatch(imageActions.resetCurrentImage());
  };

  useEffect(() => {
    const filteredProducts = allProductsSSG.filter(
      (product) => product.type === singleProduct.type
    );
    setSimilarProducts(filteredProducts);
  }, [allProductsSSG, singleProduct.type]);

  return (
    <div className="col-span-full">
      <h4 className="text-2xl font-semibold mb-5 text-gray-700">
        Similar products
      </h4>

      <div className="relative swiper ">
        <ul className="grid grid-cols-5 gap-x-[17px] swiper-wrapper">
          {similarProducts.map((similar) => (
            <li key={similar.id} className="group relative swiper-slide ">
              <button onClick={handleClickSimilarProduct.bind(null, similar)}>
                <div className="flex flex-col">
                  <div className="bg-background-grayec relative max-w-[230px] h-[250px] ">
                    <Image
                      src={similar.image.img1}
                      alt=""
                      layout="fill"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 bg-white flex-1  flex flex-col justify-between ">
                    <h5 className="mb-6 text-sm text-left uppercase font-medium h-14">
                      {similar.name}
                    </h5>
                    <div className="text-base text-right font-semibold relative">
                      {similar.discount > 0 && (
                        <div className="absolute -top-[20px] right-[0px] text-[12px] text-gray-500 line-through">{`$ ${similar.price}`}</div>
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
      </div>
    </div>
  );
}
