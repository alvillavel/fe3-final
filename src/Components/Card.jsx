import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context"; // Ruta original del contexto global

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
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <button onClick={addFav} className="favButton">Add Fav</button>
      {/* Usamos un enlace para navegar al detalle del dentista */}
      <Link to={`/dentist/${id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default Card;




