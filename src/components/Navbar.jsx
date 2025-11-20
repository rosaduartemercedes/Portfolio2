/*import "../Navbar.css"; // <-- Importar CSS

export default function Navbar() {
  return (
    <nav>
      <h1>Mi Portfolio</h1>
      <ul>
        <li>Home</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}*/

import { useState, useEffect } from "react";
import "../Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicios", "galeria", "contacto"];
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

  return (
    <nav className="navbar">
      <div className="logo">Producciones Look</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#inicio"
            className={activeSection === "inicio" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}  // cierra menú al elegir link
          >
            Conócenos
          </a>
        </li>
        <li>
          <a
            href="#servicios"
            className={activeSection === "servicios" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#galeria"
            className={activeSection === "galeria" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Galería
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className={activeSection === "contacto" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
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