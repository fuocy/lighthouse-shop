import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import classes from "styles/input-effect.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignUp({ onSetAuth }) {
  const toggleAuthHandler = () => {
    onSetAuth(true);
  };

  return (
    <div className="absolute top-[30px] right-[30px] bg-white w-[600px] h-[650px] rounded-2xl">
      <h1 className="font-bold text-5xl text-primary-color text-center mt-[35px] mb-5">
        Create Account
      </h1>
      <div className="flex items-center justify-center gap-5 mb-8">
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
        or use your email for registration:
      </div>
      <Formik
        initialValues={{ name: "", password: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
          // Yup.string()
          password: Yup.string()
            .required("Required.")
            .min(6, "Password is too short - should be 6 chars minimum."),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="max-w-[400px] mx-auto ">
          <div
            className={`bg-[#F6F5F3] flex items-center px-3 mb-1 ${classes["input__div-effect"]}`}
          >
            <HiOutlineUser className="text-2xl text-gray-400" />
            <Field
              name="name"
              type="text"
              className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
              placeholder="Name"
            />
            {/* <input
              type="text"
              className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
              placeholder="Name"
            /> */}
            <span className={classes["input__span-effect"]} />
          </div>
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />
          <div
            className={`bg-[#F6F5F3] flex items-center px-3 mt-3 mb-1 ${classes["input__div-effect"]}`}
          >
            <HiOutlineMail className="text-2xl text-gray-400" />
            <Field
              name="email"
              type="email"
              className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
              placeholder="Email"
            />
            {/* <input
              type="email"
              className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
              placeholder="Email"
            /> */}
            <span className={classes["input__span-effect"]} />
          </div>
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
          <div
            className={`bg-[#F6F5F3] flex items-center px-3 mt-3 mb-1 ${classes["input__div-effect"]}`}
          >
            <RiLockPasswordLine className="text-2xl text-gray-400" />
            <Field
              name="password"
              type="password"
              className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
              placeholder="Password"
            />
            {/* <input
              type="password"
              className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
              placeholder="Password"
            /> */}
            <span className={classes["input__span-effect"]} />
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
          <button
            className="uppercase bg-primary-color font-extrabold text-xl 
                shadow-md rounded-full
                active:shadow-sm active:scale-[.98] active:translate-y-0 
                active:bg-[#e5b32f] 
                hover:bg-[#fecd48] hover:-translate-y-[2px] 
                transition-all duration-[250ms] 
                z-10 relative overflow-hidden 
                py-5 px-20 mt-10
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
          {/* <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button> */}
        </Form>
      </Formik>
      <div className="mt-5 text-center text-gray-500">
        Already have an account?
        <button
          className="text-primary-color hover:text-[#cb9f2a] transition"
          onClick={toggleAuthHandler}
        >
          &nbsp; Sign in
        </button>
      </div>
    </div>
  );

  // return (
  //   <div className="absolute top-[30px] right-[30px] bg-white w-[600px] h-[650px] rounded-2xl">
  //     <h1 className="font-bold text-5xl text-primary-color text-center mt-[80px] mb-7">
  //       Create Account
  //     </h1>
  //     <div className="flex items-center justify-center gap-5 mb-12">
  //       <div className="h-12 w-12 rounded-full border shadow-sm flex-center">
  //         <FaFacebookF className="text-2xl" />
  //       </div>
  //       <div className="h-12 w-12 rounded-full border shadow-sm flex-center">
  //         <BsGoogle className="text-2xl" />
  //       </div>
  //       <div className="h-12 w-12 rounded-full border shadow-sm flex-center">
  //         <GrLinkedinOption className="text-2xl" />
  //       </div>
  //     </div>
  //     <div className="text-center text-gray-500 tracking-widest mb-6">
  //       or use your email for registration:
  //     </div>
  //     <form className="max-w-[400px] mx-auto ">
  //       <div
  //         className={`bg-[#F6F5F3] flex items-center px-3 mb-3 ${classes["input__div-effect"]}`}
  //       >
  //         <HiOutlineUser className="text-2xl text-gray-400" />
  //         <input
  //           type="text"
  //           className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
  //           placeholder="Name"
  //         />
  //         <span className={classes["input__span-effect"]} />
  //       </div>
  //       <div
  //         className={`bg-[#F6F5F3] flex items-center px-3 mb-3 ${classes["input__div-effect"]}`}
  //       >
  //         <HiOutlineMail className="text-2xl text-gray-400" />
  //         <input
  //           type="text"
  //           className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
  //           placeholder="Email"
  //         />
  //         <span className={classes["input__span-effect"]} />
  //       </div>
  //       <div
  //         className={`bg-[#F6F5F3] flex items-center px-3 mb-10 ${classes["input__div-effect"]}`}
  //       >
  //         <RiLockPasswordLine className="text-2xl text-gray-400" />
  //         <input
  //           type="password"
  //           className={`bg-transparent flex-1 py-4 px-5 outline-none font-jakarta ${classes["input__input-effect"]}`}
  //           placeholder="Password"
  //         />
  //         <span className={classes["input__span-effect"]} />
  //       </div>
  //       <button
  //         className="uppercase bg-primary-color font-extrabold text-xl
  //               shadow-md rounded-full
  //               active:shadow-sm active:scale-[.98] active:translate-y-0
  //               active:bg-[#e5b32f]
  //               hover:bg-[#fecd48] hover:-translate-y-[2px]
  //               transition-all duration-[250ms]
  //               z-10 relative overflow-hidden
  //               py-5 px-20
  //               mx-auto block
  //               group"
  //       >
  //         Sign Up
  //         <div
  //           className="-z-10 bg-[#ffffff33]
  //                 absolute top-[-1000%] bottom-[-375%]
  //                 w-9
  //                 translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"
  //         ></div>
  //       </button>
  //     </form>
  //     <div className="mt-5 text-center text-gray-500">
  //       Already have an account?
  //       <button
  //         className="text-primary-color hover:text-[#cb9f2a] transition"
  //         onClick={toggleAuthHandler}
  //       >
  //         &nbsp; Sign in
  //       </button>
  //     </div>
  //   </div>
  // );
}
