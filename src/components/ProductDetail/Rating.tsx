import Link from "next/link";
import { MdStar } from "react-icons/md";
import Product from "src/model/Product";
interface AppProps {
  singleProduct: Product;
}

export default function Rating({ singleProduct }: AppProps) {
  const yellowStar = [];
  const noColorStar = [];

  for (let i = 1; i <= singleProduct.star; i++) {
    yellowStar.push(i);
  }

  for (let i = 1; i <= 5 - singleProduct.star; i++) {
    noColorStar.push(i);
  }

  return (
    <div className="flex items-center gap-2 justify-end text-[17px] font-medium text-[#374151] mb-6 mt-7">
      <div>{singleProduct.star}/5</div>
      <ul className="flex items-center gap-[0.000000005px]">
        {yellowStar.map((star) => (
          <li key={star}>
            <MdStar className="text-2xl text-primary-color" />
          </li>
        ))}
        {noColorStar.map((star) => (
          <li key={star}>
            <MdStar className="text-2xl text-[#bebebe]" />
          </li>
        ))}

        {/* <MdStar className="text-2xl text-primary-color" />
        <MdStar className="text-2xl text-primary-color" />
        <MdStar className="text-2xl text-primary-color" />
        <MdStar className="text-2xl text-[#bebebe]" /> */}
      </ul>
      <Link href="/" passHref>
        <a>(Read all review)</a>
      </Link>
    </div>
  );
}
