'use client'
import Markdown from "react-markdown";
import PreviewOn from "../../../public/icon-show-preview.svg"
import PreviewOff from "../../../public/icon-hide-preview.svg"
import Image from "next/image";
import documentStore from "@/app/core/libraries/forDocumentStore";
import { observer } from "mobx-react";



const Preview = observer (({currentDocumentId}:{currentDocumentId: number | null}) => {
  console.log("id now",currentDocumentId);
  
    const previewSelected = false

    return (
        <section className="flex h-[calc(100vh-65px)] flex-col absolute mt-[70px] border-l w-1/2 border-gray ml-[640px] pb-4 dark:border-black-100 ">
          <div
            className={`fixed z-0 flex h-10 items-center justify-between bg-gray-200 px-4 py-3 dark:bg-black-500 ${
                previewSelected ? "w-full" : "w-1/2"
            }`}
          >
            <span className="text-sm font-medium tracking-widest text-black-100 dark:text-white dark:bg-black-500">
              PREVIEW
            </span>
           
            {/*onClick={() => setDisplayPreviewOnly(!previewSelected)}*/}
            <button   > 
              <Image
                src={previewSelected? PreviewOff : PreviewOn}
                alt={
                    previewSelected
                    ? "show markdown editor"
                    : "display markdown preview only"
                }
              />
            </button>
          </div>
    
          {documentStore.documents
        .filter((doc) => doc.id === currentDocumentId)
        .map((doc) => (
          <Markdown
            key={doc.id}
            className={`preview-markdown mt-10 overflow-y-auto p-6 dark:bg-black-600 dark:text-white h-[calc(100vh+70px)]${
              previewSelected ? "md:px-12 lg:px-[calc(100vw-70vw)]" : ""
            }`}
          >
            {doc.content}
          </Markdown>
        ))}


            {/* {getContentById(currentDocumentId, documents)} */}
          
        </section>
      );
    });

export default Preview;