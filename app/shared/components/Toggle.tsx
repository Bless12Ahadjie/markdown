"use client";

import React from "react";
import { observer } from "mobx-react";
import Image from "next/image";

import MenuIcon from "../../../public/icon-menu.svg";
import CloseIcon from "../../../public/icon-close.svg";
import store from "@/lib/core/stores/sidenavStore";

const Toggle = observer(() => {
  
  const { isSidebarOpen, toggleSidebar } = store;

  return (
    <main>
      <button
        className={`bg-black-300 h-72 w-72 flex justify-center items-center hover:bg-orange-600 ${
          isSidebarOpen ? "closed" : ""
        }`}
        onClick={toggleSidebar}
      >
        <Image
          className={isSidebarOpen ? "w-22 h-22" : "w-30 h-18"}
          src={isSidebarOpen ? CloseIcon : MenuIcon}
          alt={isSidebarOpen ? "close icon" : "open icon"}
          width={40}
          height={40}
        />
      </button>
    </main>
  );
});

export default Toggle;
