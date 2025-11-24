import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react"; // Tetap pakai smooth scroll biar enak

// Import Section untuk Home
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Services from "./sections/Services"; // Tambahan section di home

// Import Pages Baru Kamu
import GuruPage from "./pages/GuruPage";
import WebDevPage from "./pages/WebDevPage";
import DesignPage from "./pages/DesignPage";
import ServiceSummary from "./sections/ServiceSummary";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* === HALAMAN UTAMA (LANDING) === */}
          <Route path="/" element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <ServiceSummary />
              <Services />
              <About />
              {/* Di Home, Tampilkan Mode KARTU (showCategories={true}) */}
              <Works showCategories={true} /> 
              <div className='relative z-0'>
                <Contact />
              </div>
            </div>
          } />

          {/* === HALAMAN CABANG (PAGES MURNI) === */}
          <Route path="/guru" element={<GuruPage />} />
          <Route path="/web-dev" element={<WebDevPage />} />
          <Route path="/graphic-design" element={<DesignPage />} />
          
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;