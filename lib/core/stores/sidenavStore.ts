import { makeAutoObservable } from "mobx";
import documentStore from "./forDocumentStore";

class Store {
  isSidebarOpen = false;
  previewSelected = false;
  isDarkMode = false;
  documentStore = documentStore;

  constructor() {
    this.initializeSidebar();
    this.initializePreviewSelected();
    this.initializeDarkMode();

    makeAutoObservable(this);
  }
  
  initializeDarkMode = () => {
    if (typeof window === "undefined") return;
    this.isDarkMode =
      localStorage.getItem("isDarkMode") === "dark" ? true : false;
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("dark", this.isDarkMode);
  };

  initializeSidebar = () => {
    if (typeof window === "undefined") return;
    this.isSidebarOpen =
      window.localStorage.getItem("isSidebarOpen") === "open";
  };

  initializePreviewSelected = () => {
    if (typeof window === "undefined") return;
    this.previewSelected =
      window.localStorage.getItem("previewSelected") === "true";
  };

  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
    localStorage.setItem(
      "isSidebarOpen",
      this.isSidebarOpen ? "open" : "closed"
    );
  };

  togglePreview = () => {
    this.previewSelected = !this.previewSelected;
    localStorage.setItem("previewSelected", this.previewSelected.toString());
  };

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("isDarkMode", this.isDarkMode ? "dark" : "light");
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("dark", this.isDarkMode);
  };

 
}

const store = new Store();
export default store;
