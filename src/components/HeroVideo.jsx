import { useRef, useState, useEffect } from "react";
import "../HeroVideo.css";
import card1 from "../assets/Icono1.png";
import card2 from "../assets/Icono2.png";
import card3 from "../assets/Icono3.png";
import { Link } from "react-router-dom"; // ✅ Importar Link



export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(true);
  

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (isMuted && vol > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className="grid-container">
      <div className="video-box">
        <video ref={videoRef} autoPlay loop muted={isMuted} className="video">
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        <div className="controls">
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶️"}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolume}
            className="volume-slider"
          />
        </div>
      </div>

      <div className="text-box-video">
        <h1>Video y edición</h1>
        <p>
          Ofrecemos una solución personalizada para cada ocasión y adaptada a tus necesidades.
        </p>

      {/* 👉 TARJETAS NUEVAS */}
      <div className="cards-container-video">
        
        
        <Link to="/bodas" className="small-card-video">
          <img src={card1} alt="Card 1" />
          <h4>Casamientos</h4> </Link>
        

        
          <Link to="/moda" className="small-card-video">
          <img src={card2} alt="Card 2" />
          <h4>Moda</h4></Link>
        

        
          <Link to="/cumple" className="small-card-video">
          <img src={card3} alt="Card 3" />
          <h4>Cumpleaños</h4></Link>
        
      </div>
       </div>
    </div>
  );
}