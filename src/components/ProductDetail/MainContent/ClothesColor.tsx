import Image from "next/image";
import Product from "src/model/Product";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
import { imageActions } from "src/store/redux-toolkit/imageSlice";

interface AppProps {
  singleProduct: Product;
}

export default function DifferentColor({ singleProduct }: AppProps) {
  const dispatch = useAppDispatch();
  let curImage = useAppSelector((state) => state.image.currentImage);
  const imageEntries = Object.entries(singleProduct.image); // [[img1: dsadsa],[img2: disjaida]]

  const handleClick = (imgUrl: string) => {
    dispatch(imageActions.handleClickImage(imgUrl));
  };

  if (curImage === "") {
    curImage = singleProduct.image.img1;
  }

  return (
    <div>
      <ul className="flex flex-col gap-2 sm:flex-row">
        {imageEntries.map((imageArr) => (
          <button
            onClick={handleClick.bind(null, imageArr[1])}
            key={imageArr[0]}
            className={`relative w-[75px] h-[75px]  bg-background-grayec border-4 ${
              imageArr[1] === curImage
                ? " border-primary-color"
                : "border-transparent"
            }`}
          >
            <Image
              src={imageArr[1]}
              alt={singleProduct.name}
              layout="fill"
              className="object-cover"
              priority
            />
          </button>
        ))}
      </ul>
    </div>
  );
}
