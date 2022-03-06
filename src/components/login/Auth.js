import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="-z-10 ">
      <video loop autoPlay muted width={1600}>
        <source
          src="https://raw.githubusercontent.com/ph1109ji/video/master/IntroLighthouse.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {isSignIn && <SignIn onSetAuth={setIsSignIn} />}
      {!isSignIn && <SignUp onSetAuth={setIsSignIn} />}
    </div>
  );
}
