// src/pages/BookingPage.jsx
import { useReducer } from "react";
import "./BookingPage.css";

// Reducer function
const initialState = {
  name: "",
  date: "",
  time: "",
  guests: 1,
  loading: false,
  error: null,
  success: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT_START":
      return { ...state, loading: true, error: null, success: null };
    case "SUBMIT_SUCCESS":
      return { ...initialState, success: action.message }; // reset form
    case "SUBMIT_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default function BookingPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_START" });

    try {
      // هنا مكان API، ممكن تغيّر الرابط لو عندك API حقيقي
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          date: state.date,
          time: state.time,
          guests: state.guests,
        }),
      });

      if (!response.ok) throw new Error("فشل الحجز 😬");

      const result = await response.json();
      dispatch({ type: "SUBMIT_SUCCESS", message: `تم الحجز بنجاح! رقم الحجز: ${result.id}` });
    } catch (error) {
      dispatch({ type: "SUBMIT_ERROR", error: error.message });
    }
  };

  return (
    <section className="booking-page">
      <h2>احجز طاولتك الآن 🍽️</h2>
      <form onSubmit={handleSubmit}>
        <label>
          الاسم:
          <input type="text" name="name" value={state.name} onChange={handleChange} required />
        </label>

        <label>
          التاريخ:
          <input type="date" name="date" value={state.date} onChange={handleChange} required />
        </label>

        <label>
          الوقت:
          <input type="time" name="time" value={state.time} onChange={handleChange} required />
        </label>

        <label>
          عدد الضيوف:
          <input
            type="number"
            name="guests"
            value={state.guests}
            min="1"
            max="20"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={state.loading}>
          {state.loading ? "جارٍ الحجز..." : "احجز الآن"}
        </button>
      </form>

      {state.error && <p className="error">{state.error}</p>}
      {state.success && <p className="success">{state.success}</p>}
    </section>
  );
}
