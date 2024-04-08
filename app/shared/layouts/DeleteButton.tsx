import { useState } from "react";
import Image from "next/image";


import CloseIcon from "../../../public/icon-close.svg";
import MenuIcon from "../../../public/icon-menu.svg";


function DeleteButton (): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
    // document.getElementsByTagName("body")[0].classList.toggle("");
    // console.log("worked")
  }

  return (
    <button
      className="flex h-full w-14 items-center justify-center bg-neutral-700 hover:bg-orange md:w-[72px]"
      onClick={toggleSidebar}
    >
      <Image
       src={isSidebarOpen ? CloseIcon : MenuIcon}
       alt={isSidebarOpen ? "close sidebar" : "open sidebar"}
      
      />

    </button>
  );
}
export default DeleteButton;