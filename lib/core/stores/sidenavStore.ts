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

  // get initial dark mode from local storage
  initializeDarkMode = () => {
    // ensure that the local storage is executed when the project is running in browser environment not during SSR
    if (typeof window === "undefined") return;
    this.isDarkMode =
      localStorage.getItem("isDarkMode") === "dark";
    document
      .getElementsByTagName("body")[0]
      .classList.toggle("dark", this.isDarkMode);
  };

  // get initial state of sidebar
  initializeSidebar = () => {
    if (typeof window === "undefined") return;
    this.isSidebarOpen =
      window.localStorage.getItem("isSidebarOpen") === "open";
  };

  // get initial state of preview
  initializePreviewSelected = () => {
    if (typeof window === "undefined") return;
    this.previewSelected =
      window.localStorage.getItem("previewSelected") === "true";
  };

  // changes sidebar state to open or close
  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
    localStorage.setItem(
      "isSidebarOpen",
      this.isSidebarOpen ? "open" : "closed"
    );
  };

  // changes state of preview true or false
  togglePreview = () => {
    this.previewSelected = !this.previewSelected;
    localStorage.setItem("previewSelected", this.previewSelected.toString());
  };

// changes dark mode to light or dark
  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    this.applyDarkMode();
  };

  // sets Dark mode to light or dark and applies appropriate theme
  private applyDarkMode() {
    localStorage.setItem('isDarkMode', this.isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', this.isDarkMode);
  }
  

 
}

// create store instance
const store = new Store();
export default store;
