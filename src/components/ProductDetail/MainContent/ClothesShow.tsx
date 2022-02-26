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
            className="w-[473px] h-[473px] bg-background-grayec relative group"
          >
            <Image src={shirt.img} alt="" priority />
            <div className="invisible group-first:visible flex items-center gap-1 bg-primary-color py-[15px] pl-[7px] absolute top-[18px] left-[18px] font-semibold ">
              <p className="text-xl leading-none">25%</p>
              <p className="uppercase text-[9px] -rotate-90 leading-none ">
                off
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
