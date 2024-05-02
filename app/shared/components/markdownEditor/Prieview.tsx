'use client';

import Markdown from "react-markdown";
import PreviewOn from "../../../../public/icon-show-preview.svg"
import PreviewOff from "../../../../public/icon-hide-preview.svg"
import Image from "next/image";
import { observer } from "mobx-react";
import store from "@/lib/core/stores/sidenavStore";
import { Roboto_Slab } from "next/font/google";

const roboSlab = Roboto_Slab({
 weight: ['400', '700'], 
 subsets: ['latin'],
 display: 'swap',
});

const Preview = observer(() => {
 const { previewSelected, togglePreview, documentStore, isSidebarOpen } = store;
 const { getCurrentId } = documentStore;

 return (
   <section
     className={`flex h-[calc(100vh-65px)] flex-col absolute mt-[70px] border-l pb-4 dark:border-black-100 ${previewSelected ? `${isSidebarOpen ? "right-[-340px] md:ml-[8%] 2xl:ml-[10%]" : "right-[0px]"} border-none w-full left-0 md:left-[320px] 2xl:left-[20%]` : 'border-gray-500 w-1/2 hidden md:block ml-0 md:ml-[440px] lg:ml-[640px] 2xl:ml-[50%]'}`}
   >
     <div
       className={`fixed z-0 h-10 flex items-center justify-between bg-gray-200 px-4 py-3 dark:bg-black-500 ${previewSelected ? `${isSidebarOpen ? "right-[-250px]" : "right-[0px]"} w-full` : "w-1/2"}`}
     >
       <span className="text-sm font-medium tracking-widest text-black-100 dark:text-white dark:bg-black-500">
         PREVIEW
       </span>

       <button onClick={togglePreview}>
         <Image
           className="fill-gray-200 hover:fill-orange-600"
           src={previewSelected ? PreviewOff : PreviewOn}
           alt={previewSelected ? "show markdown editor" : "display markdown preview only"}
         />
       </button>
     </div>
     {documentStore.documents
       .filter((doc) => doc.id === getCurrentId)
       .map((doc) => (
         <Markdown
           className={`mt-6 overflow-y-auto p-6 dark:bg-black-600 dark:text-white h-[calc(100vh-100px)] ${previewSelected ? 'overflow-y-auto w-full md:w-1/2' : 'w-full'}`}
           components={{
             h1: (props) => <h1 className={`${roboSlab.className} text-xxl font-bold text-black-600 dark:text-white mb-[24px]`}>{props.children}</h1>,
             h2: (props) => <h2 className="text-xl font-thin text-black-300 dark:text-white mb-[24px]">{props.children}</h2>,
             h3: (props) => <h3 className="text-l font-bold text-black-600 dark:text-white mb-[24px]">{props.children}</h3>,
             h4: (props) => <h4 className="text-md font-bold text-black-600 dark:text-white mb-[24px]">{props.children}</h4>,
             h5: (props) => <h5 className="text-lg font-bold text-black-600 dark:text-white mb-[24px]">{props.children}</h5>,
             h6: (props) => <h6 className="text-xsm font-bold text-orange-600 dark:text-white mb-[24px]">{props.children}</h6>,
             p: (props) => <p className="text-xsm text-black-100 dark:text-gray-200 mb-[24px]">{props.children}</p>,
             br: () => <br className="h-[104px]" />,
             blockquote: (props) => (
               <div className="border-l-4 rounded-l-sm border-orange-600 bg-gray-200 dark:bg-black-400 px-4 py-2 mb-[24px] pt-10">
                 <h6 className="text-black-600 ml-3 font-bold dark:text-white">{props.children}</h6>
               </div>
             ),
             ol: (props) => (
               <ol className="list-decimal ml-[50px] space-y-2 text-xsm text-black-100 mb-[24px] dark:text-white">
                 {props.children}
               </ol>
             ),
             ul: (props) => (
               <ul className="list-disc ml-[40px] space-y-2 marker:text-orange-600 mb-[24px] text-xsm text-black-100 dark:text-white">
                 {props.children}
               </ul>
             ),
             a: (props) => (
               <a
                 href={props.href}
                 className="text-blue-500 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300"
               >
                 {props.children}
               </a>
             ),
             code: (props) => {
              const { node, className, children, ...rest } = props;
              if (typeof children === 'string') {
                const trimmedContent = children.trim();
                if (trimmedContent.startsWith('`') && trimmedContent.endsWith('`')) {
                  const codeContent = trimmedContent
                  if (codeContent.startsWith('`') && codeContent.endsWith('`')) {
                    return (
                      <code className={`${className} font-mono text-black-600 dark:text-white`} {...rest}>
                        {codeContent.slice(1, -1)}
                      </code>
                    );
                  }
                  return (
                    <code className={`${className} font-mono text-black-600 dark:text-white`} {...rest}>
                      {codeContent}
                    </code>
                  );
                }
              }
            
              return (
                <div className={`${className} bg-gray-200 py-[20px] px-[40px] rounded-[5px] dark:bg-black-400`}>
                  <code className={`${className} font-mono text-black-600 dark:text-white`} {...rest}>
                    {children}
                  </code>
                </div>
              );
            }
           }}
           key={doc.id}
         >
           {doc.content}
         </Markdown>
       ))}
   </section>
 );
});

export default Preview;