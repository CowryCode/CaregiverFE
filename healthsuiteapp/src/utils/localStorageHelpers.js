// src/utils/localStorageHelpers.js

/**
 * Adds a page to the wishlist stored in local storage.
 * @param {string} pageId - The unique identifier for the page to be added.
 */
export const addToWishlist = (pageId) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(pageId)) {
      wishlist.push(pageId);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  };
  
  /**
   * Removes a page from the wishlist stored in local storage.
   * @param {string} pageId - The unique identifier for the page to be removed.
   */
  export const removeFromWishlist = (pageId) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(id => id !== pageId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  /**
   * Retrieves the wishlist from local storage.
   * @returns {Array} An array of page IDs stored in the wishlist.
   */
  export const getWishlist = () => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  };
  