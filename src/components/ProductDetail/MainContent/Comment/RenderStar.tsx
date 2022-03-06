import { MdStar } from "react-icons/md";

type AppProps = {
  numStar: number;
};

export default function RenderStar({ numStar }: AppProps) {
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
          <MdStar className="text-base text-primary-color" />
        </li>
      ))}
      {noColorStar.map((star) => (
        <li key={star}>
          <MdStar className="text-base text-[#bebebe]" />
        </li>
      ))}
    </ul>
  );
}
