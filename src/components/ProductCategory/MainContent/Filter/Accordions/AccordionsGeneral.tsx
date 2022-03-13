import { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Transition } from "react-transition-group";
import "animate.css";
type AppProps = {
  children: React.ReactNode;
  heading: string;
};

export default function ComponentAccordion({ children, heading }: AppProps) {
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const toggleContent = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="overflow-y-hidden shadow-sm">
      <button
        className="flex items-center justify-between bg-white py-[23px] px-5 w-full group z-10"
        onClick={toggleContent}
      >
        <p className="font-medium z-10 ">{heading}</p>
        {!isOpen && <BsChevronDown className="z-10" />}
        {isOpen && <BsChevronUp className="z-10" />}
      </button>

      <Transition
        in={isOpen}
        timeout={800}
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
      >
        {(state) => {
          return (
            <div
              ref={nodeRef}
              className={`bg-white ${
                state === "entering"
                  ? "animate__animated animate__fadeInDown animate__fast"
                  : state === "exiting"
                  ? "animate__animated animate__fadeOutUp animate__fast"
                  : " "
              }`}
            >
              {children}
            </div>
          );
        }}
      </Transition>
    </div>
  );
}
