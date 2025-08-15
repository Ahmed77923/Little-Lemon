// src/components/CustomersSay.jsx
import TestimonialCard from "./TestimonialCard";
import testimonials from "./testimonials";
import "./CustomersSay.css";

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <h2>ماذا يقول عملاؤنا 💬</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;
