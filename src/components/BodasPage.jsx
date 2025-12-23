import { useEffect, useState } from "react";
import "../../src/GaleriaVideos.css";

export default function BodasPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://mi-galeria-back.vercel.app/api/videos/boda")
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
        <h1>Bodas</h1>
        <p>Algunos cortos de nuestros trabajos en cobertura de casamientos.</p>
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
