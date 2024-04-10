import Image from "next/image";
import previewOn from "../../../public/icon-show-preview.svg"
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import documentStore from '../../core/libraries/forDocumentStore';

const MarkdownView = () => {
    const previewSelected = false
    

    return(
        <main
        className={`h-[calc(100vh-65px)] ${previewSelected  ? "hidden" : "w-full"} relative mt-[70px] `}
      >
        <div className=" flex h-10 items-center justify-between  px-4 my-auto pl-4  bg-gray-200  dark:bg-black-500" >
          <span className="text-sm font-medium tracking-widest text-black-100 dark:bg-black-500  dark:text-white">
            MARKDOWN
          </span>
  
          <button
            // onClick={() => setDisplayPreviewOnly(!displayPreviewOnly)}
            className="md:hidden"
          >
            <Image
            src={previewOn }
            alt="preview active"
            />
          </button>
        </div>
  
        <textarea
          className="mb-4 min-h-[calc(100vh-110px)] w-full resize-none border-none bg-white p-4 pt-2 outline-none dark:bg-black-600 dark:text-white"
        //   value={currentDocument ? currentDocument.content : ""}
        //   onChange={handleContentChange}
        />
       <Markdown> </Markdown>
      </main>
    )
}

export default MarkdownView;