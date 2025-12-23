import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../Footer.css";

export default function Footer({ openGalleryModal }){
  return (
    <footer className="footer">
      <div className="footer-content">

      


   {/* Enlaces */}
        <div className="footer-section enlaces">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            
<li>
  <a
    href="/fotos"
    onClick={(e) => {
      e.preventDefault();
      openGalleryModal();
    }}
  >
    Galería
  </a>
</li>





            <li><a href="#Faq">Preguntas Frecuentes</a></li>
            
          </ul>
        </div>


          {/* Contacto */}
        <div className="footer-section redes">
       

          <div className="social-icons">
            <a
              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/tu_numero"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:tuemail@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>


   {/* Ubicación */}
        <div className="footer-section ubicacion">
         {/* <h4>Ubicación</h4>*/}

          <a
            href="https://www.google.com/maps?q=-34.7609,-58.3976"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <iframe
              src="https://www.google.com/maps?q=-34.7609,-58.3976&z=15&output=embed"
              loading="lazy"
              title="Ubicación Lomas de Zamora"
            />
          </a>

          <p>Lomas de Zamora, Buenos Aires</p>
        </div>

    


      </div>

      
     

      <div className="footer-bottom">
        <p>© 2025 Look Producciones. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
