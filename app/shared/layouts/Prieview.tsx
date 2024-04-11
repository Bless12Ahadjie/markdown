'use client'

import Markdown, { ExtraProps } from "react-markdown";
import PreviewOn from "../../../public/icon-show-preview.svg"
import PreviewOff from "../../../public/icon-hide-preview.svg"
import Image from "next/image";
import { observer } from "mobx-react";
import store from '../../core/stores/sidenavStore';


interface CustomCodeProps {
  node: React.ReactNode,
  className: string,
  children: React.ReactNode,
  inline: React.ReactNode,
}



const Preview = observer(() => {
  const { previewSelected, togglePreview, documentStore,isSidebarOpen } = store;
  const {  getCurrentId } = documentStore;

  return (
    <section
    className={`flex h-[calc(100vh-65px)] flex-col absolute mt-[70px] border-l   pb-4 dark:border-black-100 ${previewSelected ? ` ${isSidebarOpen? "right-[-340px]": "right-[0px] "} border-none w-full  left-[320px]` : 'border-gray w-1/2  ml-[640px]' } `}
    >
      <div
        className={`fixed z-0 flex h-10 items-center justify-between bg-gray-200 px-4 py-3 dark:bg-black-500 ${
          previewSelected ? ` ${isSidebarOpen? "right-[-250px]": "right-[0px]"} w-full ` : "w-1/2 " 
        } ${ ':'}`}
      >
        <span className="text-sm font-medium tracking-widest text-black-100 dark:text-white dark:bg-black-500">
          PREVIEW
        </span>

        <button onClick={togglePreview}>
          <Image
          className="pre"
            src={
              previewSelected ? PreviewOff : PreviewOn}
            alt={previewSelected ? "show markdown editor" : "display markdown preview only"}
          />
        </button>
      </div>
      {documentStore.documents
        .filter((doc) => doc.id === getCurrentId)
        .map((doc) => (
          <Markdown
          className={` mt-6 overflow-y-auto p-6 dark:bg-black-600 dark:text-white h-[calc(100vh+70px)] ${ previewSelected? ` overflow-y-auto w-1/2`:'w-ful'}`}

          components={
            {
                h1: (props) => <h1 className="text-xl font-mono font-bold text-black-600 dark:text-white mb-[24px]">{props.children}</h1>,
                h2: (props) => <h2 className="text-l font-light text-black-600 dark:text-white mb-[24px]">{props.children}</h2>,
                h3: (props) => <h3 className="text-md font-bold text-black-600 dark:text-white mb-[24px]">{props.children}</h3>,
                h4: (props) => <h4 className="text-sm font-bold text-black-600  dark:text-white mb-[24px]">{props.children}</h4>,
                h5: (props) => <h5 className="text-lg font-bold text-black-600 dark:text-white mb-[24px]">{props.children}</h5>,
                h6: (props) => <h6 className="text-lg font-bold text-orange-600 dark:text-whitemb-[24px]">{props.children}</h6>,
                p: (props) => <p className="text-black-100  text-xsm dark:text-gray-200 mb-[24px]">{props.children}</p>,
                br: () => <br className="h-[104px]" />,
                blockquote: (props) => (
                  <div className="border-l-4 rounded-l-sm border-orange-600 bg-gray-200 dark:bg-black-400 px-4 py-2 mb-[24px]">
                    <blockquote className="text-black-600 ml-3 font-bold dark:text-white ">{props.children}</blockquote>
                  </div>
                ),
                ol: (props) => (
                  <ol className="list-decimal ml-[50px] space-y-2 text-xsm text-black-100 mb-[24px] dark:text-white">
                    {props.children}
                  </ol>
                ),
                ul: (props) => (
                  <ul className="list-disc ml-[40px] space-y-2  marker:text-orange-600 mb-[24px] pl- text-xsm text-black-100 dark:text-white">
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
                  const {  node, className, children, ...rest } = props;
                
                  // if (inline) {
                  //   return (
                  //     <code
                  //       className={className}
                  //       style={{
                  //         backgroundColor: '#f0f0f0',
                  //         padding: '2px 4px',
                  //         borderRadius: '3px',
                  //       }}
                  //       {...rest}
                  //     >
                  //       {children}
                  //     </code>
                  //   );
                  // }
                
                  return (
                    <pre
                      className={`${className} dark`}
                      style={{
                        backgroundColor: '#F5F5F5',
                        padding: '20px 40px',
                        borderRadius: '5px',
                        color: '#2B2D31',
                      }}
                    >
                      <code className={`${className} dark`} {...rest}>
                        {children}
                      </code>
                    </pre>
                  );
                },
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