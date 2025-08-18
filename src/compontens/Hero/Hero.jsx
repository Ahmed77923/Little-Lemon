import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import img1 from "./../../asses/images/prodect-1.jpg";
import img2 from "./../../asses/images/prodect-2.jpg";
import img3 from "./../../asses/images/prodect-4.jpg";

export default function Hero() {
  const slides = [
    {
      image: img1,
      title: "Little Lemon",
      subtitle: "Chicago",
      text: "We serve authentic Mediterranean dishes, made fresh with love and lemons 🍋.",
    },
    {
      image: img2,
      title: "Fresh & Delicious",
      subtitle: "Mediterranean Taste",
      text: "Experience the flavor of freshly made dishes with organic ingredients.",
    },
    {
      image: img3,
      title: "Reserve Your Table",
      subtitle: "Enjoy the best moments",
      text: "Book your table now and enjoy unforgettable dining moments.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="hero">
      <div className="hero-slide" style={{ backgroundImage: `url(${slides[current].image})` }}>
        <div className="hero-content">
          <p>{slides[current].title}</p>
          <p>{slides[current].subtitle}</p>
          <p>{slides[current].text}</p>
          <Link to="/booking" className="hero-button">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

