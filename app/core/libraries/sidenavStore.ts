import { makeAutoObservable } from 'mobx';
import documentStore from './forDocumentStore';

class Store {
  isSidebarOpen: boolean;
  previewSelected = false;
  documentStore = documentStore;

  constructor() {
    this.isSidebarOpen = localStorage.getItem('isSidebarOpen') === 'open';
    this.previewSelected = localStorage.getItem('previewSelected') === 'false';

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
}

const store = new Store();

export default store;
