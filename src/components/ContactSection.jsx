import wsp2 from "../assets/wsp2.png";
import gmail1 from "../assets/gmail1.png";
import instagram from "../assets/instagram.png";
import "../ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* TEXTO IZQUIERDA */}
        <div id="contacto" className="contact-text">
          <h2>Hablemos de tu proyecto</h2>

          <p>
            Contanos tu idea. Estamos acá para ayudarte a crear contenido visual
            profesional de alta calidad.
          </p>
        </div>

        {/* ICONOS */}
        <div className="contact-links">
          
          <a
            href="https://instagram.com/produccionesboyer"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={instagram} className="icon-img" />
            <span>Instagram: @LookProducciones</span>
          </a>

          <a
            href="https://wa.me/54911XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={wsp2} className="icon-img" />
            <span>WhatsApp: (+54) 11 2558-9198</span>
          </a>

          <a
            href="mailto:consultas@produccionesboyer.com"
            className="contact-item"
          >
            <img src={gmail1} className="icon-img" />
            <span>Email: lookproducciones@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
