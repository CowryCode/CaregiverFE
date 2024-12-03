import React, {useState } from 'react';
import './Navigation.css';
import { FaBars } from 'react-icons/fa';
import { useNavigate} from 'react-router-dom';

function Navigation({ topics, onTopicChange, mobileOpen, setMobileOpen }) {
    const [openSubMenus, setOpenSubMenus] = useState({
        "core-topic1": false,
        "core-topic2": false,
        "core-topic3": false,
        "core-topic4": false,
        "core-topic5": false,
    });

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

    const submenus = {
       
           "core-topic1": [
                {title: "Start: Taking Care of Yourself (Self-care)", path: "/library/core-topic1/"},
                {title: "Level 1: Taking a Break from Caregiving", path: "/library/core-topic1/level1"},
                {title: "Level 2: Physical Well-Being", path: "/library/core-topic1/level2"},
                {title: "Level 3: Emotional Well-being", path: "/library/core-topic1/level3"},
                {title: "Level 4: Social Well-Being", path: "/library/core-topic1/level4"}
            ],   
           "core-topic2":  [
                {title: "Start: Support for You", path: "/library/core-topic1/"},
                {title: "Level 1: Accessing Formal Care Providers", path: "/library/core-topic2/level1"},
                {title: "Level 2: Support Networks", path: "/library/core-topic2/level2"},
                {title: "Level 3: Asking Family and Friends for Support", path: "/library/core-topic2/level3"},
            ],     
           "core-topic3":  [
                {title: "Start: Supporting the Person Living with Dementia", path: "/library/core-topic3/"},
                {title: "Level 1: Your Living Situation", path: "/library/core-topic3/level1"},
                {title: "Level 2: Your Living Situation", path: "/library/core-topic3/level2"},
            ],   
           "core-topic4": [
                {title: "Start: Communication", path: "/library/core-topic4/"},
                {title: "Level 1: Asking for Help", path: "/library/core-topic4/level1"},
                {title: "Level 2: Communicating with Persons Living with Dementia", path: "/library/core-topic4/level2"},
                {title: "Level 3: Communicating With Formal Care Providers", path: "/library/core-topic4/level3"},
                {title: "Level 4: Communicating with Physicians", path: "/library/core-topic4/level4"}
            ],
           "core-topic5": [
                {title: "Start: Time Management", path: "/library/core-topic5/"},
                {title: "Level 1: Commitments", path: "/library/core-topic5/level1"},
                {title: "Level 2: Time Management Strategies", path: "/library/core-topic5/level2"},
            ],         
    }

    const toggleMenu = (path) => {
        setOpenSubMenus((prev) => ({
          ...prev,
          [path]: !prev[path],
        }));
    };

    const handleSubMenuClick = (path) => {
       console.log(`Clicked ${path}`);
       navigate(`${path}`); 
    };

    return (
        <div>
            <button id="coreSidebarToggle" className="btn btn-primary" type="button" onClick={handleDrawerToggle}>
                <FaBars color={mobileOpen ? 'white' : '#343a40'} />
            </button>
            {/* <nav id="coreSidebar" className={`core-sidebar ${mobileOpen ? 'active' : ''}`}>
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
            </nav> */}
             <nav id="coreSidebar" className={`core-sidebar ${mobileOpen ? 'active' : ''}`}>
                <div className="core-sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                                {/* <span className="nav-link" onClick={home}> */}
                                <span className="nav-link" onClick={() => toggleMenu('home1')}>
                                    Home
                                </span>
                                {/* {openSubMenus.home1 && (
                                <ul className="sub-nav">
                                    {subs[0].map(({title, path}, index) => (
                                    <li className="sub-nav-item" key={index}>
                                        <span className="nav-link" onClick={() => handleSubMenuClick(path)}>
                                            {title}
                                        </span>
                                    </li>
                                     ))}
                                </ul>
                                )} */}
                        </li>
                        {/* {topics.map((topic, index) => (
                            <li className="nav-item" key={index}>
                                <span className="nav-link" onClick={() => handleTopicClick(index)}>
                                    {topic}
                                </span>
                            </li>
                        ))} */}
                        {topics.map(({ title, path }, index) => (
                        <li className="nav-item" key={index}>
                            <span className="nav-link" onClick={() => toggleMenu(path)}>
                            {title} {path} submenus
                            </span>
                            {openSubMenus[path] && (
                                <ul className="sub-nav">
                                    {submenus[path].map(({ title: subTitle, path: subPath }, subIndex) => (
                                    <li className="sub-nav-item" key={subIndex}>
                                        <span className="nav-link" onClick={() => handleSubMenuClick(subPath)}>
                                            {subTitle}
                                        </span>
                                    </li>
                                     ))}
                                </ul>
                                )}
                        </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>




    );
}

export default Navigation;
