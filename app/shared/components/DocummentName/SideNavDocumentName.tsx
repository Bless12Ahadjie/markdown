"use client";

import Image from "next/image";
import documentStore from "@/lib/core/stores/forDocumentStore";

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
    <li className="flex justify-center overflow-hidden items-center mb-6 gap-5 text-left max-w-250 ">
      <Image
        className="w-13 h-16"
        src={"./icon-document.svg"}
        alt="document"
        width={10}
        height={10}
      />
      <button onClick={handleClick} className="w-[180px] max-w-250 text-left">
        <span className="text-black-100 text-xxsm">{time}</span> <br />
        <span className="text-white text-sm hover:text-orange-400 dark:text-white max-w-[200px]">
          {name}
        </span>
      </button>
    </li>
  );
};

export default SideDocumentName;
