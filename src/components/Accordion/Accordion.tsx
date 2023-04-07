"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  content: JSX.Element;
  state?: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}
const Accordion = ({
  title,
  content,
  state,
  setState,
}: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="overflow-hidden mb-4">
      <div
        className={`flex items-center p-2 rounded justify-between mb-4 cursor-pointer ${
          isOpen && "bg-purple-700 text-white"
        } hover:bg-purple-700 hover:text-white`}
        onClick={handleToggle}
      >
        <span className="capitalize">{title}</span>
        <span
          className={`cursor-pointer ${
            isOpen ? "-rotate-90" : "rotate-90"
          } transition-transform duration-500`}
        >
          &gt;
        </span>
      </div>
      <div
        className={`${
          isOpen
            ? "max-h-400 transition-max-height duration-700"
            : "max-h-0 transition-max-height duration-700"
        } `}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
