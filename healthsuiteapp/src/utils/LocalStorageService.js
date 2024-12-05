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
        return value ? value.split(',') : null;
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

   saveBookmarks(bookmarks){
      const bookmarksJSON = JSON.stringify(bookmarks.data);
      this.removeItem(bookmarks);
      localStorage.setItem('bookmarks', bookmarksJSON);
   },

   getBookMarks() {
    // const boomarksJSON = localStorage.getItem('bookmarks');
    // if (!boomarksJSON) {
    //     return [];
    // }
    //  return JSON.parse(boomarksJSON);

     const bookmarksJSON = localStorage.getItem('bookmarks');
     if (!bookmarksJSON) {
         return [];
     }
 
     // Parse the JSON data
     const bookmarks = JSON.parse(bookmarksJSON);
     const bb = JSON.stringify(bookmarks);
     // Remove duplicates (assuming each bookmark is an object with a unique `id`)
     const uniqueBookmarks = bookmarks.filter(
         (bookmark, index, self) =>
             index === self.findIndex((b) => b.url === bookmark.url)
     );
 
     return uniqueBookmarks;
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
  