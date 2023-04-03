"use client";
import { BiArrowToRight } from "react-icons/bi";
import LoginStatus from "../LoginStatus/LoginStatus";

interface HeaderProps {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, toggle }: HeaderProps): JSX.Element => {
  const handleToggle = () => {
    toggle((prev) => !prev);
  };
  return (
    <header className="fixed flex w-full lg:pl-72 p- p-4 items-center justify-between">
      <BiArrowToRight
        color="white"
        size={20}
        className="cursor-pointer lg:hidden"
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
