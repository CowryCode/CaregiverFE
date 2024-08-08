import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaBars } from "react-icons/fa"; // Importing the FaBars icon
import beginImg from "../../assets/begin.png";
import handbookImg from "../../assets/handbook.png";
import supportImg from "../../assets/support.png";
import workshopImg from "../../assets/workshop.png";
import governmentImg from "../../assets/government.png";
import adultcareImg from "../../assets/adultcare.png";
import lifecareImg from "../../assets/lifecare.png";
import formImg from "../../assets/form.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigate = useNavigate();

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

  const handleSidebarToggle = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  const handleLibraryClick = () => {
    // THIS ARRAY IS GENERATED AFTER SUBMITTING NEED ASSESSMENT
    // const data = [3, 2, 4, 5, 1]; // Static array for development purposes
    // WHEN NEED ASSESSMENT HAS NOT BEEN SUBMITTED DATA IS EMPTY
    const data = [];
    if (data.length > 0) {
      //const firstTopic = data[0];
      const firstTopic = 1;

      navigate(`/library/core-topic${firstTopic}`);
    } else {
      navigate(`/need-assessment`);
    }
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
                  <span
                    className="nav-link"
                    onClick={() => navigate("/eligibility-form")}
                  >
                    <i className="fas fa-clipboard-list"></i>
                    Forms
                  </span>
                </li>

                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate("/admin")}>
                    <i className="fas fa-clipboard-list"></i>
                    Admin
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link">
                    <i className="fas fa-clipboard-list"></i>
                    ******************************************
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => navigate("/caregiverregister")}
                  >
                    <i className="fas fa-clipboard-list"></i>
                    Provider Register CareGiver
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => navigate("/referral-code-validation")}
                  >
                    <i className="fas fa-clipboard-list"></i>
                    Login with RefCode
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => navigate("/baseline-questionnaire-f1")}
                  >
                    <i className="fas fa-clipboard-list"></i>
                    Baseline Questionnaire
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => navigate("/registration")}
                  >
                    <i className="fas fa-clipboard-list"></i>
                    Complete Registration
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
              <span className="icon">
                <img src={beginImg} alt="Where to Begin" />
                <p>My Profile</p>
              </span>
              <span className="icon" onClick={myPriorityNeed}>
                <img src={handbookImg} alt="Caregiver's Handbook" />
                <p>My Priority Needs Area</p>
              </span>
              <span
                className="icon"
                onClick={() => navigate("/need-assessment")}
              >
                <img src={supportImg} alt="Support Groups" />
                <p>My Task List</p>
              </span>
              <span className="icon">
                <img src={workshopImg} alt="Workshops" />
                <p>My Goals</p>
              </span>
              <span className="icon" onClick={() => navigate("/quicktips")}>
                <img src={governmentImg} alt="Government Programs" />
                <p>My Quick Tips</p>
              </span>
              <span className="icon">
                <img src={adultcareImg} alt="Transitions in Adult Care" />
                <p>My Bookmarks</p>
              </span>
              <span className="icon">
                <img src={lifecareImg} alt="Palliative and End Of Life Care" />
                <p>Voluntary Withdrawal</p>
              </span>
              <span className="icon">
                <img src={formImg} alt="Referral Form" />
                <p>Feedback</p>
              </span>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
