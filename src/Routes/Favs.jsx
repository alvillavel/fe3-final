import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((fav) => (
            <div key={fav.id} className="card">
              <img src="/images/doctor.jpg" alt="Doctor" className="card-image" />
              <h3>{fav.name}</h3>
              <p>{fav.username}</p>
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
