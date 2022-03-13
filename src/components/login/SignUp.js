import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import classes from "styles/input-effect.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useHtttp from "src/hooks/useHttp";
import { signUpAccount } from "src/hooks/lib/api";
import LoadingSpinner from "../common/LoadingSpinner";
import Modal from "../common/Modal";
import useStore from "src/store/zustand/useStore";

export default function SignUp() {
  const { sendRequest, error, status } = useHtttp(signUpAccount);
  const isShowModal = useStore((state) => state.isShowModal);
  const setShowModal = useStore((state) => state.setShowModal);
  const setIsSignIn = useStore((state) => state.setIsSignIn);

  return (
    <>
      {error && isShowModal && (
        <Modal
          type="fail"
          title="FAILED!"
          message={`Your registeration is failed because ${error}`}
          action="TRY AGAIN"
        />
      )}
      {!error && status === "pending" && (
        <div className="absolute-center">
          <LoadingSpinner />
        </div>
      )}
      {!error && status === "completed" && isShowModal && (
        <Modal
          type="success"
          title="SUCCESS!"
          message="Your registeration is successful. Let's sign in now to start wasting money on regular clothes but with brand!"
          action="SIGN IN"
        />
      )}

      <div
        className="absolute top-[30px] right-[30px] bg-white max-w-[600px] h-[650px] rounded-2xl  px-[105px]
      "
      >
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
            password: Yup.string()
              .required("Required.")
              .min(6, "Password is too short - should be 6 chars minimum."),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={async (values) => {
            sendRequest({
              email: values.email,
              password: values.password,
              returnSecureToken: true,
            });
            setShowModal();
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
              <span className={classes["input__span-effect"]} />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
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
          </Form>
        </Formik>
        <div className="mt-5 text-center text-gray-500 mb-7">
          Already have an account?
          <button
            className="text-primary-color hover:text-[#cb9f2a] transition"
            onClick={setIsSignIn.bind(null, true)}
          >
            &nbsp; Sign in
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
}
