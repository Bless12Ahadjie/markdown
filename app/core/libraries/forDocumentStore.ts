import { makeObservable, observable, action, computed } from 'mobx';
import { Document } from '../type/Types';
import data from '../data/data.json'

class DocumentStore {
  documents: Document[] = [];

  currentDocumentId: number | null = null;

  constructor() {
    makeObservable(this, {
      documents: observable,
      currentDocumentId: observable,
      getCurrentDocumentName: computed,
      getCurrentId: computed,
      setCurrentDocumentId: action,
      addDocument: action,
      generateId: action,
      updateDocumentName: action,
      deleteDocument: action,
      updateDocumentContent: action
    });

    this.documents = data;

  }

  get getCurrentDocumentName() {
    const document = this.documents.find(doc => doc.id === this.currentDocumentId);
    return document?.name ?? 'welcome.md';
  }
 
  get getCurrentId(){
    const document = this.documents.find(doc => doc.id === this.currentDocumentId);
    return document?.id ?? 2;
  }
  setCurrentDocumentId(docId: number) {
    this.currentDocumentId = docId;
    
  }

  generateId = () => {
    return Math.floor(Math.random() * 10000);
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

    this.currentDocumentId = newDocumentId;
    this.documents = [newDocument, ...this.documents]
    return newDocumentId;
  }

  updateDocumentName = (newName: string) => {
    const document = this.documents.find(doc => doc.id === this.currentDocumentId);
    if (document) {
      document.name = newName;
    }
  };

  deleteDocument = () => {
    this.documents = this.documents.filter(doc => doc.id !== 1 && doc.id !== this.currentDocumentId);
  };

  updateDocumentContent(content: string) {
    const document = this.documents.find(doc => doc.id === this.currentDocumentId);
    if (document) {
      document.content = content;
    }
  }
}

const documentStore = new DocumentStore();
export default documentStore;