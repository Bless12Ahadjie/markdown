"use client";

import "react-toastify/dist/ReactToastify.css";
import { observer } from "mobx-react";
import AddDocumentBtn from "../components/AddDocumentBtn";
import { toast, ToastContainer } from "react-toastify";
import NightMode from "../components/NightMode";
import SideDocumentName from "../components/DocummentName/SideNavDocumentName";
import store from "@/lib/core/stores/sidenavStore";
import documentStore from "@/lib/core/stores/forDocumentStore";

const Sidenav = observer(() => {
  const handleAddDocument = () => {
    documentStore.addDocument();
    toast.success("New document created successfully!");
  };

  return (
    <main className="">
      <div
        className={`transition-all duration-150 ease-out ${
          store.isSidebarOpen ? "relative" : "absolute"
        }  ${
          store.isSidebarOpen ? "left-[0px]" : "left-[-300px]"
        } bg-black-500 h-screen w-250 flex flex-col gap-6 justify-start items-start px-6 pt-6 ${
          store.isSidebarOpen ? "open" : "closed"
        }`}
      >
        <p className="text-black-100 text-sm">MY DOCUMENTS</p>
        <AddDocumentBtn onClick={handleAddDocument} />
        <div>
          <ul className="h-[calc(100vh-200px)] overflow-y-auto ">
            {documentStore.documents.map((doc) => (
              <SideDocumentName
                time={doc.createdAt}
                name={doc.name}
                id={doc.id}
                key={doc.id}
              ></SideDocumentName>
            ))}
          </ul>
          <ToastContainer
            position="bottom-left"
            autoClose={1000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            bodyClassName="toastBody"
          />
        </div>
        <NightMode></NightMode>
      </div>
    </main>
  );
});

export default Sidenav;
