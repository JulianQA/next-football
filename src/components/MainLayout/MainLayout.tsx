"use client";
import { useState } from "react";
import AsideBar from "../AsideBar/AsideBar";
import Header from "../Header/Header";

const MainLayout = () => {
  const [toggleAsideBar, setToggleAsideBar] = useState<boolean>(false);
  return (
    <div>
      <Header isOpen={toggleAsideBar} toggle={setToggleAsideBar} />
      <AsideBar isOpen={toggleAsideBar} toggle={setToggleAsideBar} />
    </div>
  );
};

export default MainLayout;
