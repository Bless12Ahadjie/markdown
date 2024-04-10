import Preview from "../layouts/Prieview";
import MarkdownView from "../layouts/markdownVIew";
import documentStore from "@/app/core/libraries/forDocumentStore";


const MarkdownBody = () => {

    return (
        <main className="flex dark:bg-black-600">
             
             <MarkdownView></MarkdownView>
            <Preview currentDocumentId={documentStore.currentDocumentId} getCurrentId={documentStore.getCurrentId}></Preview>  
        </main>
    )
}

export default MarkdownBody;