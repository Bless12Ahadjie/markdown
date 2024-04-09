import { makeAutoObservable } from 'mobx';

class DeleteStore {
  constructor() {
    makeAutoObservable(this);
  }

 
  deleteDocument = (id) => {
 
  }
}

const deleteStore = new DeleteStore();
export default deleteStore;
