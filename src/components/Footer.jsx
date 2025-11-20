import { useRef, useState, useEffect } from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Redes sociales */}
        <div className="footer-section redes">
          <h4>Contacto</h4>
          <div className="social-icons">
            <a href="https://instagram.com/tuusuario" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me/tu_numero" target="_blank" rel="noreferrer">Whatsapp</a>
            <a href="mailto:tuemail@gmail.com">Gmail</a>
          </div>
        </div>

        {/* Ubicación */}
        <div className="footer-section ubicacion">
          <h4>Ubicación</h4>
          <p>Buenos Aires, Argentina</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-section enlaces">
          
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#galeria">Galería</a></li>
            
          </ul>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="footer-bottom">
        <p>© 2025 Look Producciones. Todos los derechos reservados. </p>
      </div>
    </footer>
  );
}