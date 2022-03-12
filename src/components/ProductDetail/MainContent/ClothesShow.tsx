import Image from "next/image";
import Product from "src/model/Product";
import { useAppSelector } from "src/store/redux-toolkit/hooks";
interface AppProps {
  singleProduct: Product;
}

export default function ShowClothes({ singleProduct }: AppProps) {
  const currentImage = useAppSelector((state) => state.image.currentImage);
  const imageEntries = Object.entries(singleProduct.image);
  const initialImageArr = imageEntries.map((arr) => arr[1]);
  const twoLastImage = initialImageArr.slice(-2);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative max-w-[473px] h-[473px] bg-background-grayec shadow-sm">
        <Image
          src={currentImage || initialImageArr[0]}
          alt={singleProduct.name}
          priority
          layout="fill"
          className="object-cover"
        />

        {singleProduct.discount > 0 && (
          <div className="flex items-center gap-1 bg-primary-color py-[15px] pl-[7px] absolute top-[18px] left-[18px] font-semibold ">
            <p className="text-xl leading-none">{singleProduct.discount}%</p>
            <p className="uppercase text-[9px] -rotate-90 leading-none ">off</p>
          </div>
        )}
      </div>
      <ul
        className="flex flex-col gap-1 
      sm:hidden"
      >
        {twoLastImage.map((imageUrl) => (
          <li
            key={imageUrl}
            className="relative max-w-[473px] h-[473px]  bg-background-grayec group"
          >
            <Image
              src={imageUrl}
              alt={singleProduct.name}
              priority
              layout="fill"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
