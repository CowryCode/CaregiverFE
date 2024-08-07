import React from 'react';
import './Header.css';
import logoImg from '../../assets/headerlogo.png';  // Adjust the path as necessary

const Header = () => {
  return (
    <header>
        <img src={logoImg} alt="Logo" className="logo"/>
        <div className="header-content">
            <h1>Caregivers HealthenSuite App</h1>
            <p>for friends & family giving care</p>
        </div>
    </header>
  );
}

export default Header;
