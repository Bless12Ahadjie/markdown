import { makeAutoObservable } from 'mobx';
import documentStore from './forDocumentStore';

class Store {
  isSidebarOpen: boolean;
  previewSelected = true;
  isDarkMode = false;
  isDarkModeButtonChecked = false;
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
  };

  togglePreview = () => {
    this.previewSelected = !this.previewSelected;
    localStorage.setItem('previewSelected', this.previewSelected.toString());
  };

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    this.isDarkModeButtonChecked = this.isDarkMode;
    this.updateDarkModeClass();
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    localStorage.setItem('isDarkModeButtonChecked', this.isDarkModeButtonChecked.toString());
  };

  initializeDarkMode = () => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    const storedDarkModeButtonChecked = localStorage.getItem('isDarkModeButtonChecked');
    this.isDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;
    this.isDarkModeButtonChecked = storedDarkModeButtonChecked ? JSON.parse(storedDarkModeButtonChecked) : false;
    this.updateDarkModeClass();
  };

  updateDarkModeClass = () => {
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  };
}

const store = new Store();
export default store;