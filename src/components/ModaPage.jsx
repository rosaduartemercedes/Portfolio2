import React from "react";
//import "../Galeria.css"; // asegurate de tener los estilos de la galería

export default function ModaPage() {
  const modaVideos = [
    {
      src: "/videos/moda.mp4",
      title: "Book en Mendoza",
      poster: "/videos/placeholder.jpg", // poster de placeholder
    },
    {
      src: "/videos/moda2.mp4",
      title: "Book en Salta",
      poster: "/videos/placeholder.jpg",
    },
    {
      src: "/videos/moda3.mp4",
      title: "Book en Buenos Aires",
      poster: "/videos/placeholder.jpg",
    },
    {
      src: "/videos/moda4.mp4",
      title: "Book en Córdoba",
      poster: "/videos/placeholder.jpg",
    },
  ];

  return (
    <div className="galeria-container">
      <h1>Moda</h1>
      <p>Algunos de nuestros trabajos en books de moda.</p>

      <div className="videos-grid">
        {modaVideos.map((video, index) => (
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