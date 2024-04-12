'use client';

import documentStore from "@/app/core/stores/forDocumentStore";
import { Document } from "@/app/core/type/Types";
import { useState } from "react";
import Image from "next/image";

interface Props {
  time: string;
  name: string;
  id: number;
}

const SideDocumentName = ({ time, name, id }: Props) => {
  const handleClick = () => {
    documentStore.setCurrentDocumentId(id);
  };

  return (
    <main>
      <li className="flex justify-center overflow-hidden items-center mb-6 gap-5 text-left max-w-250 ">
        <Image className="w-13 h-16" src={'./icon-document.svg'} alt="document" width={10} height={10} />
        <button onClick={handleClick} className="w-[150px] max-w-250 text-left">
          <p className="text-black-100 text-xxsm">{time}</p>
          <p className="text-white text-sm hover:text-orange-400 dark:text-white max-w-[200px]">{name}</p>
        </button>
      </li>
    </main>
  );
};

export default SideDocumentName;