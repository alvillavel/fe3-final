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
      {/* Iconos de redes sociales en la misma fila */}
      <div className="footer-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-facebook.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/ico-whatsapp.png" alt="WhatsApp" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;





