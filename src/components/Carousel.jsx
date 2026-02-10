import { useState, useEffect } from "react";
import "../Carousel.css";
import cameraIcon from "../assets/camara.png";
import { Link } from "react-router-dom";
import calendarIcon from "../assets/images2.png"
import { IoCameraOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";



export default function Carousel({ openGalleryModal })  {
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
        
  
        <h1>Reviví cada momento.</h1>  
        
        
        <p>Capturamos la esencia. No solo sacamos fotos; diseñamos una solución personalizada para que tus recuerdos se vean increíbles.</p>

<div className="botones">


<div className="btnsl">
       <button
  className="gallery-btn"
  onClick={openGalleryModal}
>
 {//<img src={cameraIcon} alt="camera" className="camera-icon" />
 } 


  Ver galería
</button>



 <button  className="gallery-btn2"
 
  onClick={() =>
    window.open(
      "https://wa.me/5491134567890?text=Hola!%20Quiero%20consultar%20por%20su%20agenda%20disponible.",
      "_blank"
    )
  }

 
 >
    {//<img src={calendarIcon} alt="camera" className="camera-icon" />




    } 



¡Reserva tu fecha!
</button>


</div>

</div>


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
