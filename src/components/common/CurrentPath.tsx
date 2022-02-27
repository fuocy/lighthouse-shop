import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";

type AppProps = {
  url1: string;
  url2?: string;
};

export default function PathAndRate({ url1, url2 }: AppProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#4b5563] pt-[14px]">
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <HiOutlineChevronRight className="text-base" />
      <Link href="/men">
        <a>{url1}</a>
      </Link>
      {url2 && (
        <>
          <HiOutlineChevronRight className="text-base" />
          <Link href="/men/men-shirt">
            <a>{url2}</a>
          </Link>
        </>
      )}
    </div>
  );
}
