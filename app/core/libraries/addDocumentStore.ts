import DocumentName from '@/app/shared/components/DocumentName';
import Sidenav from '@/app/shared/layouts/Sidenav';


import { makeAutoObservable,makeObservable,observable,action, computed } from 'mobx';
import { Document } from '../type/button ';
import { log } from 'console';



class DocumentStore {
  documents: Document[] = [
    {
      id: 1,
      createdAt: "04-01-2022",
      name: "welcome.md",
      content: "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```"
    }
  ];

 
  currentDocumentId: number| null = null;

  // currentDoc!: Document | null;
  
  constructor() {

    makeObservable(this, {
      currentDocumentId: observable,
      getCurrentDocumentName: computed,
      setCurrentDocumentId: action,
      addDocument: action,
      generateId: action,

    });
    // makeAutoObservable(this);
  }

  get getCurrentDocumentName(){
    console.log(this.currentDocumentId,this.documents)

     let docuMent: Document | undefined = this.documents.find(
      (doc) => doc.id === this.currentDocumentId
      
     )
     return docuMent?.name ?? '';



  }


  setCurrentDocumentId(docId:number) {
    this.currentDocumentId = docId;
    console.log(this.currentDocumentId)
     
  }

  generateId = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    return randomNum;
  }

  addDocument = () => {
    const newDocumentId = this.generateId();
    const currentDate = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const month = monthNames[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const newDocument: Document = {
      id: newDocumentId,
      createdAt: `${day} ${month} ${year}`,
      name: "untitled-document.md",
      content: "",
    };

    this.documents.map((doc)=>{
      this.currentDocumentId = doc.id;
    })
    
    this.documents.unshift(newDocument);
    return newDocumentId;
  }

  updateDocumentName = (newName: string) => {
    this.documents = this.documents.map((doc)=>{
     return  doc.id === this.currentDocumentId ? {...doc,name:newName} : doc
    })

  };
  

  deleteDocument = () => {
  
    this.documents = this.documents.filter(doc => doc.id !==1 && doc.id !== this.currentDocumentId);
   
 };
 


}

const documentStore = new DocumentStore();
export default documentStore;
