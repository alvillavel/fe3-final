import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((fav) => (
            <div key={fav.id} className="card">
              <h3>{fav.name}</h3>
              <p>Username: {fav.username}</p>
            </div>
          ))
        ) : (
          <p>No hay favoritos guardados.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
