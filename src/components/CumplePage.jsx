import { useEffect, useState } from "react";
import "../../src/GaleriaVideos.css";

export default function CumplePage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://mi-galeria-back.vercel.app/api/videos/cumple")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setVideos(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error cargando videos:", err);
      setLoading(false);
    });
}, []);

  if (loading) {
    return <p className="loading">Cargando videos…</p>;
  }

  return (
    <section className="galeria-container">
      <header className="galeria-header">
        <h1>Cumpleaños</h1>
        <p>Algunos de nuestros trabajos en cobertura de cumpleaños.</p>
      </header>

      <div className="videos-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <video
              src={video.src}       // usar src que devuelve tu backend
              poster={video.poster} // usar poster que devuelve tu backend
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
