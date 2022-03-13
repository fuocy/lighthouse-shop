import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Product from "src/model/Product";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { imageActions } from "src/store/redux-toolkit/imageSlice";
import { useAppSelector } from "src/store/redux-toolkit/hooks";

interface AppProps {
  allProductsSSG: Product[];
}

export default function RecentlyViewed({ allProductsSSG }: AppProps) {
  const [rederedViewedProducts, setRederedViewedProducts] = useState<Product[]>(
    []
  );
  const viewedProductIds = useAppSelector(
    (state) => state.viewed.viewedProductIds
  );

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const recentlyViewedProducts = allProductsSSG.filter((product: Product) =>
      viewedProductIds.includes(product.id)
    );

    const sortedRecentlyView = recentlyViewedProducts
      .slice()
      .sort(function (a: Product, b: Product) {
        return viewedProductIds.indexOf(a.id) - viewedProductIds.indexOf(b.id);
      });

    const deleteFirstProducts = sortedRecentlyView.slice(1);

    setRederedViewedProducts(deleteFirstProducts);
  }, [allProductsSSG, viewedProductIds]);

  const handleClickSimilarProduct = (viewedProduct: Product) => {
    router.push(`/${viewedProduct.category}/${viewedProduct.id}`);
    dispatch(imageActions.resetCurrentImage());
  };

  return (
    <div className="col-span-full">
      {rederedViewedProducts.length > 0 && (
        <h4 className="text-2xl font-semibold mb-5 text-gray-700">
          Recently Viewed
        </h4>
      )}

      <div className="relative">
        <ul className="grid grid-cols-5 gap-x-[17px] sm:grid-cols-2">
          {rederedViewedProducts.map((viewedProduct) => (
            <li
              key={viewedProduct.id}
              className=" group relative sm:last:hidden"
            >
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
                    <h5 className="mb-6 text-sm text-left uppercase font-medium h-14">
                      {viewedProduct.name}
                    </h5>
                    <div className="text-base text-right font-semibold relative">
                      {viewedProduct.discount > 0 && (
                        <div className="absolute -top-[20px] right-[0px] text-[12px] text-gray-500 line-through">{`$ ${viewedProduct.price}`}</div>
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
      </div>
    </div>
  );
}
