import React from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook de navegación

export default function Home() {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleContactClick = () => {
    navigate("/contact"); // Cambia "/contact" por la ruta correcta de tu página de contacto
  };

  return (
    <div className="min-h-screen relative">
      <section
        className="h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(/assets/hero.jpg)` }} // Ruta actualizada
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="mb-4 mt-14 text-4xl font-bold text-center text-white md:text-6xl">
            <span className="text-naranja text-7xl">E</span>
            structuras y <span className="text-naranja text-7xl">P</span>
            royectos de <span className="text-naranja text-7xl">J</span>
            alisco
          </h1>
          <p className="mb-8 text-lg text-center text-white md:text-xl">
            Soluciones en el diseño, fabricación y montaje de estructuras
            metálicas.
          </p>
          <button
            onClick={handleContactClick} // Cambiamos a un botón que llama a la función
            className="px-6 py-3 font-semibold text-white bg-naranja rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-110"
          >
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  );
}
