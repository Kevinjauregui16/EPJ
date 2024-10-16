import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa las rutas
import Navbar from "../src/components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Location from "./components/Location";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction"; // Componente de la franja con el botón
import History from "./pages/History";
import MisionVision from "./pages/MisionVision";
import NuestrosTrabajos from "./pages/NuestrosTrabajos";
import Valores from "./pages/Valores";
import Galery from "./pages/Galery";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Configuración de rutas */}
        <Routes>
          {/* Ruta principal que renderiza todo en una página */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Projects />
                <CallToAction />
                <Location />
              </>
            }
          />

          {/* Ruta para la página de contacto */}
          <Route path="/nuestro-trabajo" element={<NuestrosTrabajos />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/misionVision" element={<MisionVision />} />
          <Route path="/valores" element={<Valores />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
