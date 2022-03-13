import { MdStar } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import React, { useCallback, useEffect, useState } from "react";
import useHtttp from "src/hooks/useHttp";
import { fetchComment } from "src/hooks/lib/api";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import CommentForm from "./CommentForm";
import CommentEmpty from "./CommentEmpty";
import CommentList from "./CommentList";

export default function Comment({ onNumberComment }) {
  const router = useRouter();
  const productId = router.query.productId;
  const [numStar, setNumStar] = useState(undefined);
  const { sendRequest, data, error, status } = useHtttp(fetchComment);

  const ratingProps = {
    size: 50,
    count: 5,
    color: "black",
    activeColor: "yellow",
    a11y: true, // for what?
    emptyIcon: <MdStar className="text-2xl text-[#bebebe]" />,
    filledIcon: <MdStar className="text-2xl text-primary-color" />,
    onChange: (newValue) => {
      setNumStar(newValue);
    },
  };

  //////////////////////////////////////////////////
  // When comment is added, fetch comment data
  const addCommentHandler = useCallback(() => {
    sendRequest(productId);
  }, [productId, sendRequest]);

  // When the page is mounted, fetch comment data
  useEffect(() => {
    sendRequest(productId);
    // onNumberComment(data ? data.length : 0);
  }, [sendRequest, productId]);

  // Send number of comment to parent component if it have any comment
  onNumberComment(data ? data.length : 0);

  //////////////////////////////////////////////////
  // Handling different HTTP state
  let comment;

  if (error) {
    comment = <div>ERROR happening</div>;
  }

  if (status === "pending") {
    comment = <LoadingSpinner />;
  }

  if (status === "completed" && (!data || data.length === 0)) {
    comment = <CommentEmpty />;
  }

  if (status === "completed" && data && data.length > 0) {
    comment = <CommentList comments={data} />;
  }
  ///////////////////////////////////////////////
  return (
    <div className={`bg-[#F6F5F3] px-8 pt-8 pb-2`}>
      {comment}
      <div className="flex items-center gap-3 mt-5 ml-[90px]">
        <p>Your rating:</p>
        <ReactStars {...ratingProps} />
      </div>
      <div className="h-[100px] w-full  flex items-center p-4">
        <CommentForm
          numStar={numStar}
          onAddComment={addCommentHandler}
          productId={productId}
        />
      </div>
    </div>
  );
}
