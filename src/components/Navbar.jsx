import React, { useState, useEffect } from "react";
import logo from "../assets/epj.jpg"; // Ajusta la ruta según tu estructura
import { useNavigate } from "react-router-dom"; // Importa el hook de navegación
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const [visible, setVisible] = useState(true); // Estado para manejar la visibilidad de la navbar
  const navigate = useNavigate(); // Inicializa el hook

  const handleNavigateHome = () => {
    navigate("/"); // Redirige a la página de inicio
  };

  const handleNavigateContact = () => {
    navigate("/contact"); // Redirige a la página de contacto
  };

  useEffect(() => {
    let lastScrollY = window.scrollY; // Guarda la posición del scroll

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Oculta la navbar al desplazarse hacia abajo
      } else {
        setVisible(true); // Muestra la navbar al desplazarse hacia arriba
      }
      lastScrollY = currentScrollY; // Actualiza la posición del scroll
    };

    window.addEventListener("scroll", handleScroll); // Agrega el evento de scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el evento al desmontar
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 shadow-md bg-white w-[90%] md:w-[80%] mx-auto border-b-4 border-naranja rounded-b-2xl transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto max-w-screen-lg flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a onClick={handleNavigateHome}>
            <img
              src={logo}
              alt="Estructuras y Proyectos Logo"
              className="w-auto h-10"
            />
          </a>
        </div>

        {/* Links de navegación */}
        <ul className="hidden md:flex space-x-8 cursor-pointer">
          <li>
            <a
              onClick={handleNavigateHome}
              className="relative font-medium text-gray-500 hover:text-naranja transition-colors group"
            >
              Inicio
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-naranja transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          {/* <li>
            <a
              href="#services"
              className="relative font-medium text-gray-500 hover:text-naranja transition-colors group"
            >
              Servicios
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-naranja transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li> */}
          <li>
            <Link
              to="/nuestro-trabajo"
              className="relative font-medium text-gray-500 hover:text-naranja transition-colors group"
            >
              Nuestro trabajo
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-naranja transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <a
              onClick={handleNavigateContact} // Cambiamos a una función para redirigir a la página de contacto
              className="relative font-medium text-gray-500 hover:text-naranja transition-colors group"
            >
              Contacto
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-naranja transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-4 pb-4 space-y-2">
            <li>
              <a
                onClick={() => {
                  handleNavigateHome();
                  setIsOpen(false);
                }}
                className="block font-medium text-gray-600 hover:text-gray-900"
              >
                Inicio
              </a>
            </li>
            {/* <li>
              <a
                href="#services"
                className="block font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
            </li> */}
            <li>
              <Link
                to="/nuestros-trabajos"
                className="block font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Nuestro trabajo
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  handleNavigateContact();
                  setIsOpen(false);
                }}
                className="block font-medium text-gray-600 hover:text-gray-900"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
