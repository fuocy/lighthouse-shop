import hangerEmpty from "assets/hangerEmpty.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CartEmpty() {
  const router = useRouter();

  const goHomepageHandler = () => {
    router.push("/men");
  };

  return (
    <div className="text-center">
      <div className="mb-8 mt-32">
        <Image
          src={hangerEmpty}
          alt="image 404"
          className="object-cover"
          priority
        />
      </div>
      <h2 className="text-3xl text-gray-600 mb-16 font-bold">
        {`This hanger is empty :(`}
      </h2>
      <button
        onClick={goHomepageHandler}
        className="px-5 py-3 border-2 border-primary-color rounded-sm text-black hover:bg-[#fecd48] transition"
      >
        This button is useless but you gonna click anyway :)
      </button>
    </div>
  );
}
