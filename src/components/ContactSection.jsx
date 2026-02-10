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
          <h2> Hablemos de tu proyecto  </h2> 

          <p>
            Sacate las dudas y contanos tu idea. Estamos acá para ayudarte a crear contenido visual
            profesional de alta calidad.
            
            <br></br> <br></br>
            
             ¡Podes hacerlo atravéz de cualquiera de nuestros canales de atención!
          </p>
        </div>

        {/* ICONOS */}
        <div className="contact-links">
          
          <a
            href="https://www.instagram.com/produccioneslook/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={instagram} className="icon-img" />
            <span>@produccioneslook</span>
          </a>

          <a
            href="https://wa.me/54911XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={wsp2} className="icon-img" />
            <span> (+54) 11 2222-2222</span>
          </a>

          <a
            href="mailto:produccionesaudiovisualeslook@gmail.com"
            className="contact-item"
          >
            <img src={gmail1} className="icon-img" />
            <span> produccionesaudiovisualeslook@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
