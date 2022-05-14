import LoadingSpinner from "@/components/common/LoadingSpinner";
import Image from "next/image";
import classes2 from "styles/input-effect.module.css";
import React, { useEffect, useRef } from "react";
import { sendComment } from "src/hooks/lib/api";
import useHtttp from "src/hooks/useHttp";
import classes from "styles/scrollbar.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "src/store/zustand/useStore";
import { useRouter } from "next/router";

type AppProps = {
  numStar: number;
  productId: string;
  onAddComment: () => void;
};

export default function CommentForm({
  numStar,
  onAddComment,
  productId,
}: AppProps) {
  const inputTextRef = useRef<HTMLTextAreaElement>(null);
  const isLoggedIn = useStore((state) => !!state.tokenId);
  const { sendRequest, error, status } = useHtttp(sendComment);
  const router = useRouter();
  const emailUser = useStore((state) => state.email);
  const avatarUser = useStore((state) => state.avatar);
  const sendCommentHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // We have to put this enteredText INSIDE this function to ensure the INPUT and the REF is correctly CONNECTED and HAVE VALUE (SO WE USE !.value BELOW FOR THIS REASON)
    const enteredText = inputTextRef.current!.value;

    if (!isLoggedIn) {
      toast.error("You have to log in to comment", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        router.push("/auth");
      }, 2000);

      return;
    }

    if (!numStar || enteredText.trim().length === 0) {
      toast.error("You have to write something and rate us with 1 - 5 stars", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    // DATE

    const commentTime = new Date().getTime();
    // const formatedCommentDate = commentDate.toLocaleDateString("en-US", {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });

    sendRequest({
      productId,
      commentData: {
        text: enteredText,
        avatar: avatarUser,
        name: emailUser.slice(0, -10),
        numStar,
        date: commentTime,
      },
    });
  };

  // When finishing adding comment, inform parent comment to fetch comment immediately update newly added comment
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddComment();
    }
  }, [status, error, onAddComment]);

  if (error) {
    return <div>ERROR bro 😥😥😥</div>;
  }

  if (status === "pending") {
    return (
      <div className="mx-auto">
        <LoadingSpinner />;
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <form
        className="flex items-center gap-3  w-full"
        onSubmit={sendCommentHandler}
      >
        <div className="relative h-[60px] w-[60px] rounded-full overflow-hidden ">
          <Image
            src={`${avatarUser || "https://i.ibb.co/CJqGvY6/satthudatinh.jpg"}`}
            alt="avatar people who comments"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className={`${classes2["input__div-effect"]} flex-1`}>
          <textarea
            className={`w-full h-[70px] outline-none rounded-lg shadow-sm py-2 px-3 font-jakarta ${classes["custom-scrollbar"]} ${classes2["input__input-effect"]}`}
            placeholder="What's your thought?"
            ref={inputTextRef}
          />
          <span className={classes2["input__span-effect"]} />
        </div>
        <button className="bg-primary-color self-stretch px-3 rounded-2xl hover:bg-[#e5b32f] transition ">
          Submit
        </button>
      </form>
    </>
  );
}
