"use client";

import Button from "../components/SaveButton";
import Logo from "../components/Logo";
import DocumentName from "../components/DocummentName/DocumentName";
import DeleteBtn from "../components/DeleteBtn";
import Toggle from "../components/Toggle";
import { observer } from "mobx-react";
import store from "@/lib/core/stores/sidenavStore";

const Header = observer(() => {
  const { isSidebarOpen } = store;

  return (
    <main
      className={`w-full absolute ${
        isSidebarOpen ? "right-[-250px]" : "right-[0px]"
      }`}
    >
      <div className="flex h-72 bg-black-400 justify-between pr-6 items-center cursor">
        <div className="flex gap-25">
          <Toggle></Toggle>

          <div className="flex justify-start items-center gap-6">
            <Logo></Logo>

            <div className="hidden md:block h-12 w-0.1 bg-black-200"></div>
            <DocumentName></DocumentName>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 ">
          <DeleteBtn></DeleteBtn>
          <Button
            className={"hidden md:block text-white text-[15px] md:text:xsm"}
            name={"Save Changes"}
          ></Button>
        </div>
      </div>
    </main>
  );
});

export default Header;
