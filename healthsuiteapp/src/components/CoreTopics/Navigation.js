import React from 'react';
import './Navigation.css';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navigation({ topics, onTopicChange, mobileOpen, setMobileOpen }) {

    const navigate = useNavigate();

    const home = () => {
        navigate(`/`); 
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleTopicClick = (index) => {
        onTopicChange(index);
        setMobileOpen(false); 
    };

    return (
        <div>
            <button id="coreSidebarToggle" className="btn btn-primary" type="button" onClick={handleDrawerToggle}>
                <FaBars color={mobileOpen ? 'white' : '#343a40'} />
            </button>
            <nav id="coreSidebar" className={`core-sidebar ${mobileOpen ? 'active' : ''}`}>
                <div className="core-sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                                <span className="nav-link" onClick={home}>
                                    Home
                                </span>
                        </li>
                        {topics.map((topic, index) => (
                            <li className="nav-item" key={index}>
                                <span className="nav-link" onClick={() => handleTopicClick(index)}>
                                    {topic}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
