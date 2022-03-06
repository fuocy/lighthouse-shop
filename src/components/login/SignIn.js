import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import classes from "styles/input-effect.module.css";

export default function SignIn({ onSetAuth }) {
  const toggleAuthHandler = () => {
    onSetAuth(false);
  };

  return (
    <div className="absolute top-[30px] right-[30px] bg-white w-[600px] h-[650px] rounded-2xl">
      <h1 className="font-bold text-5xl text-primary-color text-center mt-[80px] mb-7">
        Sign in to Lighthouse
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
        or use your email account:
      </div>
      <form className="max-w-[400px] mx-auto ">
        <div
          className={`bg-[#F6F5F3] flex items-center px-3 mb-3 ${classes["input__div-effect"]}`}
        >
          <HiOutlineMail className="text-2xl text-gray-400" />
          <input
            type="text"
            className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
            placeholder="Email"
          />
          <span className={classes["input__span-effect"]} />
        </div>
        <div
          className={`bg-[#F6F5F3] flex items-center px-3 mb-5 ${classes["input__div-effect"]}`}
        >
          <RiLockPasswordLine className="text-2xl text-gray-400" />
          <input
            type="password"
            className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
            placeholder="Password"
          />
          <span className={classes["input__span-effect"]} />
        </div>
        <div className="mt-5 text-center text-gray-500 mb-8">
          <button className="text-gray-500 hover:text-gray-700 transition">
            Forget your password?
          </button>
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
          Sign In
          <div
            className="-z-10 bg-[#ffffff33] 
                  absolute top-[-1000%] bottom-[-375%] 
                  w-9 
                  translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
          ></div>
        </button>
      </form>
      <div className="mt-5 text-center text-gray-500">
        Don&apos;t have any accounts?
        <button
          className="text-primary-color hover:text-[#cb9f2a] transition"
          onClick={toggleAuthHandler}
        >
          &nbsp; Sign up
        </button>
      </div>
    </div>
  );
}
