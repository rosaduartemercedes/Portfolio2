import { useEffect, useState } from "react";
import "../LandingVideo.css";
import card1 from "../assets/Icono1.png";
import card2 from "../assets/Icono2.png";
import card3 from "../assets/Icono3.png";

export default function LandingVideo() {
  const [videosAll, setVideosAll] = useState([]);
  const [videos, setVideos] = useState([]);
  const [eventoActivo, setEventoActivo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingEvento, setLoadingEvento] = useState(false);

  /* =========================
     1️⃣ CARGA INICIAL (TODOS)
  ========================== */
  useEffect(() => {
    fetch("https://mi-galeria-back.vercel.app/api/videos/landing")
      .then((res) => res.json())
      .then((data) => {
        setVideosAll(data);
        setVideos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando videos:", err);
        setLoading(false);
      });
  }, []);

  /* =========================
     2️⃣ CARGA POR EVENTO
  ========================== */
  useEffect(() => {
    if (!eventoActivo) {
      setVideos(videosAll);
      return;
    }

    setLoadingEvento(true);

    fetch(
      `https://mi-galeria-back.vercel.app/api/videos/${eventoActivo}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLoadingEvento(false);
      })
      .catch((err) => {
        console.error("Error cargando videos por evento:", err);
        setLoadingEvento(false);
      });
  }, [eventoActivo, videosAll]);

  /* =========================
     3️⃣ SCROLL AUTOMÁTICO
  ========================== */
  useEffect(() => {
    if (videos.length > 0) {
      setTimeout(() => {
        document
          .getElementById("videos")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [videos]);

  /* =========================
     4️⃣ ESTADOS GLOBALES
  ========================== */
  if (loading) {
    return <p className="loading">Cargando videos…</p>;
  }

  return (
    <section className="galeria-container-landing">
      {/* ⬆️ BLOQUE SUPERIOR */}
      <div className="landing-top">
        <header className="galeria-header-landing">
          <h1>Videos</h1>
          <p>Algunos cortos de nuestros trabajos.</p>
        </header>

        <div className="text-box-video-landing">
          <p>Selecciona el evento que prefieras y mira los videos.</p>

          <div className="cards-container-video-landing">
         <button
  className={`small-card-video-landing ${
    eventoActivo === "boda" ? "active" : ""
  }`}
  onClick={() => setEventoActivo("boda")}
>
  <img src={card1} alt="Bodas" />
  <h4>Bodas</h4>
</button>

            <button
              className={`small-card-video-landing ${
                eventoActivo === "moda" ? "active" : ""
              }`}
              onClick={() => setEventoActivo("moda")}
            >
              <img src={card2} alt="Backstages" />
              <h4>Backstages</h4>
            </button>

            <button
              className={`small-card-video-landing ${
                eventoActivo === "cumple" ? "active" : ""
              }`}
              onClick={() => setEventoActivo("cumple")}
            >
              <img src={card3} alt="Cumpleaños" />
              <h4>Cumpleaños</h4>
            </button>
          </div>
        </div>
      </div>

      {/* ⬇️ VIDEOS */}
      <div className="videos-grid" id="videos">
        {loadingEvento && <p>Cargando evento…</p>}

        {!loadingEvento &&
          videos.map((video) => (
            <div className="video-card" key={video.id}>
              <video
                src={video.src}
                poster={video.poster}
                preload="metadata"
                controls
                className="video-item"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
