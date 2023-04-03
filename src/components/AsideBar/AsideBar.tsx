"use client";
import { BiArrowToLeft } from "react-icons/bi";
import { GiSoccerBall } from "react-icons/gi";
import Accordion from "../Accordion/Accordion";
import { leagues } from "@/utils/mock/leagues";

interface AsideBarProps {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const AsideBar = ({ isOpen, toggle }: AsideBarProps): JSX.Element => {
  const handleClose = () => {
    toggle(false);
  };
  return (
    <aside
      className={`${
        isOpen
          ? "translate-x-0 transition-transform duration-700 ease-in-out"
          : "-translate-x-full transition-transform duration-1000 ease-in-out"
      } lg:translate-x-0 bg-white dark:bg-dark-color-container fixed left-0 top-0 h-screen w-80 sm:w-64 p-4`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-purple-700">
          <GiSoccerBall size={20} />
          <span className="font-bold text-2xl">NewsFootball</span>
        </div>
        <BiArrowToLeft
          className="text-purple-700 dark:text-white cursor-pointer lg:hidden"
          size={22}
          onClick={handleClose}
        />
      </div>
      <section>
        <Accordion title="leagues" content={leagues} setState={toggle} />
      </section>
    </aside>
  );
};

export default AsideBar;
