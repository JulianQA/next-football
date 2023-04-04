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
    <div className="overflow-hidden">
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
        className={`ml-4 border-l border-light-borders dark:border-dark-borders pl-4 ${
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
