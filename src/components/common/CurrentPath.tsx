import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineChevronRight } from "react-icons/hi";

type AppProps = {
  url1: string;
  url2?: string;
};

export default function PathAndRate({ url1, url2 }: AppProps) {
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-2 text-sm text-[#4b5563] pt-[14px]
      dark:text-white 
    sm:text-xs"
    >
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <HiOutlineChevronRight className="text-base" />
      <Link href={`/${router.query.productCategory}`}>
        <a className="capitalize">{url1}</a>
      </Link>
      {url2 && (
        <>
          <HiOutlineChevronRight className="text-base " />
          <Link
            href={`/${router.query.productCategory}/${router.query.productId}`}
          >
            <a>
              {url2
                .toLowerCase()
                .split(" ")
                .map((word) => {
                  return word[0].toUpperCase() + word.substring(1);
                })
                .join(" ")}
            </a>
          </Link>
        </>
      )}
    </div>
  );
}
