import React, { useState, useEffect } from 'react';
import { getWishlist } from '../../utils/localStorageHelpers';
import { Container } from "@mui/material";
import Header from '../Header/Header';
import { FaBars } from "react-icons/fa";
import Sidebar from '../SidebarMenu/SideBar';

const QuickTips = () => {
  const [pages, setPages] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  return (
    <div>
      <Header />
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
    <Container>
    <h1>Quick Tipes</h1>
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
    </Container>
    
  </div>
    // <div>
    //   <h1>Quick Tipes</h1>
    //   {pages.length > 0 ? (
    //     <ul style={{ listStyleType: 'none', padding: 0 }}>
    //       {pages.map((PageComponent, index) => (
    //         <li key={index}>
    //           <PageComponent />
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No Pages are selected as Favourite Page.</p>
    //   )}
    // </div>
  );
};

export default QuickTips;
