import { makeAutoObservable } from 'mobx';
import documentStore from './forDocumentStore';

class Store {
  isSidebarOpen = false;
  previewSelected = false;
  isDarkMode = false;
  isDarkModeButtonChecked = false;
  documentStore = documentStore;

  constructor() {
    this.initializeSidebar();
    this.initializePreviewSelected();
    this.initializeDarkMode();

    
    makeAutoObservable(this);

  }

  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
    localStorage.setItem('isSidebarOpen', this.isSidebarOpen ? 'open' : 'closed');
  };

  togglePreview = () => {
    this.previewSelected = !this.previewSelected;
    localStorage.setItem('previewSelected', this.previewSelected.toString());
  };

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    this.isDarkModeButtonChecked = this.isDarkMode;

    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('isDarkMode', this.isDarkMode ? 'dark': '');

  };

  initializeDarkMode = () => {
    if (typeof window === 'undefined') return
    this.isDarkMode = localStorage.getItem('isDarkMode') === 'dark' ? true : false;
  
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  };

  initializeSidebar = () =>{
    if (typeof window === 'undefined') return

    this.isSidebarOpen = window.localStorage.getItem('isSidebarOpen') === 'open';
  }

  
  initializePreviewSelected = () => {
    if (typeof window === 'undefined') return

    this.previewSelected = window.localStorage.getItem('previewSelected') === 'true';
  }

}

const store = new Store();
export default store;











































