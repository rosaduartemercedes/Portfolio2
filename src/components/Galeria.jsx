import { useEffect, useState } from "react";
import "../Gallery.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetch("https://mi-galeria-back.vercel.app/api/gallery")
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        if (data.length === 0) setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleImageLoad = () => {
    setImagesLoadedCount(prev => prev + 1);
  };

  useEffect(() => {
    if (imagesLoadedCount === photos.length && photos.length > 0) {
      setLoading(false);
    }
  }, [imagesLoadedCount, photos]);





  useEffect(() => {
  if (selectedIndex === null) return;

  const handleKey = (e) => {
    if (e.key === "Escape") setSelectedIndex(null);
    if (e.key === "ArrowRight")
      setSelectedIndex((i) => (i + 1) % photos.length);
    if (e.key === "ArrowLeft")
      setSelectedIndex((i) => (i - 1 + photos.length) % photos.length);
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [selectedIndex, photos.length]);



useEffect(() => {
  if (!loading) {
    window.scrollTo(0, 0);
  }
}, [loading]);


  return (
    <main className="gallery-page">

      {/*<h1>Galería</h1>*/}

      {/* Loader */}
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Cargando galería...</p>
        </div>
      )}




      

      {/* Galería */}
      <div
        className="gallery"
        style={{ opacity: loading ? 0 : 1, transition: "opacity 0.5s ease" }}
      >
        {photos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.url}
            alt=""
            loading="lazy"
            className="gallery-img"
            onClick={() => setSelectedIndex(index)}
            onLoad={handleImageLoad}
            onError={handleImageLoad}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <button className="close" onClick={() => setSelectedIndex(null)}>
            ✕
          </button>

          <button
            className="nav left"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                (selectedIndex - 1 + photos.length) % photos.length
              );
            }}
          >
            ‹
          </button>

          <img
            src={photos[selectedIndex].url}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="nav right"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                (selectedIndex + 1) % photos.length
              );
            }}
          >
            ›
          </button>

          {/*<div className="counter">
            {selectedIndex + 1} / {photos.length}
          </div>*/}
        </div>
      )}
    </main>
  );
}
