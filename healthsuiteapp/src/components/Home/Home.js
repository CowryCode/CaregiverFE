import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaBars } from 'react-icons/fa'; // Importing the FaBars icon
import beginImg from '../../assets/begin.png';
import handbookImg from '../../assets/handbook.png';
import supportImg from '../../assets/support.png';
import workshopImg from '../../assets/workshop.png';
import governmentImg from '../../assets/government.png';
import adultcareImg from '../../assets/adultcare.png';
import lifecareImg from '../../assets/lifecare.png';
import formImg from '../../assets/form.png';

const Home = () => {
    const navigate = useNavigate();

    const handleSidebarToggle = () => {
        document.getElementById('sidebar').classList.toggle('active');
    };

    const handleLibraryClick = () => {
        const data = [3, 2, 4, 5, 1]; // Static array for development purposes
        if (data.length > 0) {
            //const firstTopic = data[0];
            const firstTopic = 1;
            
            navigate(`/library/core-topic${firstTopic}`);
        }
    };

    return (
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
                                <span className="nav-link">
                                    <i className="fas fa-user"></i>
                                    My Profile
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={handleLibraryClick}>
                                    <i className="fas fa-file-alt"></i>
                                    Library
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    <i className="fas fa-sign-out-alt"></i>
                                    Voluntary Withdrawal
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    <i className="fas fa-comments"></i>
                                    Feedback
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    <i className="fas fa-envelope"></i>
                                    Contact Us
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => navigate('/Form1')}>
                                    <i className="fas fa-clipboard-list"></i>
                                    Forms
                                </span>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <button id="sidebarToggle" className="btn btn-primary d-md-none" type="button" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation" onClick={handleSidebarToggle}>
                        <FaBars /> {/* Using the FaBars icon */}
                    </button>
                    <hr className="blue-line" />
                    <header>
                        <h1>Caregivers HealthenSuite App</h1>
                        <p>for friends & family giving care</p>
                    </header>
                    <hr className="blue-line" />
                    <div className="icon-container">
                        <span className="icon">
                            <img src={beginImg} alt="Where to Begin" />
                            <p>Where to Begin</p>
                        </span>
                        <span className="icon">
                            <img src={handbookImg} alt="Caregiver's Handbook" />
                            <p>Caregiver's Handbook</p>
                        </span>
                        <span className="icon">
                            <img src={supportImg} alt="Support Groups" />
                            <p>Support Groups</p>
                        </span>
                        <span className="icon">
                            <img src={workshopImg} alt="Workshops" />
                            <p>Workshops</p>
                        </span>
                        <span className="icon">
                            <img src={governmentImg} alt="Government Programs" />
                            <p>Government Programs</p>
                        </span>
                        <span className="icon">
                            <img src={adultcareImg} alt="Transitions in Adult Care" />
                            <p>Transitions in Adult Care</p>
                        </span>
                        <span className="icon">
                            <img src={lifecareImg} alt="Palliative and End Of Life Care" />
                            <p>Palliative and End Of Life Care</p>
                        </span>
                        <span className="icon">
                            <img src={formImg} alt="Referral Form" />
                            <p>Referral Form</p>
                        </span>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
