// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Little Lemon 🍋</h3>
        <p>Best Mediterranean food in Chicago.</p>
      </div>
      <div className="footer-section">
        <h4>Pages</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/CustomersSay">CustomersSay</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    </footer>
  );
}

export default Footer;
