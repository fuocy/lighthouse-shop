import shirt1 from "assets/clothes/men/shirt1.png";
import shirt2 from "assets/clothes/men/shirt2.png";
import shirt3 from "assets/clothes/men/shirt3.png";
import shirt4 from "assets/clothes/men/shirt4.png";
import shirt5 from "assets/clothes/men/shirt5.png";
import Image from "next/image";

import Product from "src/model/Product";

interface AppProps {
  singleProduct: Product;
}

// const shirts = [
//   { id: "id" + Math.random().toString(36).slice(2), img: shirt1 },
//   { id: "id" + Math.random().toString(36).slice(2), img: shirt2 },
//   { id: "id" + Math.random().toString(36).slice(2), img: shirt3 },
//   { id: "id" + Math.random().toString(36).slice(2), img: shirt4 },
//   { id: "id" + Math.random().toString(36).slice(2), img: shirt5 },
// ];

export default function DifferentColor({ singleProduct }: AppProps) {
  const imageEntries = Object.entries(singleProduct.image);
  // [[img1: dsadsa],[img2: disjaida]]

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {imageEntries.map((imageArr) => (
          <li
            key={imageArr[0]}
            className="relative w-[75px] h-[75px] first:border-4 border-primary-color bg-background-grayec"
          >
            <Image
              src={imageArr[1]}
              alt={singleProduct.name}
              layout="fill"
              className="object-cover"
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
