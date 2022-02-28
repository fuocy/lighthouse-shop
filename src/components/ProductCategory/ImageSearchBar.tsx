import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import saleOffImg from "assets/saleOff.png";

export default function ImageSearchBar() {
  return (
    <div className="flex-1  pt-[170px] pb-[20px] relative">
      <div className="flex max-w-[500px] rounded-full ml-auto relative overflow-x-hidden overflow-y-hidden">
        <input
          type="text"
          className="appearance-none outline-none focus:outline-none border-2 border-gray-200 flex-1 -mr-16 font-jakarta rounded-full py-[3px] px-7 text-sm bg-transparent  peer"
          placeholder="We can give you everything, except the girl you lost..."
          // Search over 500 beautiful clothes...
        />
        <span
          className="
      absolute bottom-0 left-1/2 
      w-full h-[2px] 
      opacity-0 
      bg-primary-color 
      origin-center 
      -translate-x-1/2 scale-x-0 transition duration-[350ms] ease-in 
      peer-focus:-translate-x-1/2 peer-focus:scale-x-100 peer-focus:opacity-100"
        ></span>
        <button
          className="
      py-2 px-3 
      bg-gradient-to-t from-primary-color z-10 to-[#fecd48]
      shadow-primary-color shadow-sm 
      flex-center 
      rounded-full 
      transition hover:animate-btn-search"
        >
          <BiSearch className="text-2xl mr-1" />
          <p className="text-xs">SEARCH</p>
        </button>
      </div>
      <div className="absolute top-[-20px] right-[-100px]">
        <Image src={saleOffImg} alt="" width={900} />
      </div>
    </div>
  );
}
