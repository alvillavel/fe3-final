import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context"; // Ajusta la ruta según tu estructura

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <nav className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favs">Favs</Link></li>
      </ul>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;

