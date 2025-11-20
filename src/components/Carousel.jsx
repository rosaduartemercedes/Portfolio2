
import { useState, useEffect } from "react";
import "../Carousel.css";
import cameraIcon from "../assets/camara.png";
import { Link } from "react-router-dom";

export default function Carousel() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-wrapper">
      <div className="text-box-carousel">
        <h2>Fotografía</h2>
        <p>Cobertura de books de moda, eventos sociales y empresariales. </p>
          <Link to="/fotos" className="gallery-btn">
    <img src={cameraIcon} alt="camera" className="camera-icon" /> Abrir galería
  </Link>
      </div>

      <div className="carousel-container">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`carousel-image ${i === index ? "active" : ""}`}
            onError={(e) => (e.target.style.display = "none")} // oculta si la imagen no carga
          />
        ))}
      </div>
    </div>
  );
}