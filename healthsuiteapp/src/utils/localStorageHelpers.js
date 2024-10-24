// src/utils/localStorageHelpers.js

import axiosInstance from "../apicall/AxiosInstance";
import BookMarks from "../components/BookMark/bookmarks";
import LocalStorageService from "./LocalStorageService";

/**
 * Adds a page to the wishlist stored in local storage.
 * @param {string} pageId - The unique identifier for the page to be added.
 
  export const addToWishlist = (pageId) => {
    let wishlist = [];
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        try {
            wishlist = JSON.parse(storedWishlist);
            if (!Array.isArray(wishlist)) {
                wishlist = [];
            }
        } catch (e) {
            console.error('Failed to parse wishlist:', e);
            wishlist = []; 
        }
    }

    if (!wishlist.includes(pageId)) {
        wishlist.push(pageId);
        const updatedList = JSON.stringify(wishlist);
        localStorage.setItem('wishlist', updatedList);
        submitToAPI(updatedList);
    }

  };
  */

  export const addToWishlist = (pageId) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(pageId)) {
      wishlist.push(pageId);
      // localStorage.setItem('wishlist', JSON.stringify(wishlist));
      const updatedlist = JSON.stringify(wishlist);
      localStorage.setItem('wishlist', updatedlist);
      submitToAPI(updatedlist);
    }
  };
  
  // export const refreshQuickTips = (quicktips) => {
  //   localStorage.setItem('wishlist', JSON.stringify(quicktips));
  // };

  export const refreshQuickTips = (quicktips) => {
    localStorage.setItem('wishlist', quicktips);
};

  export const getGoals = () => {
    axiosInstance.get('/caregiver/v1/get-goals')
    .then(goals => {
        LocalStorageService.saveGoals(goals);
    }).catch(error => {
      console.error('Error', error);
  });
 };

 export const getBookMarks = () => {
  axiosInstance.get('/caregiver/v1/get-bookmarks')
  .then(BookMarks => {
      LocalStorageService.saveBookmarks(BookMarks);
  }).catch(error => {
    console.error('Error', error);
});
};
  
  /**
   * Removes a page from the wishlist stored in local storage.
   * @param {string} pageId - The unique identifier for the page to be removed.
   
  export const removeFromWishlist = (pageId) => {
    console.log(`Page ID : ${pageId}`);
     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
     console.log(`REMOVE : ${wishlist}`);
      wishlist = wishlist.filter(id => id !== pageId);
    const updatedlist = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', updatedlist);
    submitToAPI(updatedlist);
  };
  */

   /**
   * Removes a page from the wishlist stored in local storage.
   * @param {string} pageId - The unique identifier for the page to be removed.
   */
   export const removeFromWishlist = (pageId) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(id => id !== pageId);
    // localStorage.setItem('wishlist', JSON.stringify(wishlist));
    const updatedlist = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', updatedlist);
    submitToAPI(updatedlist);
  };
  
  /**
   * Retrieves the wishlist from local storage.
   * @returns {Array} An array of page IDs stored in the wishlist.
   
  export const getWishlist = () => {

    let wishlist = localStorage.getItem('wishlist');
    let arr = JSON.parse(wishlist);
    let arrayData = JSON.parse(arr);
     return arrayData;
  };
  */

    /**
   * Retrieves the wishlist from local storage.
   * @returns {Array} An array of page IDs stored in the wishlist.
   */
    export const getWishlist = () => {

      const wishlist = localStorage.getItem('wishlist');
      
      // MY CODE
      return JSON.parse(localStorage.getItem('wishlist')) || [];
    };

     /**
   * Retrieves the login token from local storage.
   * @returns text An array of page IDs stored in the wishlist.
   */
     export const getToken = () => {
      const token = LocalStorageService.getItem('token');
      return token;
    };

    export const saveUserProfile = (profile) => {
      LocalStorageService.setItem('profile', profile);
    };

    export const getUserProfile = () => {
      const userData = LocalStorageService.getItem('profile');
      return userData;
    };

    export const saveProviderToken = (providertoken) => {
      localStorage.setItem('providerToken', providertoken);
    };

    export const getProviderToken = () => {
      const token = localStorage.getItem('providerToken');
       return token ? token : null
    };

    export const saveRoute = (route) => {
      localStorage.setItem('Route', route);
    };

    export const getRoute = () => {
      const token = localStorage.getItem('Route');
       return token ? token : 0
    };

    export const justLoggedIn = () => {
      localStorage.setItem('JLI', "true");
    };

    export const getJustLoggedIn = () => {
      const token = localStorage.getItem('JLI');
       return token ? token : null;
    };

    export const clearJustLoggedIn = () => {
      try {
        localStorage.removeItem('JLI');
      } catch (error) {
        console.error(`Error removing item JLI from localStorage:`, error);
      }
    };

    


  const submitToAPI = (wishlist) => {
    const payload = {content: wishlist}
    axiosInstance.post('/caregiver/v1/update-quick-link', payload) 
    .then(response => {
    })
    .catch(error => {
        console.error('Error', error);
    })
  }
  