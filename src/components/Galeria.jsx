import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../Gallery.css";
import Masonry from "react-masonry-css";
import { ProgressBar } from "react-loader-spinner";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState(null);
  const BATCH_SIZE = 30;
  const [visiblePhotos, setVisiblePhotos] = useState([]);




  // Cargar fotos
 useEffect(() => {
  fetch("https://mi-galeria-back.vercel.app/api/gallery")
    .then(res => res.json())
    .then(data => {
      setPhotos(data);
      setVisiblePhotos(data.slice(0, BATCH_SIZE));
      setLoading(false);
    });
}, []);





useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      // Cargar más imágenes
      setVisiblePhotos(prev => {
        const nextBatch = photos.slice(prev.length, prev.length + BATCH_SIZE);
        return [...prev, ...nextBatch];
      });
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [photos]);







  const handleImageLoad = () => {
    setImagesLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoadedCount === photos.length && photos.length > 0) {
      setLoading(false);
    }
  }, [imagesLoadedCount, photos]);

  // Teclado
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, photos.length]);

  const closeLightbox = () => {
    setSelectedIndex(null);
    setPrevIndex(null);
    setSlideDirection(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSlideDirection("left");
    setPrevIndex(selectedIndex);
    const next = (selectedIndex + 1) % photos.length;
    setSelectedIndex(next);
    // Limpiar prevIndex después de la animación
    setTimeout(() => setPrevIndex(null), 400);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSlideDirection("right");
    setPrevIndex(selectedIndex);
    const prev = (selectedIndex - 1 + photos.length) % photos.length;
    setSelectedIndex(prev);
    setTimeout(() => setPrevIndex(null), 400);
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });



// Evitar scroll de fondo mientras se ve la imagen
useEffect(() => {
  if (selectedIndex !== null) {
    // Bloquear scroll
    document.body.style.overflow = "hidden";
  } else {
    // Permitir scroll nuevamente
    document.body.style.overflow = "";
  }

  // Cleanup por si el componente se desmonta
  return () => {
    document.body.style.overflow = "";
  };
}, [selectedIndex]);


const breakpointColumnsObj = {
  default: 5,
  1400: 4,
  1100: 3,
  700: 2,
  500: 2
};


  return (
    <main className="gallery-page">
   
   
   <div className="grilla2"> 
  
  <div>
<h1>Fotografía</h1>
<p>Conoce un poco más sobre nuestro trabajo. Una imagen dice mas que mil palabras...</p>
</div>

<div className="btns">
 <button className="btn-btn1">
    
¡Quiero agendar una fecha!
</button>



<button className="btn-btn3">
    
Tengo otra consulta
</button>

</div>

  </div>

   
   {loading && (
  <div className="loader-wrapper">
    <ProgressBar
      height="120"
      width="120"
      borderColor="#ddd"
      barColor="#48bf3b"
      ariaLabel="loading"
    />
    <p className="loader-text" >Cargando galería...</p>
  </div>
)}
  
 
 <Masonry
  breakpointCols={breakpointColumnsObj}
  className="masonry-grid"
  columnClassName="masonry-column"
>
  {visiblePhotos.map((photo, index) => (
    <img
      key={photo.id}
      src={photo.url}
      alt=""
      loading="lazy"
      className="gallery-img"
      onClick={() => setSelectedIndex(index)}
    />
  ))}
</Masonry>

     {selectedIndex !== null && (
  <div className="lightbox" {...swipeHandlers} onClick={closeLightbox}>
    <button
      className="close"
      onClick={(e) => {
        e.stopPropagation();
        closeLightbox();
      }}
    >
      ✕
    </button>

    <button className="nav left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
    <button className="nav right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>

    {/* Imagen anterior: solo mientras dura la animación */}
    {prevIndex !== null && (
      <img
        key={`prev-${prevIndex}`}
        src={photos[prevIndex].url}
        className={`lightbox-img exit-${slideDirection}`}
        onClick={(e) => e.stopPropagation()}
        style={{ animationFillMode: "forwards" }}
      />
    )}

    {/* Imagen actual */}
    <img
      key={`current-${selectedIndex}`}
      src={photos[selectedIndex].url}
      className={`lightbox-img enter-${slideDirection}`}
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </main>
  );
}
