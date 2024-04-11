import { makeObservable, observable, action, computed } from 'mobx';

import { Document } from '../type/Types';

import data from '../data/data.json';

class DocumentStore {
  documents: Document[] = [];
  currentDocumentId: number | null = null;
  documentContent: string = ''; // Observable property to store the content

  constructor() {
    makeObservable(this, {
      documents: observable,
      currentDocumentId: observable,
      documentContent: observable, // Make documentContent observable
      getCurrentDocumentName: computed,
      getCurrentId: computed,
      setCurrentDocumentId: action,
      addDocument: action,
      generateId: action,
      updateDocumentName: action,
      deleteDocument: action,
      updateDocumentContent: action,
    });

    this.documents = data;
    this.documents = data;
    this.currentDocumentId = 2; 
    this.documentContent = this.documents.find((doc) => doc.id === 2)?.content || ''; 
  }

  get getCurrentDocumentName() {
    const document = this.documents.find(doc => doc.id === this.currentDocumentId);
    return document?.name ?? 'welcome.md';
  }

  get getCurrentId() {
    const document = this.documents.find(doc => doc.id === this.currentDocumentId);
    return document?.id ?? 2;
  }

  setCurrentDocumentId(docId: number) {
    this.currentDocumentId = docId;
    this.documentContent = (this.documents.find(doc => doc.id === docId)?.content) || '';
  }

  generateId = () => {
    return Math.floor(Math.random() * 10000);
  };

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
    this.documents = [newDocument, ...this.documents];
    this.documentContent = '';
    return newDocumentId;
  };

  updateDocumentName = (newName: string) => {
    const document = this.documents.find(doc => doc.id === this.currentDocumentId);
    if (document) {
      document.name = newName;
    }
  };

  deleteDocument = (id?: number | null) => {
    this.documents = this.documents.filter(doc => doc.id !== this.currentDocumentId);
    this.currentDocumentId = null;
    this.documentContent = '';
  };

  updateDocumentContent = (content: string) => {
    const document: Document | undefined = this.documents.find(doc => doc.id === this.currentDocumentId);
    if (document) {
      document.content = content;
      this.documentContent = content;
    }
  };
}

const documentStore = new DocumentStore();
export default documentStore;