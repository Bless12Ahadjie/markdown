import Image from "next/image";
import { observer } from "mobx-react";
import documentStore from "../../core/libraries/addDocumentStore";

const DeleteBtn = observer(() => {
  const handleDeleteDocument = () => {
    if (documentStore.currentDocumentId !== null) {
      documentStore.deleteDocument(documentStore.currentDocumentId);
    }
  };

  return (
    <main>
      <button onClick={handleDeleteDocument}>
        <Image
          className="w-18 h-20"
          src={"./icon-delete.svg"}
          alt="delete logo"
          width={1}
          height={1}
        />
      </button>
    </main>
  );
});

export default DeleteBtn;
