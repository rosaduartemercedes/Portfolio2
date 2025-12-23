import { useState, useEffect } from "react";
import "../Carousel.css";
import cameraIcon from "../assets/camara.png";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

useEffect(() => {
  fetch("https://mi-galeria-back.vercel.app/api/gallery")
    .then(res => {
      console.log("Status:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("Data recibida:", data);
      setImages(data);
    })
    .catch(err => console.error("Error fetch:", err));
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
        <h1>Fotografía</h1>
        <p>Cobertura de books de moda, eventos sociales y empresariales.</p>

        <Link to="/fotos" className="gallery-btn">
          <img src={cameraIcon} alt="camera" className="camera-icon" />
          Abrir galería
        </Link>
      </div>

     <div className="carousel-container">
  {images.map((img, i) => (
    <img
       key={`${img.id}-${i}`}
      src={img.url}  // ✅ usar la propiedad correcta
      alt={`Slide ${i}`}
      className={`carousel-image ${i === index ? "active" : ""}`}
    />
  ))}
</div>
    </div>
  );
}
