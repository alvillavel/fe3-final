import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme === "dark" ? "dark-theme" : ""}>
      <div className="footer-content">
        <div className="footer-powered">Powered by</div>
        <img src="/DH.ico" alt="DH Logo" className="footer-icon" />
      </div>
    </footer>
  );
};

export default Footer;




