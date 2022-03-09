import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  resetNextUuid,
} from "react-accessible-accordion";
import { Transition } from "react-transition-group";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { useState } from "react";

type AppProps = {
  children: React.ReactNode;
  heading: string;
};

export default function ComponentAccordion({ children, heading }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIconHandler = () => {
    setIsOpen((prevState) => !prevState);
    // console.log(isOpen);
  };

  resetNextUuid();
  return (
    <Accordion className="bg-white" allowZeroExpanded allowMultipleExpanded>
      <AccordionItem uuid={1}>
        <AccordionItemHeading onClick={toggleIconHandler}>
          <AccordionItemButton className="bg-white text-lg font-medium flex justify-between items-center py-3 px-5">
            Category
            {!isOpen && <BsChevronDown />}
            {isOpen && <BsChevronUp />}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Transition in={isOpen} timeout={350} mountOnEnter unmountOnExit>
            {(state) => (
              <div
                className={`bg-blue-500 ${
                  state === "exiting" ? "opacity-0" : "opacity-100"
                } transition duration-[350ms]`}
              >
                {children}
              </div>
            )}
          </Transition>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
