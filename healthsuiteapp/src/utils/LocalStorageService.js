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

    setArray(key, value) {
      try {
        this.removeItem(key);
        localStorage.setItem(key, value);
      } catch (error) {
        console.error(`Error setting item ${key} in localStorage:`, error);
      }
    },
  
  
    getItem(key) {
      try {
        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : null;
      } catch (error) {
        console.error(`Error getting item ${key} from localStorage:`, error);
        return null;
      }
    },

    getArray(key) {
      try {
        const value = localStorage.getItem(key);
        return value.split(',') ;
      } catch (error) {
        console.error(`Error getting item ${key} from localStorage:`, error);
        return null;
      }
    },

    saveGoals(goals) {
      const goalsJSON = JSON.stringify(goals.data);
      this.removeItem(goals);
      localStorage.setItem('goals', goalsJSON);
   },

    getGoals() {
    const goalsJSON = localStorage.getItem('goals');
    if (!goalsJSON) {
        return [];
    }
     return JSON.parse(goalsJSON);
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
  