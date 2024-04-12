"use client";
import Image from "next/image";
import previewOn from "../../../../public/icon-show-preview.svg";
import { observer } from "mobx-react-lite";
import {  ChangeEvent } from "react";
import store from "@/app/core/stores/sidenavStore";



const MarkdownView = observer(() => {

  const { previewSelected, isSidebarOpen, togglePreview ,documentStore} = store;
  const { documentContent, updateDocumentContent } = documentStore;



  const handleContentChange: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void = (event) => {
    updateDocumentContent(event.target.value);
  };





  return (
    <main
      className={`h-[calc(100vh-65px)] ${
        previewSelected ? "hidden " : "w-full md:w-1/2 lg:w-1/2"
      } relative mt-[70px] ${
        isSidebarOpen
          ? "w-[640px] md:w-1/2 lg:w-[640px]"
          : "w-full md:w-1/2 lg:w-1/2"
      }`}
    >
      <div className="flex h-10 items-center justify-between  px-4 my-auto pl-4  bg-gray-200 dark:bg-black-500">
        <span className="text-sm font-medium tracking-widest text-black-100 dark:bg-black-500  dark:text-white">
          MARKDOWN
        </span>

        <button onClick={togglePreview} className="md:hidden">
          <Image src={previewOn} alt="preview active" />
        </button>
      </div>

      <textarea
        className="mb-4 min-h-[calc(100vh-110px)] w-full resize-none border-none bg-white p-4 pt-2 outline-none dark:bg-black-600 dark:text-white"
        value={documentContent}
        onChange={handleContentChange}
      />
    </main>
  );
});

export default MarkdownView;
