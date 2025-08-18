import React, { useState } from "react";
import './Navbar.css';
import logo from './../../asses/images/logo.jpg'; // Fixed typo: asses -> assets
import { Link } from "react-router-dom";

// Icon components to replace react-icons
const BicycleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 20.5A3.5 3.5 0 0 1 1.5 17A3.5 3.5 0 0 1 5 13.5a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 5 20.5M5 12a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m14.8 8.5A3.5 3.5 0 0 1 16.3 17a3.5 3.5 0 0 1 3.5-3.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m0-8.5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5M12 6.5l2.9 7.4l2.1-2.1l-2.7-6.8H16L18 8h2l-3-8h-7L8.5 8H10l1.5-4h2L12 6.5z"/>
  </svg>
);

const ShuffleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.83 13.41L13.42 14.82L16.55 17.95H14V19.95H20V14H18V16.54L14.83 13.41M14.83 10.58L18 7.41V10H20V4H14V6H16.54L13.41 9.13L14.83 10.58M12 7.77L8.21 11.56L6.8 10.15L10.58 6.36L12 7.77M12 16.22L10.59 17.64L6.8 13.85L8.21 12.43L12 16.22Z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-placeholder">
          <img 
            src={logo} 
            alt="Company Logo" 
            style={{ width: "150px", height: "50px", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
        <li>
          <Link className="a" to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link  className="a" to="/booking" onClick={handleLinkClick}>
            Booking
          </Link>
        </li>
        <li>
          <Link className="a" to="/CustomersSay" onClick={handleLinkClick}>
            Customers Say
          </Link>
        </li>
        <li>
          <Link className="a" to="/chicago" onClick={handleLinkClick}>
            chicago
          </Link>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="nav-icons">
        <div className="icon-wrapper">
          <BicycleIcon />
        </div>
        <div className="icon-wrapper">
          <ShuffleIcon />
        </div>
        <div 
          className="icon-wrapper menu-toggle"
          onClick={toggleMenu}
          role="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMenu();
            }
          }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}