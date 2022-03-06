// import Image from "next/image";
// import classes from "styles/scrollbar.module.css";
// import { MdStar } from "react-icons/md";
// import ReactStars from "react-rating-stars-component";
// import React, { useEffect, useRef, useState } from "react";
// import useHtttp from "src/hooks/useHttp";
// import { fetchComment, sendComment } from "src/hooks/lib/api";
// import { useRouter } from "next/router";
// import LoadingSpinner from "@/components/common/LoadingSpinner";
// import CartEmpty from "@/components/Cart/CartEmpty";
// const comments = [
//   {
//     id: 1,
//     text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit
//   corporis perferendis iste fuga nemo eveniet. `,
//     img: "https://source.unsplash.com/user/aaronburden",
//     name: "Phuoc",
//     star: 3,
//   },
//   {
//     id: 2,
//     text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit
//   corporis perferendis iste fuga nemo eveniet. `,
//     img: "https://source.unsplash.com/user/seteph",
//     name: "Phuoc",
//     star: 4,
//   },
//   {
//     id: 3,
//     text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit
//   corporis perferendis iste fuga nemo eveniet.`,
//     img: "https://source.unsplash.com/user/wevibe",
//     name: "Phuoc",
//     star: 5,
//   },
//   {
//     id: 4,
//     text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sit
//   corporis perferendis iste fuga nemo eveniet. `,
//     img: "https://source.unsplash.com/user/chrisjoelcampbell",
//     name: "Phuoc",
//     star: 2,
//   },
// ];

// export function RenderStar({ numStar }) {
//   const yellowStar = [];
//   const noColorStar = [];

//   for (let i = 1; i <= numStar; i++) {
//     yellowStar.push(i);
//   }

//   for (let i = 1; i <= 5 - numStar; i++) {
//     noColorStar.push(i);
//   }

//   return (
//     <ul className="flex items-center gap-[0.000000005px]">
//       {yellowStar.map((star) => (
//         <li key={star}>
//           <MdStar className="text-base text-primary-color" />
//         </li>
//       ))}
//       {noColorStar.map((star) => (
//         <li key={star}>
//           <MdStar className="text-base text-[#bebebe]" />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function Comment() {
//   const inputTextRef = useRef();
//   const router = useRouter();
//   const [numStar, setNumStar] = useState(undefined);
//   const {
//     sendRequest: sendCommentAlias,
//     data: dataSent,
//     error: errorSent,
//     status: statusSent,
//   } = useHtttp(sendComment);
//   const {
//     sendRequest: fetchCommentAlias,
//     data: dataFetched,
//     error: errorFetched,
//     status: statusFetched,
//   } = useHtttp(fetchComment);

//   const ratingProps = {
//     size: 50,
//     count: 5,
//     color: "black",
//     activeColor: "yellow",
//     // value: 7.5,
//     a11y: true,
//     emptyIcon: <MdStar className="text-2xl text-[#bebebe]" />,
//     filledIcon: <MdStar className="text-2xl text-primary-color" />,

//     onChange: (newValue) => {
//       setNumStar(newValue);
//     },
//   };

//   const sendCommentHandler = (e) => {
//     e.preventDefault();

//     sendCommentAlias({
//       productId: router.query.productId,
//       commentData: {
//         text: inputTextRef.current.value,
//         img: "https://source.unsplash.com/random",
//         name: "Phuoc",
//         star: numStar,
//       },
//     });
//   };

//   useEffect(() => {
//     if (statusSent === "completed") {
//       fetchCommentAlias(router.query.productId);
//     }
//   }, [statusSent, fetchCommentAlias, router.query.productId]);

//   useEffect(() => {
//     fetchCommentAlias(router.query.productId);
//   }, [fetchCommentAlias, router.query.productId]);

//   if (errorSent) {
//     return <div>ERROR happening</div>;
//   }

//   if (errorFetched) {
//     return <div>ERROR happening</div>;
//   }

//   if (statusSent === "pending") {
//     return <LoadingSpinner />;
//   }

//   let comment;
//   if (statusFetched === "pending") {
//     comment = <LoadingSpinner />;
//   }

//   if (
//     statusFetched === "completed" &&
//     (!dataFetched || dataFetched.length === 0)
//   ) {
//     comment = <CartEmpty />;
//   }

//   if (statusFetched === "completed" && dataFetched && dataFetched.length > 0) {
//     comment = (
//       <ul
//         className={`overflow-y-auto h-[320px] flex flex-col gap-4 ${classes["custom-scrollbar"]}`}
//       >
//         {dataFetched.map((comment) => (
//           <li
//             className="bg-white rounded-2xl p-3 flex items-center gap-5 mr-7"
//             key={comment.id}
//           >
//             <div className="h-[70px] w-[70px] relative rounded-full flex-shrink-0 overflow-hidden ">
//               <Image
//                 src={comment.img}
//                 alt=""
//                 layout="fill"
//                 className="object-cover "
//               />
//             </div>
//             <div>
//               <div className="flex-between">
//                 <div className="font-semibold text-lg">{comment.name}</div>
//                 <RenderStar numStar={comment.star} />
//               </div>
//               <div className="text-gray-600 text-base">{comment.text}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <div className={`bg-[#F6F5F3] px-8 pt-8 pb-2`}>
//       {comment}
//       <div className="flex items-center gap-3 mt-5 ml-[90px]">
//         <p>Your rating:</p>
//         <ReactStars {...ratingProps} />
//       </div>
//       <div className="h-[100px] w-full  flex items-center p-4">
//         <form
//           className="flex items-center gap-3  w-full"
//           onSubmit={sendCommentHandler}
//         >
//           <div className="relative h-[60px] w-[60px] rounded-full overflow-hidden ">
//             <Image
//               src="https://source.unsplash.com/user/seteph"
//               alt=""
//               layout="fill"
//               className="object-cover"
//             />
//           </div>
//           <textarea
//             className={`flex-1 h-[70px] appearance-none outline-none rounded-lg shadow-sm py-2 px-3 font-jakarta ${classes["custom-scrollbar"]}`}
//             placeholder="What's your thought?"
//             ref={inputTextRef}
//           />
//           <button className="bg-primary-color self-stretch px-3 rounded-2xl ">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

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
