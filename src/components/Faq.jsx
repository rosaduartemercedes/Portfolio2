import { useState } from "react";
import "../Faq.css";

const faqs = [
  { question: "¿Qué servicios ofrecen exactamente?", answer: "Ofrecemos cobertura de eventos y books de moda, incluyendo fotografía, video y edición profesional. Entregamos el material en formato digital y, si se desea, en físico." },
  { question: "¿Cuánto tiempo antes debo reservar?", answer: "Recomendamos reservar con al menos 2-3 semanas de anticipación para asegurar disponibilidad, especialmente en fechas de alta demanda." },
  { question: "¿Trabajan con paquetes o se puede personalizar el servicio?", answer: "Ofrecemos paquetes estándar pero también adaptamos los servicios según tus necesidades específicas." },
  { question: "¿Cuánto cuesta su servicio?", answer: "Los precios dependen del tipo de evento, duración y servicios incluidos. Consultanos para un presupuesto personalizado." },
  { question: "¿Cuánto tiempo tardan en entregar el material final?", answer: "El material editado se entrega generalmente en 7-14 días hábiles, dependiendo de la complejidad del proyecto." },
  { question: "¿Pueden cubrir eventos grandes o solo pequeños?", answer: "Podemos cubrir eventos de cualquier tamaño, desde sesiones de book hasta bodas y eventos corporativos grandes." },
  { question: "¿Cómo trabajan durante la sesión o el evento?", answer: "Trabajamos de forma profesional, adaptándonos a tu estilo: espontáneo, dirigido o una combinación de ambos." },
  { question: "¿Se requiere que nosotros proporcionemos algún equipo o vestuario?", answer: "Para books de moda, recomendamos traer vestuario y accesorios. Para eventos, nosotros llevamos todo el equipo necesario." },
  { question: "¿Ofrecen edición profesional y retoques de color?", answer: "Sí, realizamos edición profesional de video, corrección de color y retoques de fotografía para un resultado de alta calidad." },
  { question: "¿Qué pasa si necesitamos cambios después de recibir el material?", answer: "Ofrecemos revisiones limitadas para asegurar tu satisfacción. Consultanos para conocer las condiciones." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Preguntas Frecuentes</h2>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>

              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
