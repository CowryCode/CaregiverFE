import React, { useState, useEffect } from 'react';
import { getWishlist } from '../../utils/localStorageHelpers';

const Wishlist = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadPages = async () => {
      const wishlist = getWishlist();
      if (wishlist.length === 0) {
        setPages([]); 
        return; 
      }
      const pagePromises = wishlist.map(pageId =>
        import(`./Pages/${pageId}.js`)
      );
      const pageModules = await Promise.all(pagePromises);
      setPages(pageModules.map(mod => mod.default));
    };

    loadPages();
  }, []);

  return (
    <div>
      <h1>My Wishlist</h1>
      {pages.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {pages.map((PageComponent, index) => (
            <li key={index}>
              <PageComponent />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Pages are selected as Favourite Page.</p>
      )}
    </div>
  );
};

export default Wishlist;
