'use client'
import Image from "next/image";
import { observer, } from "mobx-react";
import documentStore from "../../core/libraries/addDocumentStore";
import { useState, useEffect } from "react";

  console.log();
  const DocumentName = observer(({ getCurrentDocumentName, updateDocumentName}: { getCurrentDocumentName:string,  updateDocumentName: (newName: string) => void }) => {
 
    const [documentName, setDocumentName] = useState(getCurrentDocumentName);
//   console.log(documentName);
  console.log( getCurrentDocumentName);
//   const currentDocument = documentStore.documents.find((doc) => 
//   doc.id ===  documentStore.currentDocumentId
  
  
//   );

  

  useEffect(() => {
    if (getCurrentDocumentName) {
        setDocumentName(getCurrentDocumentName)
    }
  }, [getCurrentDocumentName]);

  const handleDocumentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentName(e.target.value);

  };

  return (
    <main>
      <div className="flex justify-center items-center gap-5">
        <Image
          className="w-13 h-16"
          src={"./icon-document.svg"}
          alt="document"
          width={10}
          height={10}
        />
        <div>
          <p className="text-black-100 text-xxsm">Document Name</p>
          <input
            id="text"
            value={documentName}
            onBlur={()=> updateDocumentName(documentName)}
            onChange={handleDocumentNameChange}
            className="border-b-transparent bg-transparent bg-black-400 text-white text-sm accent-black-400 focus:border-b focus:outline-none"
            type="text"
          />
        </div>
      </div>
    </main>
  );
});

export default DocumentName;
