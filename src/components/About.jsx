import { useRef, useState, useEffect } from "react";
import "../About.css";

export default function AboutUs() {
     const Equipo1 = ["/equipo1.png"]

const Sony = ["/Sonya7iv.jpg"]

const Equipo2 = ["/equipo2.png"]

const Vicky = "/VickyPerfil.png";

const Rami = "/RamiPerfil.png";


return (
    <section id="inicio" className="w-full px-6 py-16 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Sobre Nosotros</h2>
          <p className="text-lg leading-relaxed">
            Somos una productora audiovisual especializada en filmmaking, fotografía,
            edición de video, sonido, mezcla y mastering. Combinamos creatividad con
            tecnología de última generación para ofrecer contenido profesional,
            dinámico y adaptado a las necesidades de cada cliente.
          </p>

          <p className="text-lg leading-relaxed">
            Trabajamos con equipos Sony, iluminación profesional y un workflow
            optimizado que nos permite entregar resultados de alta calidad en tiempos
            reducidos. Nuestra misión es contar historias que conecten y generar
            material visual que destaque.
          </p>
        </div>

       <div className="contenedor-imagenes">
  <img src={Equipo1} alt="Equipo de producción trabajando" className="img" />
  <img src={Equipo2} alt="Equipo2 de producción trabajando" className="img" />
  <img src={Sony} alt="Sony camara usada para trabajar" className="img" />
</div>

      </div>

      {/* SECCIÓN NUESTRO EQUIPO */}
      <div className="w-full mt-20">
        <h3 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h3>

        <div className="flex-perfiles">
          <div className="text-center">
            <h4 className="text-2xl font-semibold">Videógrafo</h4>
            
            
            <img
              src={Rami}
              alt="Videógrafo del equipo"
              className="Fotoperfil1"
            />
            
            <p className="text-gray-700 text-lg">
              Encargado de capturar momentos únicos con estética cinematográfica.
            </p>
          </div>

          <div className="text-center">
            
            <h4 className="text-2xl font-semibold">Fotógrafo</h4>
            
            <img
              src={Vicky}
              alt="Fotógrafo del equipo"
              className="Fotoperfil2"
            />
            
            
            <p className="text-gray-700 text-lg">
              Responsable de crear imágenes de alto impacto visual y emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}