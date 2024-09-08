// src/utils/localStorageHelpers.js

import axiosInstance from "../apicall/AxiosInstance";
import BookMarks from "../components/BookMark/bookmarks";
import LocalStorageService from "./LocalStorageService";

/**
 * Adds a page to the wishlist stored in local storage.
 * @param {string} pageId - The unique identifier for the page to be added.
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
  