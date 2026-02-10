import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "../Footer.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer({ openGalleryModal }){






const [activeSection, setActiveSection] = useState("inicio");
  const navigate = useNavigate();
  const location = useLocation();

  const sections = ["inicio", "galeria", "contacto"];

  // Detectar sección activa mientras scrolleamos
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (window.scrollY >= top - 60 && window.scrollY < top + height - 60) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const scrollId = params.get("scroll");
  if (scrollId) {
    setTimeout(() => {
      const element = document.getElementById(scrollId);
      element?.scrollIntoView({ behavior: "smooth" });

      // Limpiar query param después de scrollear
      navigate("/", { replace: true });
    }, 50);
  }
}, [location]);

  // Función scroll/redirigir
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Estamos en otra ruta: vamos al home con query param
      navigate("/?scroll=" + id);
    } else {
      // Ya estamos en home: scroll directo
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };









  return (
    <footer className="footer">
      <div className="footer-content">

      


   {/* Enlaces */}
        <div className="footer-section enlaces">
          <ul>
            <li>
              
               <a
            href="#inicio"
            className={activeSection === "inicio" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inicio");
            }}
          >
              
              
              
              Servicios</a></li>
{ //           <li><a href="#servicios">Servicios</a></li>
}            
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
            <li>
              
              
               <a
            href="#Faq"
            className={activeSection === "Faq" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Faq");
            }}
          >  
                Preguntas Frecuentes</a>
              
              
              
              </li>



           
            
          </ul>
        </div>







          {/* Contacto */}
        <div className="footer-section redes">
       

          <div className="social-icons">
            <a
              href="https://www.instagram.com/produccioneslook/"
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
              href="mailto:produccionesaudiovisualeslook@gmail.com"
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
