'use client'


// Sidenav.js
import { observer } from 'mobx-react';
import AddDocumentBtn from "../components/AddDocumentBtn";
import Image from "next/image";
import store from '../../core/libraries/sidenavStore';
import documentStore from '../../core/libraries/addDocumentStore';

const Sidenav = observer(() => {
  const toggleSidebar = () => {
    store.toggleSidebar();
  };

  const handleAddDocument = () => {
    documentStore.addDocument();
  };

  return (
    <main className=''>
      <div className={`sidebar transition-all duration-150 ease-out ${store.isSidebarOpen ? 'relative' : 'absolute'}  ${store.isSidebarOpen ? 'left-[0px]' : 'left-[-300px]'} bg-black-500 h-screen w-250 flex flex-col gap-6 justify-start items-start px-6 pt-6 ${store.isSidebarOpen ? 'open' : 'closed'}`}>
        <p className='text-black-100 text-sm'>MY DOCUMENTS</p>
        <AddDocumentBtn onClick={handleAddDocument} />
        <div>
          <ul className='overflow-y-viisible'>
            {documentStore.documents.map(doc => (
              <li key={doc.id} className="flex justify-center items-center mb-6 text-left">
                <Image className="w-13 h-16 mr-[2px]" src={'./icon-document.svg'} alt="document" width={10} height={10} />
                <button>
                  <p className="text-black-100 text-xxsm">{doc.createdAt}</p>
                  <p className="text-white text-sm hover:text-orange-400">{doc.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
});

export default Sidenav;

