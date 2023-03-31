"use client";
import { BiArrowToLeft } from "react-icons/bi";
import { GiSoccerBall } from "react-icons/gi";

interface AsideBarProps {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const AsideBar = ({ isOpen, toggle }: AsideBarProps) => {
  const handleClose = () => {
    toggle(false);
  };
  return (
    <aside
      className={`${
        isOpen
          ? "translate-x-0 transition-transform duration-700 ease-in-out"
          : "-translate-x-full transition-transform duration-1000 ease-in-out"
      } md:block bg-white dark:bg-dark-color-container fixed left-0 top-0 h-screen w-64 p-4`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-purple-700">
          <GiSoccerBall size={20} />
          <span className="font-bold">NewsFootball</span>
        </div>
        <BiArrowToLeft
          className="text-purple-700 dark:text-white cursor-pointer"
          size={22}
          onClick={handleClose}
        />
      </div>
    </aside>
  );
};

export default AsideBar;
