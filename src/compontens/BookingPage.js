import { useReducer, useState } from "react";
import { updateTimes, initializeTimes, submitAPI } from "./bookingReducer";

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
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

    // لو غير التاريخ، نحدث الأوقات
    if (name === "date") {
      dispatch({ type: "UPDATE", date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = submitAPI(formData);
    if (success) {
      alert(
        `تم حجز طاولة لـ ${formData.name} (${formData.guests} ضيف) في ${formData.date} الساعة ${formData.time}`
      );
    }
  };

  return (
    <section className="booking-page">
      <h2>احجز طاولتك الآن 🍽️</h2>
      <form onSubmit={handleSubmit}>
        <label>
          الاسم:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          التاريخ:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          الوقت:
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">اختر الوقت</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
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
