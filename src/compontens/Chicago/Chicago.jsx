// src/components/Chicago.jsx
import React from "react";
import "./Chicago.css"; // لو حاب تفصل التنسيق
import img5 from "../../asses/images/prodect-2.jpg";
const Chicago = () => {
  return (
    <div className="conterchicago">
      <section className="chicago">
        <div className="chicago-text">
          <h2>Little Lemon - Chicago</h2>
          <p>
            Welcome to Little Lemon in the heart of Chicago! 🍋
            <br />A family-owned Mediterranean restaurant, focused on
            traditional flavors with a modern twist. Come enjoy a cozy
            atmosphere and our signature lemony magic.
          </p>
        </div>
        <div className="chicago-image">
          <img src={img5} alt="Little Lemon restaurant" />
        </div>
      </section>
    </div>
  );
};

export default Chicago;
