import React from "react";
//import "../Galeria.css"; // mismo CSS que usamos para BodasPage y ModaPage

export default function CumplePage() {
  const cumpleVideos = [
    {
      src: "/videos/cumple.mp4",
      title: "Cumple en Mendoza",
      poster: "/videos/placeholder.jpg", // poster de placeholder
    },
    {
      src: "/videos/cumple2.mp4",
      title: "Cumple en Salta",
      poster: "/videos/placeholder.jpg",
    },
    {
      src: "/videos/cumple3.mp4",
      title: "Cumple en Buenos Aires",
      poster: "/videos/placeholder.jpg",
    },
    {
      src: "/videos/cumple4.mp4",
      title: "Cumple en Córdoba",
      poster: "/videos/placeholder.jpg",
    },
  ];

  return (
    <div className="galeria-container">
      <h1>Cumpleaños</h1>
      <p>Algunos de nuestros trabajos en cobertura de cumpleaños.</p>

      <div className="videos-grid">
        {cumpleVideos.map((video, index) => (
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