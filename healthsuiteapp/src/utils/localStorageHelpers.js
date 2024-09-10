// src/utils/localStorageHelpers.js

import axiosInstance from "../apicall/AxiosInstance";
import BookMarks from "../components/BookMark/bookmarks";
import LocalStorageService from "./LocalStorageService";

/**
 * Adds a page to the wishlist stored in local storage.
 * @param {string} pageId - The unique identifier for the page to be added.
 */
  export const addToWishlist = (pageId) => {

    let wishlist = [];
    const storedWishlist = localStorage.getItem('wishlist');
    
    if (storedWishlist) {
        try {
            wishlist = JSON.parse(storedWishlist);

            // Ensure that wishlist is an array
            if (!Array.isArray(wishlist)) {
                wishlist = [];
            }
        } catch (e) {
            console.error('Failed to parse wishlist:', e);
            wishlist = []; // Reset to an empty array on error
        }
    }

    // Check if the pageId is not already in the wishlist
    if (!wishlist.includes(pageId)) {
        // Add the pageId to the wishlist
        wishlist.push(pageId);

        // Convert the updated wishlist to a JSON string
        const updatedList = JSON.stringify(wishlist);

        // Save the updated wishlist back to localStorage
        localStorage.setItem('wishlist', updatedList);

        // Optionally submit the updated wishlist to an API
        submitToAPI(updatedList);
    }



    // const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    // if (!wishlist.includes(pageId)) {
    //   wishlist.push(pageId);
    //   // localStorage.setItem('wishlist', JSON.stringify(wishlist));
    //   const updatedlist = JSON.stringify(wishlist);
    //   localStorage.setItem('wishlist', updatedlist);
    //   submitToAPI(updatedlist);
    // }
  };

  export const refreshQuickTips = (quicktips) => {
    //localStorage.setItem('wishlist', quicktips);
    localStorage.setItem('wishlist', JSON.stringify(quicktips));
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
   */
  export const getWishlist = () => {

    const wishlist = localStorage.getItem('wishlist');
    // MY CODE
    //return wishlist ?  wishlist : [];
    return JSON.parse(localStorage.getItem('wishlist')) || [];
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
  