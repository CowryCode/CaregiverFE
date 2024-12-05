import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../SidebarMenu/SideBar";
import { FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocalStorageService from "../../utils/LocalStorageService";
import { Box, Button, Container } from '@mui/material';
import { red} from '@mui/material/colors';
import axiosInstance from "../../apicall/AxiosInstance";


const BookMarks = () => {
    const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookMarks] = useState([]);
  const [bookmarkid, setBookMarkId] = useState(0);

  const bookmarksJSON = LocalStorageService.getBookMarks();
  useEffect(() => {
    setBookMarks(bookmarksJSON);
    if (bookmarksJSON.length > 0) {
       setLoading(false);
    }else{
      setLoading(true);
    }
  }, [openDialog, bookmarks]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
  };

  const handleComplete = async (id) => {
    setOpenDialog(true);
    setBookMarkId(id);
  };

  const handleDialogClose = () => {
    submitToAPI();
    setOpenDialog(false);
  };

  const submitToAPI = () => {
    axiosInstance.delete(`/caregiver/v1/delete-bookmark/${bookmarkid}`) 
    .then(response => {
     LocalStorageService.saveBookmarks(response);
      navigate(`/bookmarks`);
    })
    .catch(error => {
        console.error('Error', error);
    });
  }

  const renderContent = () => {
    return (
        <div className="user-table-container">
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            border={0}
            borderColor="grey.300"
        >
            <h2>My BookMarks</h2>
        </Box>


          
          {!loading && (
          <table className="user-table">
            <thead>
              <tr>
                <th>Pages</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {bookmarks.map((row, index) => (
                <tr key={index}>
                <td style={{ border: 'none' }}>
                    {/* <td>{row.title}</td> */}
                    <a href={row.url}  rel="noopener noreferrer">{row.title}
                    </a>
                </td>
                <td style={{ border: 'none' }}>
                    <Button sx={{
                    backgroundColor: red[500],
                    color: 'white',
                    '&:hover': {
                        backgroundColor: red[700],
                    },
                    }} onClick={() => handleComplete(row.id)}> Delete 
                    </Button>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
            )}
            {loading && (
            <div>
                {/* <LoadingComponent/> */}
                <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', 
                // backgroundColor: 'lightgrey', 
            }}
        >
            <Box
                sx={{
                    width: '300px',
                    height: '200px',
                    backgroundColor: 'white',
                    // border: '1px solid grey',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                No BookMarks yet
            </Box>
        </Box>
            </div>
            )}

          {openDialog && (
            <div className="dialog">
              <div className="dialog-content">
                {/* <h3>Referral Code</h3> */}
                <p>
                <strong>Are you sure you want to remove this bookmark?</strong>
                </p>
                <button onClick={handleDialogClose}>Yes</button>
              </div>
            </div>
          )}
        </div>
      );
  };

  return (
    <div className={`app-container ${isSidebarOpen ? "with-sidebar" : ""}`}>
      <button className="sidebar-toggle" onClick={handleSidebarToggle}>
        <FaBars />
      </button>
      {isSidebarOpen && <Sidebar />}
      <Header />
      <Container>
      <div className="tab-content">{renderContent()}</div>
      </Container>
      <Footer />
    </div>
  );
};

export default BookMarks;
