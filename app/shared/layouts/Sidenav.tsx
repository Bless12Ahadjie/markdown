'use client'

import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { observer } from 'mobx-react';
import AddDocumentBtn from "../components/AddDocumentBtn";
import Image from "next/image";
import { toast,ToastContainer } from "react-toastify";
import store from '../../core/libraries/sidenavStore';
import documentStore from '../../core/libraries/addDocumentStore';
import NightMode from './NightMode';
import { set } from 'mobx';
import { Document } from '@/app/core/type/button ';
import SideDocumentName from '../components/sideDocumentName';

const Sidenav = observer(() => {
  const [currentId, setCurrentId] = useState<number | null>(null);
  
  const toggleSidebar = () => {
    store.toggleSidebar();
  };

  const handleClick = (doc: Document) => {
    setCurrentId(doc.id); // Update currentId when a document is clicked
    // documentStore.setCurrentDocumentId(doc);
  };
  const handleAddDocument = () => {
    const newDocumentId = documentStore.addDocument();
    setCurrentId(newDocumentId);
    toast.success("New document created succesfully!");
  };

  return (
   
    <main className=''>
  
      <div className={`sidebar transition-all duration-150 ease-out ${store.isSidebarOpen ? 'relative' : 'absolute'}  ${store.isSidebarOpen ? 'left-[0px]' : 'left-[-300px]'} bg-black-500 h-screen w-250 flex flex-col gap-6 justify-start items-start px-6 pt-6 ${store.isSidebarOpen ? 'open' : 'closed'}`}>
        <p className='text-black-100 text-sm'>MY DOCUMENTS</p>
        <AddDocumentBtn onClick={handleAddDocument} />
        <div>
          <ul className='h-[calc(100vh-200px)] overflow-y-auto '>
            {documentStore.documents.map(doc => (
              <SideDocumentName
              time={doc.createdAt}
              name={doc.name}
              id={doc.id}
              key={doc.id}>

              </SideDocumentName>
     
            ))}
          </ul>
          <ToastContainer />
        </div>
        <NightMode></NightMode>
      </div>
    </main>
  );
});

export default Sidenav;

