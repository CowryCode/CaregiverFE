import React , { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaBars } from "react-icons/fa"; // Importing the FaBars icon
// import beginImg from "../../assets/begin.png";
import profileImg from "../../assets/profile-icon.png";
// import handbookImg from "../../assets/handbook.png";
import priorityNeedImg from "../../assets/priority-need-icon.jpg";
import supportImg from "../../assets/contactus.png";
// import workshopImg from "../../assets/workshop.png";
import myGoalsImg from "../../assets/mygoalsIcon.png";
// import governmentImg from "../../assets/government.png";
import quickTipsImg from "../../assets/myQuickTipsIcon.jpg";
// import adultcareImg from "../../assets/adultcare.png";
import bookmarkImg from "../../assets/bookMarksIcon.jpg";
// import lifecareImg from "../../assets/lifecare.png";
import withdrawalImg from "../../assets/withdrawalIcon.png"; 
// import formImg from "../../assets/form.png";
import feedbackImg from "../../assets/feedbackIcon.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocalStorageService from "../../utils/LocalStorageService";
import axiosInstance from "../../apicall/AxiosInstance";
const Home = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const myPriorityNeed = () => {
    // THIS ARRAY IS GENERATED AFTER SUBMITTING NEED ASSESSMENT
    // const data = [3, 2, 4, 5, 1]; // Static array for development purposes
    const data = []; // Static array for development purposes
    if (data.length > 0) {
      //const firstTopic = data[0];
      const firstTopic = 1;

      navigate(`/library/core-topic${firstTopic}`);
    } else {
      alert(
        "You need to complete your Needs Assessment by clicking on My tasks list to be able to view your priority needs areas."
      );
    }
  };

  useEffect(() => {
    const localtoken = LocalStorageService.getItem('token');
    const localprofile = LocalStorageService.getItem('profile');
    setToken(localtoken);
    setProfile(localprofile);

    if(localtoken === null || localprofile === null){
      navigate(`/login`);
    }

    trackLastDateUser();

  }, []);


const trackLastDateUser = async () => {
  const profile = LocalStorageService.getItem('profile');
  const lastUsedDate = profile?.lastUsedDate ? new Date(profile.lastUsedDate).toISOString().split('T')[0] : null;
  const today = new Date().toISOString().split('T')[0];

 // Check if lastUsedDate exists and compare dates
  if (lastUsedDate && today > lastUsedDate) {
    try {
      const response = await axiosInstance.get('/caregiver/v1/save-presence');
      console.info('Successful', response);
    } catch (error) {
      console.error('Error', error);
    }
  }

  try {
    const tokenResponse = await axiosInstance.get('/caregiver/v1/test-token');
    console.log(`Token is Valid`);
  } catch (error) {
    console.error('Error', error);
    LocalStorageService.clear();
    navigate(`/login`);
  }
};



  const logout = () => {
    LocalStorageService.clear();
    navigate(`/login`);
  }

  const handleSidebarToggle = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };


  const handleLibraryClick = () => {
    // const data = [3, 2, 4, 5, 1]; 

    const data = LocalStorageService.getItem('token');

    if(profile.needAssessmentSubmitted  && data.length > 0){
      // THIS ARRAY IS GENERATED AFTER SUBMITTING NEED ASSESSMENT
      // WHEN NEED ASSESSMENT HAS NOT BEEN SUBMITTED DATA IS EMPTY
      
        //const firstTopic = data[0];
        const firstTopic = 1;

      navigate(`/library/core-topic${firstTopic}`);
    }else{
      navigate(`/need-assessment`);
    }
    


    // THIS ARRAY IS GENERATED AFTER SUBMITTING NEED ASSESSMENT
    // const data = [3, 2, 4, 5, 1]; // Static array for development purposes
    // WHEN NEED ASSESSMENT HAS NOT BEEN SUBMITTED DATA IS EMPTY
    // const data = [];
    // if (data.length > 0) {
    //   //const firstTopic = data[0];
    //   const firstTopic = 1;

    //   navigate(`/library/core-topic${firstTopic}`);
    // } else {
    //   navigate(`/need-assessment`);
    // }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebar" className="col-md-3 col-lg-2 sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="nav-link active">
                    <i className="fas fa-home"></i>
                    Home
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/profile")}>
                    <i className="fas fa-user" ></i>
                    My Profile
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={handleLibraryClick}>
                    <i className="fas fa-file-alt"></i>
                    Content Library
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link"  onClick={() => navigate("/withdraw")}>
                    <i className="fas fa-sign-out-alt"></i>
                    Voluntary Withdrawal
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/feedback")}>
                    <i className="fas fa-comments"></i>
                    Feedback
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/contact-us")}>
                    <i className="fas fa-envelope"></i>
                    Contact Us
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/admin")}>
                    <i className="fas fa-clipboard-list"></i>
                    Admin
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={logout}>
                    <i className="fas fa-clipboard-list"></i>
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <button
              id="sidebarToggle"
              className="btn btn-primary d-md-none"
              type="button"
              aria-controls="sidebar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleSidebarToggle}
            >
              <FaBars /> {/* Using the FaBars icon */}
            </button>
            <hr className="blue-line" />
            <Header />
            <hr className="blue-line" />
            <div className="icon-container">
              <span className="icon" onClick={() => navigate("/Profile")}>
                {/* <img src={beginImg} alt="Where to Begin" /> */}
                <img src={profileImg} alt="My Profile" />
                <p>My Profile</p>
              </span>
              <span className="icon" onClick={handleLibraryClick}>
                {/* <img src={handbookImg} alt="Caregiver's Handbook" /> */}
                <img src={priorityNeedImg} alt="My Priority Needs" />
                <p>My Priority Needs Area</p>
              </span>
              <span className="icon" onClick={() => navigate("/goals")}>
                {/* <img src={workshopImg} alt="Workshops" /> */}
                <img src={myGoalsImg} alt="Workshops" />
                <p>My Goals</p>
              </span>
              <span className="icon" onClick={() => navigate("/quicktips")}>
                {/* <img src={governmentImg} alt="Government Programs" /> */}
                <img src={quickTipsImg} alt="My Quick Tips" />
                <p>My Quick Tips</p>
              </span>
              <span className="icon" onClick={() => navigate("/bookmarks")}>
                {/* <img src={adultcareImg} alt="Transitions in Adult Care" /> */}
                <img src={bookmarkImg} alt="BookMarks" />
                <p>My Bookmarks</p>
              </span>
              <span className="icon" onClick={() => navigate("/feedback")}>
                {/* <img src={formImg} alt="Referral Form" /> */}
                <img src={feedbackImg} alt="Feedback" />
                <p>Feedback</p>
              </span>
              <span className="icon" onClick={() => navigate("/contact-us")}>
                {/* <img src={supportImg} alt="Contact Us" /> */}
                <img src={supportImg} alt="Contact Us" />
                <p>Contact Us</p>
              </span>
              <span className="icon" onClick={() => navigate("/withdraw")}> 
                {/* <img src={lifecareImg} alt="Voluntary withdrawal" /> */} 
                <img src={withdrawalImg} alt="Voluntary withdrawal" />
                <p>Voluntary Withdrawal</p>
              </span>
            </div>
          </main>
        </div>
        {openDialog && (
            <div className="dialog">
              <div className="dialog-content">
                <h3>Withdrawal</h3>
                <p>
                {/* <strong>If you withdraw, you won't have access to the caregiver platform? </strong> */}
                If you withdraw, you won't have access to the caregiver platform? 
                Doe you want to withdraw? 
                </p>
                <button onClick={handleDialogClose}>Yes</button>
                <button onClick={handleDialogClose}>No</button>
              </div>
            </div>
          )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
