import { useRef, useState, useEffect } from "react";
import "../WhatsAppButton.css";
import wsp from "../assets/wsp.png";

export default function WhatsAppButton() {
  const phone = "5491125589198";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
         <span className="whatsapp-tooltip">Estamos para asistirte,  <br></br> dejanos tu mensaje 👉</span>
      <div className="whatsapp-icon">
        <img src={wsp} alt="WhatsApp" />
      </div>
    </a>
  );
}