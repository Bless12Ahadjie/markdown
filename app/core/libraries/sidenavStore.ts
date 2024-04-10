
import { makeAutoObservable } from 'mobx';
import documentStore from './forDocumentStore';

class Store {
  isSidebarOpen: boolean;
  documentStore = documentStore;

  constructor() {
   
    this.isSidebarOpen = localStorage.getItem('isSidebarOpen') === 'open';


    makeAutoObservable(this);
  }

  toggleSidebar = () => {
    
    this.isSidebarOpen = !this.isSidebarOpen;


    localStorage.setItem('isSidebarOpen', this.isSidebarOpen ? 'open' : 'closed');
  }
}


const store = new Store();


export default store;
