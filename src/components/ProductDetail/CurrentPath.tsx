import Link from "next/link";

export default function PathAndRate() {
  return (
    <div className="flex items-center gap-2 text-sm text-[#4b5563] mb-7">
      <Link href="/">
        <a>Homepage</a>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
      <Link href="/men">
        <a>Men&apos;s Product</a>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
      <Link href="/men/men-shirt">
        <a>Nike Men&apos;s Shirt</a>
      </Link>
    </div>
  );
}
