import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Navbar.css";


export default function Navbar({ openGalleryModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="navbar">
<div
  className="logo"
  onClick={() => scrollToSection("inicio")}
  style={{ cursor: "pointer" }}
>
  <img
    src="icono1.png"
    alt="Producciones Look"
    className="logo-img"
  />
</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#inicio"
            className={activeSection === "inicio" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inicio");
            }}
          >
            Servicios
          </a>
        </li>
       <li>
  <a
    href="/fotos"
    onClick={(e) => {
      e.preventDefault();
      openGalleryModal();
      setMenuOpen(false);
    }}
  >
    Galería
  </a>
</li>

        <li>
          <a
            href="#contacto"
            className={activeSection === "contacto" ? "active-link" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacto");
            }}
          >
            Contacto
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
            Preguntas Frecuentes
          </a>
        </li>



      </ul>

      {/* hamburguesa toggle */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
