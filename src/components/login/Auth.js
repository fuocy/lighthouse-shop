import SignIn from "./SignIn";
import SignUp from "./SignUp";
import useStore from "src/store/zustand/useStore";

export default function Login() {
  const isSignIn = useStore((state) => state.isSignIn);

  return (
    <div className="-z-10 ">
      <video
        loop
        autoPlay
        muted
        width={1600}
        className="lg:hidden fixed object-cover"
      >
        <source
          src="https://raw.githubusercontent.com/ph1109ji/video/master/IntroLighthouse.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {isSignIn && <SignIn />}
      {!isSignIn && <SignUp />}
    </div>
  );
}
