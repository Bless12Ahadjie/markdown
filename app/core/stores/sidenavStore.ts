

import { makeAutoObservable } from 'mobx';
import documentStore from './forDocumentStore';

class Store {
  isSidebarOpen: boolean;
  previewSelected = true;
  isDarkMode = false;
  documentStore = documentStore;

  constructor() {
  
    this.isSidebarOpen = localStorage.getItem('isSidebarOpen') === 'open';
    this.previewSelected = localStorage.getItem('previewSelected') === 'true';
    this.initializeDarkMode();

    makeAutoObservable(this);
  }

  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
    localStorage.setItem('isSidebarOpen', this.isSidebarOpen ? 'open' : 'closed');
  }

  togglePreview = () => {
    this.previewSelected = !this.previewSelected;
    localStorage.setItem('previewSelected', this.previewSelected.toString());
  }

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    document.getElementsByTagName("body")[0].classList.toggle("dark");
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    console.log("Darkmode: ",this.isDarkMode.toString());
  };


 initializeDarkMode = () => {
  
    const storedDarkMode = localStorage.getItem('isDarkMode');
    this.isDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;
    if (this.isDarkMode) {
      document.getElementsByTagName("body")[0].classList.add("dark");
    }
  };


}

const store = new Store();

export default store;
