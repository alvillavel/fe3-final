import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    dispatch({
      type: "ADD_FAV",
      payload: { id, name, username },
    });
    alert(`${name} ha sido añadido a favoritos.`);
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Doctor" className="card-image" />
      {/* Convertimos el name en un enlace */}
      <Link to={`/dentist/${id}`} className="name-link">
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <button onClick={addFav} className="favButton">Add Fav</button>
    </div>
  );
};

export default Card;





