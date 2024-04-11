import Preview from "../components/markdownEditor/Prieview";
import MarkdownView from "../components/markdownEditor/Editor";
import documentStore from "@/app/core/stores/forDocumentStore";


const MarkdownBody = () => {
    const displayPreviewOnly = true;
    return (
      <main className={`grid h-screen w-full dark:bg-black-600 ${displayPreviewOnly ? "grid-cols-1" : "md:grid-cols-2"}`}>
        <MarkdownView />
        <Preview />
      </main>
    );
  };

export default MarkdownBody;