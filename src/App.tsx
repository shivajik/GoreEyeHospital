import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctor from './pages/Doctor';
import About from './pages/About';
import Contact from './pages/Contact';
import CataractSurgery from './pages/ServiceDetail/CataractSurgery';
import LasikRefractiveSurgery from './pages/ServiceDetail/LasikRefractiveSurgery';
import RetinaServices from './pages/ServiceDetail/RetinaServices';
import GlaucomaManagement from './pages/ServiceDetail/GlaucomaManagement';
import PediatricOphthalmology from './pages/ServiceDetail/PediatricOphthalmology';
import CorneaserviceServices from './pages/ServiceDetail/CorneaserviceServices';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cataract-surgery" element={<CataractSurgery />} />
          <Route path="/services/lasik-refractive-surgery" element={<LasikRefractiveSurgery />} />
          <Route path="/services/retina-services" element={<RetinaServices />} />
          <Route path="/services/glaucoma-management" element={<GlaucomaManagement />} />
          <Route path="/services/pediatric-ophthalmology" element={<PediatricOphthalmology />} />
          <Route path="/services/cornea-services" element={<CorneaserviceServices />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
