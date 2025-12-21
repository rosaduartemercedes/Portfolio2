import { useState, useEffect } from "react";
import "../Carousel.css";
import cameraIcon from "../assets/camara.png";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://mi-galeria-back.vercel.app/api/carrousell")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel-wrapper">
      <div className="text-box-carousel">
        <h2>Fotografía</h2>
        <p>Cobertura de books de moda, eventos sociales y empresariales.</p>

        <Link to="/fotos" className="gallery-btn">
          <img src={cameraIcon} alt="camera" className="camera-icon" />
          Abrir galería
        </Link>
      </div>

      <div className="carousel-container">
        {images.map((img, i) => (
          <img
            key={img.id}
            src={img.src}
            alt={`Slide ${i}`}
            className={`carousel-image ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
