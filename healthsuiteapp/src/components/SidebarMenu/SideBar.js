import React , { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';
import LocalStorageService from '../../utils/LocalStorageService';
import axiosInstance from '../../apicall/AxiosInstance';

const Sidebar = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});

    // const handleLibraryClick = () => {
    //     // THIS ARRAY IS GENERATED AFTER SUBMITTING NEED ASSESSMENT
    //     // const data = [3, 2, 4, 5, 1]; // Static array for development purposes
    //     // WHEN NEED ASSESSMENT HAS NOT BEEN SUBMITTED DATA IS EMPTY
    //     const data = [];
    //     if (data.length > 0) {
    //         //const firstTopic = data[0];
    //         const firstTopic = 1;
            
    //         navigate(`/library/core-topic${firstTopic}`);
    //     }else{
    //         navigate(`/need-assessment`);
    //     }
    // };

    useEffect(() => {
        const localprofile = LocalStorageService.getItem('profile');
        setProfile(localprofile);
      }, []);

    const handleLibraryClick = () => { 
    
        const data = LocalStorageService.getItem('token');
        const liborder = LocalStorageService.getArray('libraryorder');
    
        // if(profile.needAssessmentSubmitted  && data.length > 0 && liborder.length > 0 ){
        if(liborder && liborder.length > 0 ){
          
            const firstTopic = liborder[0];
            //const firstTopic = 1;
    
          navigate(`/library/core-topic${firstTopic}`);
        }else{
          navigate(`/need-assessment`);
        }
    };

    const logout = () => {
        LocalStorageService.clear();
        navigate(`/login`);
    }


    return (
        // <nav id="sidebarmenu" className="col-md-3 col-lg-2 sidebarmenu">
        //             <div className="sidebar-sticky">
        //                 <ul className="nav flex-column" style={{marginTop: "20px"}}>
        //                     <li className="nav-item">
        //                         <span className="nav-link active" onClick={() => navigate('/')}>
        //                             <i className="fas fa-home"></i>
        //                             Home
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate("/profile")}>
        //                             <i className="fas fa-user"></i>
        //                             My Profile
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={handleLibraryClick}>
        //                             <i className="fas fa-file-alt"></i>
        //                             Content Library
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link"  onClick={() => navigate("/withdraw")}>
        //                             <i className="fas fa-sign-out-alt"></i>
        //                             Voluntary Withdrawal
        //                         </span>
        //                     </li>
        //                     <li className="nav-item" >
        //                         <span className="nav-link" onClick={() => navigate("/feedback")}>
        //                             <i className="fas fa-comments"></i>
        //                             Feedback
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate("/contact-us")}>
        //                             <i className="fas fa-envelope"></i>
        //                             Contact Us
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate('/eligibility-form')}>
        //                             <i className="fas fa-clipboard-list"></i>
        //                             Forms
        //                         </span>
        //                     </li>

        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate('/admin')}>
        //                             <i className="fas fa-clipboard-list"></i>
        //                             Admin
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link">
        //                             <i className="fas fa-clipboard-list"></i>
        //                             ******************************************
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate('/caregiverregister')}>
        //                             <i className="fas fa-clipboard-list"></i>
        //                             Provider Register CareGiver
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate('/referral-code-validation')}>
        //                             <i className="fas fa-clipboard-list"></i>
        //                             Login with RefCode
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate('/baseline-questionnaire-f1')}>
        //                             <i className="fas fa-clipboard-list"></i>
        //                             Baseline Questionnaire
        //                         </span>
        //                     </li>
        //                     <li className="nav-item">
        //                         <span className="nav-link" onClick={() => navigate('/registration')}>
        //                             <i className="fas fa-clipboard-list"></i>
        //                             Complete Registration
        //                         </span>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>

        <nav id="sidebarmenu" className="col-md-3 col-lg-2 sidebarmenu">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="nav-link active" onClick={() => navigate("/")}>
              <i className="fas fa-home"></i>
              Home
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => navigate("/profile")}>
              <i className="fas fa-user"></i>
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
            <span className="nav-link" onClick={() => navigate("/withdraw")}>
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
          <li className="nav-item">
            <span className="nav-link" onClick={() => navigate("/install")}>
              <i className="fas fa-clipboard-list"></i>
              Install App
            </span>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Sidebar;
