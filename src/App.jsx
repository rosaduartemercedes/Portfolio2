import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/Faq";
import WhatsAppButton from "./components/WhatsAppButton";
import GalleryModal from "./components/GalleryModal";
import LandingVideo from "./components/LandingVideo";
import BodasPage from "./components/BodasPage";
import ModaPage from "./components/ModaPage";
import CumplePage from "./components/CumplePage";
import Galeria from "./components/Galeria";



// import Videos from "./components/Videos"; // si después lo agregás

import "./App.css";

function App() {
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar openGalleryModal={() => setGalleryModalOpen(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                <HeroVideo />
                <Carousel openGalleryModal={() => setGalleryModalOpen(true)} />
                <ContactSection />
                <FAQSection />
              </main>
            }
          />
          <Route path="/videos" element={<LandingVideo />} />
          <Route path="/bodas" element={<BodasPage />} />
          <Route path="/moda" element={<ModaPage />} />
          <Route path="/cumple" element={<CumplePage />} />
          <Route path="/fotos" element={<Galeria />} />
          {/* <Route path="/videos" element={<Videos />} /> */}
        </Routes>

        <Footer openGalleryModal={() => setGalleryModalOpen(true)} />

        <WhatsAppButton />

        <GalleryModal
          open={galleryModalOpen}
          onClose={() => setGalleryModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
