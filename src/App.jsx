import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import AboutUs from "./components/About";
import Nuestrasredes from "./components/NuestrasRedes";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NuestrasRedes from "./components/NuestrasRedes";

import BodasPage from "./components/BodasPage";
import ModaPage from "./components/ModaPage";
import CumplePage from "./components/CumplePage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <main className="main-content">
                <HeroVideo />
                <Carousel />
                <AboutUs />
                <ContactSection />
                <FAQSection />
                <WhatsAppButton />
              </main>
            }
          />

          
          <Route path="/bodas" element={<BodasPage />} />
          {/* Páginas de videos */}
          <Route path="/moda" element={<ModaPage />} />
          <Route path="/cumple" element={<CumplePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;