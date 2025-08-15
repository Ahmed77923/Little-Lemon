// src/pages/BookingPage.jsx
import { useState } from "react";
import "./BookingPage.css"; // تقدر تكتبها بعدين

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`تم حجز طاولة لـ ${formData.name} في ${formData.date} الساعة ${formData.time}`);
  
  };

  return (
    <section className="booking-page">
      <h2>احجز طاولتك الآن 🍽️</h2>
      <form onSubmit={handleSubmit}>
        <label>
          الاسم:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          التاريخ:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          الوقت:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        <label>
          عدد الضيوف:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min="1"
            max="20"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">احجز الآن</button>
      </form>
    </section>
  );
};

export default BookingPage;
