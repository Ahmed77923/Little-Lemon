// src/components/Specials.jsx
import MenuItem from "../MenuItem/Menu";
import specials from "../Specials/Specialsdata";
import "./Specials.css"; // نكتبه بعدين

const Specials = () => {
  return (
    <section className="specials">
      <h2>العروض الخاصة لهذا الأسبوع 🍽️</h2>
      <div className="specials-grid">
        {specials.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
