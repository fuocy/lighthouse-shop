import Image from "next/image";
import RenderStar from "@/components/common/RenderStar";
import classes from "styles/scrollbar.module.css";
import Comment from "src/model/Comment";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface AppProps {
  comments: Comment[];
}

const calculateTimeCreated = (time: number) => {
  const periods = {
    year: 12 * 30 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  };

  const diff = Date.now() - time;
  console.log(new Date(Date.now()), new Date(time), diff);

  for (const key in periods) {
    if (diff > periods[key as keyof typeof periods]) {
      const result = Math.floor(diff / periods[key as keyof typeof periods]);
      return `${result} ${result === 1 ? key : key + "s"} ago`;
    }
  }

  return "Just now";
};

export default function CommentList({ comments }: AppProps) {
  const [parent] = useAutoAnimate();
  return (
    <ul
      // @ts-ignore
      ref={parent}
      className={`overflow-y-auto h-[320px] flex flex-col gap-4 ${classes["custom-scrollbar"]}`}
    >
      {comments.map((comment) => (
        <li
          className="bg-white rounded-2xl p-3 flex items-center gap-5 mr-7"
          key={comment.id}
        >
          <div className="h-[70px] w-[70px] relative rounded-full flex-shrink-0 overflow-hidden ">
            <Image
              src={comment.avatar}
              alt="avatar people who comments"
              layout="fill"
              className="object-cover "
            />
          </div>
          <div className="flex-1 ">
            <div className="flex-between">
              <div className="font-medium text-base">{comment.name}</div>
              <RenderStar numStar={comment.numStar} sizeStar="text-base" />
            </div>
            <div className="text-gray-600 text-base [font-family:Roboto]">
              {comment.text}
            </div>
            <div className="text-xs text-gray-400 text-right">
              {calculateTimeCreated(new Date(comment.date).getTime())}
              {/* {comment.date} */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
