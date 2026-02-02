import { useRef, useState, useEffect } from "react";

export default function NuestrasRedes() {
  return (
    <section className="w-full mt-20 mb-20 text-center">
      <h3 className="text-3xl font-bold mb-10">Nuestras Redes</h3>

      <div className="flex justify-center gap-10 flex-wrap">

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/produccioneslook/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 social-item"
        >
          <img 
            src="/instagram.png"
            alt="Instagram"
            className="w-16 h-16 object-contain"
          />
          <span className="text-lg font-medium">Instagram</span>
        </a>

        {/* YouTube */}
        <a 
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 social-item"
        >
          <img 
            src="/youtube.png"
            alt="YouTube"
            className="w-16 h-16 object-contain"
          />
          <span className="text-lg font-medium">YouTube</span>
        </a>

        {/* TikTok */}
        <a 
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 social-item"
        >
          <img 
            src="/tiktok.png"
            alt="TikTok"
            className="w-16 h-16 object-contain"
          />
          <span className="text-lg font-medium">TikTok</span>
        </a>

      </div>
    </section>
  );
}