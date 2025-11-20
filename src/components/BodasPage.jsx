import React from "react";
//import "../Galeria.css"; // vamos a crear un CSS separado para la galería

export default function BodasPage() {
  const bodasVideos = [
    {
      src: "/videos/boda1.mp4",
      title: "Boda en Mendoza",
      poster: "/videos/thumb1.jpg",
    },
    {
      src: "/videos/boda2.mp4",
      title: "Boda en Salta",
      poster: "/videos/thumb2.jpg",
    },
    {
      src: "/videos/boda3.mp4",
      title: "Boda en Buenos Aires",
      poster: "/videos/thumb3.jpg",
    },
    {
      src: "/videos/boda4.mp4",
      title: "Boda en Córdoba",
      poster: "/videos/thumb4.jpg",
    },
  ];

  return (
    <div className="galeria-container">
      <h1>Bodas</h1>
      <p>Algunos de nuestros trabajos en cobertura de bodas.</p>

      <div className="videos-grid">
        {bodasVideos.map((video, index) => (
          <div className="video-card" key={index}>
            <video
              src={video.src}
              controls
              poster={video.poster}
              className="video-item"
            />
            <h4 className="video-title">{video.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}