// localStorageService.js

const LocalStorageService = {
    // Keys Description
    // profile : This stores user profile
    // token : This stores token
    // state : This stores the state object that conatins all the states
  
    setItem(key, value) {
      try {
        this.removeItem(key);
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error(`Error setting item ${key} in localStorage:`, error);
      }
    },
  
    getItem(key) {
      try {
        const serializedValue = localStorage.getItem(key);
        console.log(`Value : ${serializedValue}`);
        return serializedValue ? JSON.parse(serializedValue) : null;
      } catch (error) {
        console.error(`Error getting item ${key} from localStorage:`, error);
        return null;
      }
    },

    getUnStringifiedItem(key) {
      try {
        const serializedValue = localStorage.getItem(key);
        console.log(`Value : ${serializedValue}`);
        return serializedValue ? serializedValue.split(',') : null;
      } catch (error) {
        console.error(`Error getting item ${key} from localStorage:`, error);
        return null;
      }
    },
  
    removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing item ${key} from localStorage:`, error);
      }
    },
  
    clear() {
      try {
        localStorage.clear();
      } catch (error) {
        console.error('Error clearing localStorage:', error);
      }
    }
  };
  
  export default LocalStorageService;
  