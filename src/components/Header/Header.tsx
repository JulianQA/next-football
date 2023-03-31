"use client";
import { BiArrowToRight } from "react-icons/bi";
import LoginStatus from "../LoginStatus/LoginStatus";

interface HeaderProps {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, toggle }: HeaderProps) => {
  const handleToggle = () => {
    toggle((prev) => !prev);
  };
  return (
    <header className="fixed flex w-full md:w-[calc(100%_-_16rem)] p-4 items-center justify-between">
      <BiArrowToRight
        color="white"
        size={20}
        className="cursor-pointer"
        onClick={handleToggle}
      />
      <div className="text-white hidden sm:block">
        <p>Welcome, Julian!</p>
        <span>Today is sports day</span>
      </div>
      <LoginStatus />
    </header>
  );
};

export default Header;
