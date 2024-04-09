import documentStore from "@/app/core/libraries/addDocumentStore";
import { Document } from "@/app/core/type/button ";
import { useState } from "react";
import Image from "next/image";

interface Props {
  time: string;
  name: string;
  id: number;
}

const SideDocumentName = ({ time, name, id }: Props) => {
//   const [currentId, setCurrentId] = useState<number | null>(null);

  const handleClick = () => {

    // setCurrentId(Number(id)); 
    // const selectedDocument = documentStore.documents.find(doc => doc.id === Number(id));
    // if (selectedDocument) {
      documentStore.setCurrentDocumentId(id);
    // }
  };

  return (
    <main>
      <li  className="flex justify-center items-center mb-6 text-left">
        <Image className="w-13 h-16" src={'./icon-document.svg'} alt="document" width={10} height={10} />
        <button onClick={handleClick} className=''>
          <p className="text-black-100 text-xxsm">{time}</p>
          <p className="text-white text-sm hover:text-orange-400 dark:text-black-600">{name}</p>
        </button>
      </li>
    </main>
  );
};

export default SideDocumentName;
