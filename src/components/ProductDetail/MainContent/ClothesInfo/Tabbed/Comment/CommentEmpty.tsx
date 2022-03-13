import hangerEmpty from "assets/hangerEmpty.png";
import Image from "next/image";

export default function CommentEmpty() {
  return (
    <div className="mb-[100px] mt-[50px]">
      <div className="mb-12 w-[300px] mx-auto">
        <Image
          src={hangerEmpty}
          alt="image 404"
          className="object-cover"
          priority
        />
      </div>
      <h2 className="text-xl text-gray-600 mb-7 font-bold text-center">
        {`There is no comments added yet`}
      </h2>
    </div>
  );
}
