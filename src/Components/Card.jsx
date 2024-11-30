import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const navigate = useNavigate();

  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!existingFavs.find((fav) => fav.id === id)) {
      const newFav = { id, name, username };
      localStorage.setItem("favorites", JSON.stringify([...existingFavs, newFav]));
      alert(`${name} ha sido añadido a favoritos`);
    } else {
      alert(`${name} ya está en favoritos`);
    }
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <button onClick={addFav} className="favButton">Add Fav</button>
      <button onClick={() => navigate(`/dentist/${id}`)}>View Details</button>
    </div>
  );
};

export default Card;
  
