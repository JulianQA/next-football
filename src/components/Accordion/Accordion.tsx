import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionProps {
  title: string;
  content: Leagues[];
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
    <div className="text-black dark:text-white overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="capitalize">{title}</span>
        <span
          className={`cursor-pointer ${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-transform duration-500`}
          onClick={handleToggle}
        >
          &gt;
        </span>
      </div>
      <div
        className={`ml-4 border-l border-l-slate-500 pl-4 ${
          isOpen ? "max-h-44" : "max-h-0"
        } transition-max-height duration-500`}
      >
        {content.map((item) => (
          <div className="flex items-center mt-3 gap-3" key={item.id}>
            <Image
              src={item.src}
              alt={item.name}
              className="w-5 h-5 object-contain"
            />
            <Link
              href={`league/${item.id}`}
              onClick={() => setState && setState(false)}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
