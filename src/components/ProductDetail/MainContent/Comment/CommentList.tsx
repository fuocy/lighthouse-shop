import Image from "next/image";
import RenderStar from "@/components/common/RenderStar";
import classes from "styles/scrollbar.module.css";
import Comment from "src/model/Comment";

interface AppProps {
  comments: Comment[];
}

export default function CommentList({ comments }: AppProps) {
  return (
    <ul
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
          <div>
            <div className="flex-between">
              <div className="font-semibold text-lg">{comment.name}</div>
              <RenderStar numStar={comment.numStar} sizeStar="text-base" />
            </div>
            <div className="text-gray-600 text-base">{comment.text}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
