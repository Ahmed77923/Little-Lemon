// src/components/MenuItem.jsx
export default function MenuItem ({ name, description, price, image })  {
  return (
    <div className="menu-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  );
};


