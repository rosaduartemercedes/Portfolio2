import "../HeroVideo.css";
import card1 from "../assets/Icono1.png";
import card2 from "../assets/Icono2.png";
import card3 from "../assets/Icono3.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function HeroVideo() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollId = params.get("scroll");
    if (scrollId) {
      setTimeout(() => {
        document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location]);

  return (
    <div className="grid-container" id="inicio">
      <div className="video-box">

        <video
          src="https://res.cloudinary.com/dyddy7avc/video/upload/v1766511600/Corto_2_1_1_siaosy.mp4"
          poster="https://res.cloudinary.com/dyddy7avc/video/upload/so_0/Corto_2_1_1_siaosy.jpg"
          preload="metadata"
          controls
          playsInline
          className="video"
        />

      </div>

      <div className="text-box-video">
        <h1>VIDEO Y EDICIÓN</h1>
        <p>
          Ofrecemos una solución personalizada para cada ocasión y adaptada a tus necesidades.
        </p>

        <div className="cards-container-video">
          <Link to="/bodas" className="small-card-video">
            <img src={card1} alt="Casamientos" />
            <h4>Casamientos</h4>
          </Link>

          <Link to="/moda" className="small-card-video">
            <img src={card2} alt="Backstages" />
            <h4>Backstages</h4>
          </Link>

          <Link to="/cumple" className="small-card-video">
            <img src={card3} alt="Cumpleaños" />
            <h4>Cumpleaños</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
