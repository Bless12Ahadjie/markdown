import { makeObservable, observable, action, computed } from "mobx";
import { Document } from "../type/Types";


class DocumentStore {
  documents: Document[] = [];
  currentDocumentId: number | null = null;
  documentContent: string = "";

  constructor() {
    makeObservable(this, {
      documents: observable,
      currentDocumentId: observable,
      documentContent: observable,
      getCurrentDocumentName: computed,
      getCurrentId: computed,
      setCurrentDocumentId: action,
      addDocument: action,
      generateId: action,
      updateDocumentName: action,
      deleteDocument: action,
      updateDocumentContent: action,
      loadDocumentsFromStorage: action,
      saveDocumentsToStorage: action,
    });

    this.loadDocumentsFromStorage();
  }

  loadDocumentsFromStorage = () => {
    const storedDocuments = localStorage.getItem("documents");
    if (storedDocuments) {
      this.documents = JSON.parse(storedDocuments);
    }

    const storedCurrentDocumentId = localStorage.getItem("currentDocumentId");
    if (storedCurrentDocumentId) {
      this.currentDocumentId = parseInt(storedCurrentDocumentId);
      this.documentContent = this.documents.find((doc) => doc.id === this.currentDocumentId)?.content || "";
    } else {
      this.currentDocumentId = this.documents.length > 0 ? this.documents[0].id : null;
      this.documentContent = this.documents.find((doc) => doc.id === this.currentDocumentId)?.content || "";
    }
  };

  saveDocumentsToStorage = () => {
    localStorage.setItem("documents", JSON.stringify(this.documents));
    localStorage.setItem("currentDocumentId", this.currentDocumentId?.toString() || "");
  };

  get getCurrentDocumentName() {
    const document = this.documents.find((doc) => doc.id === this.currentDocumentId);
    return document?.name ?? "welcome.md";
  }

  get getCurrentId() {
    const document = this.documents.find((doc) => doc.id === this.currentDocumentId);
    return document?.id ?? "";
  }

  setCurrentDocumentId(docId: number) {
    this.currentDocumentId = docId;
    this.documentContent = this.documents.find((doc) => doc.id === docId)?.content || "";
    this.saveDocumentsToStorage();
  }

  generateId = () => {
    return Math.floor(Math.random() * 10000);
  };

  addDocument = () => {
    const newDocumentId = this.generateId();
    const currentDate = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
    this.documentContent = "";
    this.saveDocumentsToStorage();
    return newDocumentId;
  };

  updateDocumentName = (newName: string) => {
    const document = this.documents.find((doc) => doc.id === this.currentDocumentId);
    if (document) {
      document.name = newName;
      this.saveDocumentsToStorage();
    }
  };

  deleteDocument = (id?: number | null) => {
    this.documents = this.documents.filter((doc) => doc.id !== this.currentDocumentId);
    this.currentDocumentId = null;
    this.documentContent = "";
    this.saveDocumentsToStorage();
  };

  updateDocumentContent = (content: string) => {
    const document: Document | undefined = this.documents.find((doc) => doc.id === this.currentDocumentId);
    if (document) {
      document.content = content;
      this.documentContent = content;
      this.saveDocumentsToStorage();
    }
  };
}

const documentStore = new DocumentStore();
export default documentStore;