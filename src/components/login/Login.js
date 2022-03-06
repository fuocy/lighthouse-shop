import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export default function Login() {
  return (
    <div className="-z-10 ">
      <video loop autoPlay muted width={1600}>
        <source
          src="https://raw.githubusercontent.com/ph1109ji/video/master/IntroLighthouse.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-[30px] right-[30px] bg-white w-[600px] h-[650px] rounded-2xl">
        <h1 className="font-bold text-5xl text-primary-color text-center mt-[80px] mb-7">
          Create Account
        </h1>
        <div className="flex items-center justify-center gap-5 mb-12">
          <div className="h-12 w-12 rounded-full border shadow-sm flex-center">
            <FaFacebookF className="text-2xl" />
          </div>
          <div className="h-12 w-12 rounded-full border shadow-sm flex-center">
            <BsGoogle className="text-2xl" />
          </div>
          <div className="h-12 w-12 rounded-full border shadow-sm flex-center">
            <GrLinkedinOption className="text-2xl" />
          </div>
        </div>
        <div className="text-center text-gray-500 tracking-widest mb-6">
          or use your email for registration
        </div>
        <form className="max-w-[400px] mx-auto ">
          <div className="bg-[#F6F5F3] flex items-center px-3 mb-3">
            <HiOutlineUser className="text-2xl text-gray-400" />
            <input
              type="text"
              className="bg-transparent flex-1 py-4 px-5 outline-none font-jakarta"
              placeholder="Name"
            />
          </div>
          <div className="bg-[#F6F5F3] flex items-center px-3 mb-3">
            <HiOutlineMail className="text-2xl text-gray-400" />
            <input
              type="text"
              className="bg-transparent flex-1 py-4 px-5 outline-none font-jakarta"
              placeholder="Email"
            />
          </div>
          <div className="bg-[#F6F5F3] flex items-center px-3 mb-10 ">
            <RiLockPasswordLine className="text-2xl text-gray-400" />
            <input
              type="text"
              className="bg-transparent flex-1 py-4 px-5 outline-none font-jakarta"
              placeholder="Password"
            />
          </div>
          <button
            className="uppercase bg-primary-color font-extrabold text-xl 
                      shadow-md rounded-full
                      active:shadow-sm active:scale-[.98] active:translate-y-0 
                      active:bg-[#e5b32f] 
                      hover:bg-[#fecd48] hover:-translate-y-[2px] 
                      transition-all duration-[250ms] 
                      z-10 relative overflow-hidden 
                      py-5 px-20
                      mx-auto block
                      group"
          >
            Sign Up
            <div
              className="-z-10 bg-[#ffffff33] 
                        absolute top-[-1000%] bottom-[-375%] 
                        w-9 
                        translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
            ></div>
          </button>
        </form>
      </div>
    </div>
  );
}
