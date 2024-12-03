import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
   
      <ul className="navbar-links">
        <div className="navbar-title">
          <h1>
            <span className="red-letter">D</span>H Odonto
          </h1>
        </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favs">Favs</Link></li>
      </ul>
      {/* Imagen que alterna entre temas */}
      <img
        src="/images/dark-mode.png"
        alt="Change Theme"
        className="theme-toggle"
        onClick={toggleTheme}
      />
    </nav>
  );
};

export default Navbar;

