import React from 'react';
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
    const handleSidebarToggle = () => {
        document.getElementById('sidebar').classList.toggle('active');
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebar" className="col-md-3 col-lg-2 sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <i className="fas fa-home"></i>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-user"></i>
                                    My Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-file-alt"></i>
                                    Library
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-sign-out-alt"></i>
                                    Voluntary Withdrawal
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-comments"></i>
                                    Feedback
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-envelope"></i>
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../Form1">
                                    <i className="fas fa-clipboard-list"></i>
                                    Forms
                                </a>
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
                        <a href="#" className="icon">
                            <img src={beginImg} alt="Where to Begin" />
                            <p>Where to Begin</p>
                        </a>
                        <a href="#" className="icon">
                            <img src={handbookImg} alt="Caregiver's Handbook" />
                            <p>Caregiver's Handbook</p>
                        </a>
                        <a href="#" className="icon">
                            <img src={supportImg} alt="Support Groups" />
                            <p>Support Groups</p>
                        </a>
                        <a href="#" className="icon">
                            <img src={workshopImg} alt="Workshops" />
                            <p>Workshops</p>
                        </a>
                        <a href="#" className="icon">
                            <img src={governmentImg} alt="Government Programs" />
                            <p>Government Programs</p>
                        </a>
                        <a href="#" className="icon">
                            <img src={adultcareImg} alt="Transitions in Adult Care" />
                            <p>Transitions in Adult Care</p>
                        </a>
                        <a href="#" className="icon">
                            <img src={lifecareImg} alt="Palliative and End Of Life Care" />
                            <p>Palliative and End Of Life Care</p>
                        </a>
                        <a href="#" className="icon">
                            <img src={formImg} alt="Referral Form" />
                            <p>Referral Form</p>
                        </a>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
