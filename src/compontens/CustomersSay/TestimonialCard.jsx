// src/components/TestimonialCard.jsx
const TestimonialCard = ({ name, comment, rating, avatar }) => {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt={name} className="avatar" />
      <h4>{name}</h4>
      <p>{comment}</p>
      <div className="stars">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
