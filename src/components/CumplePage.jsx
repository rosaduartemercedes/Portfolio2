import { useEffect, useState } from "react";
import "../../src/GaleriaVideos.css";

export default function CumplePage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/videos/cumple")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
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
              src={video.src}
              poster={video.poster}
              preload="metadata"
              className="video-item"
              controls
            />
          </div>
        ))}
      </div>
    </section>
  );
}