'use client';

import { observer } from "mobx-react";
import documentStore from "../../core/stores/forDocumentStore";
import { useState } from "react";
import { toast } from "react-toastify";

const DeleteBtn = observer(() => {
  const {currentDocumentId,documents,deleteDocument} = documentStore;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);;

  const handleDeleteDocument = () => {
    if (currentDocumentId !== null) {
      setIsModalOpen(true);
    }
  };

  const handleDocumentDeletion = () => {
    const currentDocument = documents.find(
      (doc) => doc.id === currentDocumentId
    );

    if (currentDocument) {
      if (currentDocument.id === 2) {
        // Show a toast message if the user tries to delete the document with ID 2
        toast.error("The document 'welcome' cannot be deleted.");
        setIsModalOpen(false);
      } else {
        deleteDocument(currentDocumentId);
        toast.success(`"${currentDocument.name}" was deleted successfully!`);
        setIsModalOpen(false);
      }
    }

    setIsModalOpen(false);
  };

  const currentDocument = documents.find(
    (doc) => doc.id === currentDocumentId
  );

  return (
    <main>
      <button className="" onClick={handleDeleteDocument}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}>
        
          
          <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg" className="fill-[#7C8187] hover:fill-[#E46643]"><path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" fill=""/></svg>
      </button>
      {isModalOpen && currentDocument && (
        <div
          className="bg-modalOverlayDark fixed left-0 top-0 z-50 h-screen w-screen dark:bg-modalOverlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute left-1/2 top-1/2 w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 dark:bg-black-600">
            <h4 className="text-md font-bold text-black-600 dark:text-white">
              Delete this document?
            </h4>
            <p className="my-4 text-xsm font-regular text-black-200 dark:text-black-100">
              Are you sure you want to delete the ‘{currentDocument.name}’document and its
              contents? This action cannot be reversed.
            </p>
            <button
              className="primary-btn bg-orange-600 w-[295px] h-[40px] rounded-[4px] cursor-pointer hover:bg-orange-400"
              onClick={handleDocumentDeletion}
            >
              <span className="dark:text-white text-white">Confirm &amp; Delete</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
});

export default DeleteBtn;