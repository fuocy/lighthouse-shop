import { MdStar } from "react-icons/md";

type AppProps = {
  numStar: number;
  sizeStar: string;
};

export default function RenderStar({ numStar, sizeStar }: AppProps) {
  const yellowStar = [];
  const noColorStar = [];

  for (let i = 1; i <= numStar; i++) {
    yellowStar.push(i);
  }

  for (let i = 1; i <= 5 - numStar; i++) {
    noColorStar.push(i);
  }

  return (
    <ul className="flex items-center gap-[0.000000005px]">
      {yellowStar.map((star) => (
        <li key={star}>
          <MdStar className={`${sizeStar} text-primary-color`} />
        </li>
      ))}
      {noColorStar.map((star) => (
        <li key={star}>
          <MdStar className={`${sizeStar} text-[#bebebe]`} />
        </li>
      ))}
    </ul>
  );
}
