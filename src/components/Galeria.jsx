import { useEffect, useState } from "react";
import "../Gallery.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true); // loader inicial
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
{/*"http://localhost:3000/api/gallery" para probar
    https://mi-galeria-back.vercel.app/api/gallery  para el back real*/}

  useEffect(() => {
    fetch("https://mi-galeria-back.vercel.app/api/gallery")
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        if (data.length === 0) setLoading(false); // si no hay fotos
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleImageLoad = () => {
    setImagesLoadedCount(prev => prev + 1);
  };

  // Cuando todas las imágenes han cargado, ocultamos el loader
  useEffect(() => {
    if (imagesLoadedCount === photos.length && photos.length > 0) {
      setLoading(false);
    }
  }, [imagesLoadedCount, photos]);

  return (
    <main style={{ padding: 20 }}>
      <h1>Galería</h1>

      {/* Loader */}
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Cargando galería...</p>
        </div>
      )}

      <div
        className="gallery"
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease" }}
      >
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.url}
            loading="lazy"
            alt=""
            style={{ width: "100%", borderRadius: 6 }}
            onLoad={handleImageLoad}
            onError={handleImageLoad} // cuenta errores también
          />
        ))}
      </div>
    </main>
  );
}