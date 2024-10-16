import React from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook de navegación

export default function CallToAction() {
  const navigate = useNavigate(); // Inicializa el hook

  const handleContactClick = () => {
    navigate("/contact"); // Redirige a la página de contacto
  };

  return (
    <div className="bg-naranja py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Frase */}
        <h2 className="text-white text-2xl text-center md:text-3xl font-semibold mb-4 md:mb-0">
          Nuestro equipo está listo para ayudarte. ¡Contáctanos para más
          información
        </h2>

        {/* Botón */}
        <button
          onClick={handleContactClick}
          className="px-6 py-3 font-semibold text-naranja bg-white rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-110"
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
}
