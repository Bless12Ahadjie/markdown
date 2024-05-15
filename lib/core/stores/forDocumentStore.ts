import { makeObservable, observable, action, computed } from "mobx";
import { Document } from "../type/Types";
import data from "../data/data.json";

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

    this.currentDocumentId = 2;
    this.loadDocumentsFromStorage();
  }

  //gets current state of  Documents & current id from storage and shows in the Dom (ensures persistence)
  loadDocumentsFromStorage = () => {
    // ensure that the local storage is executed when the project is running in browser environment not during SSR
    if (typeof window === "undefined") return;

    const storedDocuments = window.localStorage.getItem("documents");

    if (storedDocuments) {
      // parses a JSON string to document
      this.documents = JSON.parse(storedDocuments);
    } else {
      // If there are no stored documents, use the data from the JSON file
      this.documents = data;
    }

    const storedCurrentDocumentId = localStorage.getItem("currentDocumentId");

    if (storedCurrentDocumentId) {
      // parses an Integer value to current document id
      this.currentDocumentId = parseInt(storedCurrentDocumentId);
      this.documentContent =
        this.documents.find((doc) => doc.id === this.currentDocumentId)
          ?.content ?? "";
    } else {
      // assign id to current document id if it has at least 1  element
      this.currentDocumentId =
        this.documents.length > 0 ? this.documents[0].id : null;
      this.documentContent =
        this.documents.find((doc) => doc.id === this.currentDocumentId)
          ?.content ?? "";
    }
  };



  // save document and id to storage
  saveDocumentsToStorage = () => {
    localStorage.setItem("documents", JSON.stringify(this.documents));
    localStorage.setItem(
      "currentDocumentId",
      this.currentDocumentId?.toString() ?? ""
    );
  };



  // get current document Name if id matches current document's id
  get getCurrentDocumentName() {
    const document = this.documents.find(
      (doc) => doc.id === this.currentDocumentId
    );
    return document?.name ?? " ";
  }



  // get current document id if id matches current document's id
  get getCurrentId() {
    const document = this.documents.find(
      (doc) => doc.id === this.currentDocumentId
    );
    return document?.id ?? "";
  }



  // set current id and it content and  save to storage
  setCurrentDocumentId(docId: number) {
    this.currentDocumentId = docId;
    this.documentContent =
      this.documents.find((doc) => doc.id === docId)?.content ?? "";
    this.saveDocumentsToStorage();
  }



  // generate random id and using math.floor round down to the nearest hole number
  generateId = () => {
    return Math.floor(Math.random() * 10000);
  };

  // create a new Document
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



  // updating document name
  updateDocumentName = (newName: string) => {
    const document = this.documents.find(
      (doc) => doc.id === this.currentDocumentId
    );
    if (document) {
      document.name = newName;
      this.saveDocumentsToStorage();
    }
  };


  // deleting document except welcome.md
  deleteDocument = () => {
    // Check if the current document ID is 2 and prevent deletion
    if (this.currentDocumentId === 2) {
      return;
    }
    // Filter out the document to be deleted from the documents array
    this.documents = this.documents.filter(
        (doc) => doc.id !== this.currentDocumentId
    );
    // Find the index of the next document after deletion
    const index = this.documents.findIndex(
        (doc) => doc.id === this.currentDocumentId
    );
    // Update the current document ID to the next document's ID, or null if there is no next document
    this.currentDocumentId = this.documents[index + 1]?.id || null;
    // Update the document content based on the new current document ID
    this.documentContent =
        this.documents.find((doc) => doc.id === this.currentDocumentId)
            ?.content ?? "";

    this.saveDocumentsToStorage();
  };


  // downloading document content using Blob
  saveCurrentDocument = () => {
    // Find the current document from the list of documents based on its ID
    const currentDocument = this.documents.find(
        (doc) => doc.id === this.currentDocumentId
    );


    // If the current document is found
    if (currentDocument) {
      // Create a blob from the document's content
      const blob = new Blob([currentDocument.content], {
        type: "text/plain",
      });

      // Create a URL for the blob
      const url = URL.createObjectURL(blob);

      // Create an anchor element
      const anchor = document.createElement("a");

      // Set the anchor's href to the URL and download attribute to the document's name
      anchor.href = url;
      anchor.download = currentDocument.name;

      // Set the anchor's display to none so it's not visible
      anchor.style.display = "none";

      // Add the anchor to the document body
      document.body.appendChild(anchor);

      // Simulate a click on the anchor to trigger the download
      anchor.click();

      // Remove the anchor from the document body
      document.body.removeChild(anchor);

      // Revoke the URL to free up memory
      URL.revokeObjectURL(url);

      // Update the document's content
      currentDocument.content = this.documentContent;

      // Save the documents to storage
      this.saveDocumentsToStorage();
    }
  };


  updateDocumentContent = (content: string) => {
    // Find the document to update based on the current document ID
    const document: Document | undefined = this.documents.find(
        (doc) => doc.id === this.currentDocumentId
    );

    if (document) {
      // Update the document's content with the new content
      document.content = content;

      // Update the current document content with the new content
      this.documentContent = content;

      this.saveDocumentsToStorage();
    }
  };

}
// create store instance and export it
const documentStore = new DocumentStore();
export default documentStore;
