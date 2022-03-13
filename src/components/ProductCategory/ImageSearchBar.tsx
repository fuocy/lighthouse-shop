import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import saleOffImg from "assets/saleOff.png";
import { useAppDispatch, useAppSelector } from "src/store/redux-toolkit/hooks";
import React from "react";
import { filterSearchActions } from "src/store/redux-toolkit/filterSearch";
import profile from "assets/profile.jpg";

export default function ImageSearchBar() {
  const query = useAppSelector((state) => state.filterSearch.query);
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSearchActions.setQuery(e.target.value));
  };

  return (
    <div
      className="flex-1  pt-[170px] pb-[20px] relative
    lg:pt-[140px]
    md:pt-[0px]
    sm:pt-[140px]
    xs:pt-[0px]
    "
    >
      <div className="flex max-w-[500px] rounded-full ml-auto relative overflow-x-hidden overflow-y-hidden">
        <input
          type="search"
          className="appearance-none outline-none focus:outline-none border-2 border-gray-200 
          -mr-16 font-jakarta rounded-full py-[3px] px-7 text-sm bg-transparent  peer  flex-1
          lg:flex-none lg:ml-auto lg:w-[260px] lg:text-xs lg:text-[10px] lg:self-center lg:px-4
          xs:w-full"
          placeholder="We can give you everything, except the girl you lost..."
          value={query}
          onChange={handleSearch}
          // Search over 500 beautiful clothes...
          // You can search by name, by brand, by type...
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
      lg:py-0 lg:px-1
      bg-gradient-to-t from-primary-color z-10 to-[#fecd48]
      shadow-primary-color shadow-sm 
      flex-center 
      rounded-full 
      transition hover:animate-btn-search"
        >
          <BiSearch
            className="text-2xl mr-1
          lg:text-lg"
          />
          <p
            className="text-xs
          lg:text-[10px]
          sm:text-[8px]"
          >
            SEARCH
          </p>
        </button>
      </div>
      <div
        className="absolute top-[0px] right-[-70px]
      md:hidden"
      >
        <Image src={saleOffImg} alt="" />
      </div>
      <div
        className="absolute top-[0px] right-[15px]
      2xl:hidden
      xl:hidden
      lg:hidden
      md:hidden
      sm:block
      xs:hidden"
      >
        <Image src={profile} alt="" width={200} height={130} />
      </div>
    </div>
  );
}
