'use client'
import Image from "next/image";
import { observer, } from "mobx-react";
import documentStore from "../../core/libraries/forDocumentStore";
import { useState, useEffect } from "react";


  const DocumentName = observer(() => {
    const { getCurrentDocumentName, updateDocumentName } = documentStore;
    const [documentName, setDocumentName] = useState(getCurrentDocumentName);
  
    useEffect(() => {
      setDocumentName(getCurrentDocumentName);
    }, [getCurrentDocumentName]);
  
    const handleDocumentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDocumentName(e.target.value);
      updateDocumentName(e.target.value);
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
            className="border-b-transparent bg-transparent bg-black-400 text-white text-sm accent-black-400 focus:border-b focus:outline-none caret-[#E46643]"
            type="text"
          />
        </div>
      </div>
    </main>
  );
});

export default DocumentName;
