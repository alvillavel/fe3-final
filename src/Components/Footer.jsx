import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context"; 

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme === "dark" ? "dark-theme" : "light-theme"}>
      <p>Powered by</p>
      <img src="./img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;


