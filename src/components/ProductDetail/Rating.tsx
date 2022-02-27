import Link from "next/link";
import { MdStar } from "react-icons/md";
export default function Rating() {
  return (
    <div className="flex items-center gap-2 justify-end text-[17px] font-medium text-[#374151] mb-6 mt-7">
      <div>4/5</div>
      <div className="flex items-center gap-[0.000000005px]">
        <MdStar className="text-2xl text-primary-color" />
        <MdStar className="text-2xl text-primary-color" />
        <MdStar className="text-2xl text-primary-color" />
        <MdStar className="text-2xl text-primary-color" />
        <MdStar className="text-2xl text-[#bebebe]" />
      </div>
      <Link href="/" passHref>
        <a>(Read all review)</a>
      </Link>
    </div>
  );
}
