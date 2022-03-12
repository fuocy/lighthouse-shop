import Product from "src/model/Product";
import { Link } from "react-scroll";
import RenderStar from "@/components/common/RenderStar";
interface AppProps {
  singleProduct: Product;
}

export default function Rating({ singleProduct }: AppProps) {
  return (
    <div className="flex items-center gap-2 justify-end text-[17px] font-medium text-[#374151] mb-6 mt-7">
      <div>{singleProduct.star}/5</div>
      <RenderStar numStar={singleProduct.star} sizeStar="text-2xl sm:text-lg" />
      <Link to="tab-section" smooth={true} offset={-100}>
        <p
          className="hover:text-gray-500 transition cursor-pointer 
        sm:text-sm"
        >
          (Read all review)
        </p>
      </Link>
    </div>
  );
}
