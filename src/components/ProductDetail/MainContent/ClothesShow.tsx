import shirt1 from "assets/clothes/men/shirt1.png";
import shirt2 from "assets/clothes/men/shirt2.png";
import shirt3 from "assets/clothes/men/shirt3.png";

import Image from "next/image";

const shirts = [
  { id: "id" + Math.random().toString(36).slice(2), img: shirt1 },
  { id: "id" + Math.random().toString(36).slice(2), img: shirt2 },
  { id: "id" + Math.random().toString(36).slice(2), img: shirt3 },
];

export default function ShowClothes() {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        {shirts.map((shirt) => (
          <li
            key={shirt.id}
            className="w-[473px] h-[473px] bg-background-grayec"
          >
            <Image src={shirt.img} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
