
import React, { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import './Header.css';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="./assets/posters/netmixlogo1.png" 
          alt="Cinema Logo"
        />
      </div>

      <div className="header__center">
        <select className="header__languageSelector">
          <option value="en">English</option>
          <option value="lt">Lietuvių</option>
          <option value="es">Español</option>
        </select>
      </div>

      <div className="header__right">
        {/* Sign-In Button */}
        <button className="header__signInButton" onClick={openModal}>
          Sign In
        </button>
      </div>

      {/* Registration Modal */}
      {isModalOpen && <RegistrationModal closeModal={closeModal} />}
    </div>
  );
}

export default Header;



// Header.js
/*
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        
        <img
          className="header__logo"
          src="./assets/posters/netmixlogo1.png" // Replace with your actual logo
          alt="Cinema Logo"
        />
      </div>

      <div className="header__center">
       
        <select className="header__languageSelector">
          <option value="en">English</option>
          <option value="lt">Lietuvių</option>
          <option value="es">Español</option>
        </select>
      </div>

      <div className="header__right">
        
        <button className="header__signInButton">Sign In</button>
      </div>
    </div>
  );
}

export default Header;

*/

// Header.js
/*
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="your-logo.png" // Replace with your actual logo
        alt="Netflix Logo"
      />

      <div className="header__nav">
        <div className="header__navItem">Home</div>
        <div className="header__navItem">TV Shows</div>
        <div className="header__navItem">Movies</div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search for movies or shows" />
        <button className="header__searchButton">Search</button>
      </div>

    </div>
  );
}

export default Header;
*/


/*
// Header.js

import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      {Your Netflix logo or branding }
      { Navigation options: Home, TV Shows, Movies, etc. }
      { User authentication and profile information }
    </div>
  );
}

export default Header;
*/
/*

// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <div className="header">
    <img
      className="header__logo"
      src='../assets/posters/netmixlogo.png' // Replace with your Netflix logo
      alt="Netflix Logo"
    />
  </div>
);

export default Header;

*/
