import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner"; 
import "../LandingVideo.css";
import card1 from "../assets/Icono1.png";
import card2 from "../assets/Icono2.png";
import card3 from "../assets/Icono3.png";

export default function LandingVideo() {
  const location = useLocation();
  const [videos, setVideos] = useState([]);
  const [eventoActivo, setEventoActivo] = useState(location.state?.evento ?? null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Cada vez que cambie el evento, activamos el loader

    const endpoint = eventoActivo
      ? `https://mi-galeria-back.vercel.app/api/videos/${eventoActivo}`
      : `https://mi-galeria-back.vercel.app/api/videos/landing`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLoading(false); // IMPORTANTE: Cerramos el loader aquí
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [eventoActivo]);

  return (
    <section className="galeria-container-landing">
      <div className="landing-top">
        <header className="galeria-header-landing">
          <h1>Video y edición</h1>
          <p>Algunos cortos de nuestros trabajos. <br></br>¿Consultas? ¡Escribínos! 🗓️ Agenda 2026 abierta. </p>
          
         <div className="line"> 
          <button className="video-btn1">
    
Consultános 📲
</button>

          <button className="video-btn2">
    
Reservar fecha
</button>
</div>

        </header>




        <div className="text-box-video-landing">
          <p>Selecciona el evento que prefieras y mira los videos.</p>
          <div className="cards-container-video-landing">
            <button 
              className={`small-card-video-landing ${eventoActivo === "boda" ? "active" : ""}`} 
              onClick={() => setEventoActivo("boda")}
            >
              <img src={card1} alt="Bodas" />
              <h4>Bodas</h4>
            </button>
            <button 
              className={`small-card-video-landing ${eventoActivo === "moda" ? "active" : ""}`} 
              onClick={() => setEventoActivo("moda")}
            >
              <img src={card2} alt="Backstages" />
              <h4>Backstages</h4>
            </button>
            <button 
              className={`small-card-video-landing ${eventoActivo === "cumple" ? "active" : ""}`} 
              onClick={() => setEventoActivo("cumple")}
            >
              <img src={card3} alt="Cumpleaños" />
              <h4>Cumpleaños</h4>
            </button>
          </div>
        </div>
      </div>

      <div className="videos-wrapper">
        <div className="videos-grid">
          {/* LÓGICA DE CARGA DINÁMICA */}
          {loading ? (
            <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px" }}>
              <ProgressBar
                visible={true}
                height="80"
                width="80"
                borderColor="#ddd"
                barColor="#48bf3b"
                ariaLabel="progress-bar-loading"
              />
              <p className="loader-text" style={{ color: "#000000", marginTop: "10px" }}>Cargando galería...</p>
            </div>
          ) : (
            videos.map((video) => (
              <div className="video-card" key={video.id || video._id}>
                <video 
                  src={video.src} 
                  poster={video.poster} 
                  preload="metadata" 
                  controls 
                  className="video-item" 
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}