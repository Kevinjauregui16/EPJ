import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-8 text-white bg-naranja text-lg">
      <div className="container px-4 mx-auto">
        {/* Links de navegación */}
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <ul>
              <li>
                <Link
                  to="/history"
                  className="relative font-medium text-white hover:text-blue-500 transition-colors group"
                >
                  Nuestra historia
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/misionVision"
                  className="relative font-medium text-white hover:text-blue-500 transition-colors group"
                >
                  Misión y visión
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              {/* <li>
                <a
                  href="#services"
                  className="relative font-medium text-white hover:text-blue-500 transition-colors group"
                >
                  Nuestro equipo
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="relative font-medium text-white hover:text-blue-500 transition-colors group"
                >
                  Galería
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="mb-4">
            <h5 className="mb-2 font-bold uppercase">Síguenos</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.67,12A10.67,10.67,0,1,0,11.24,22.67v-8H8.44V12h2.8V9.61c0-2.77,1.64-4.28,4.15-4.28a16.85,16.85,0,0,1,2.5.22V8.4h-1.41a1.61,1.61,0,0,0-1.81,1.74V12h3.08l-.49,2.67H14.68v8A10.67,10.67,0,0,0,22.67,12Z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.46,6A8.2,8.2,0,0,1,20,6.77a4.15,4.15,0,0,0,1.81-2.3,8.3,8.3,0,0,1-2.63,1A4.14,4.14,0,0,0,11.5,8.66a11.71,11.71,0,0,1-8.5-4.3,4.13,4.13,0,0,0,1.28,5.53A4.09,4.09,0,0,1,2.8,9.38v.05a4.14,4.14,0,0,0,3.32,4.06,4.15,4.15,0,0,1-1.87.07,4.14,4.14,0,0,0,3.86,2.87,8.29,8.29,0,0,1-5.12,1.76A8.36,8.36,0,0,1,2,18.55a11.67,11.67,0,0,0,6.29,1.84A11.7,11.7,0,0,0,20,8.61c0-.18,0-.36,0-.54A8.28,8.28,0,0,0,22.46,6Z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12,2.16A9.84,9.84,0,1,0,21.84,12,9.84,9.84,0,0,0,12,2.16Zm0,2.4a2.73,2.73,0,1,1-2.73,2.73A2.73,2.73,0,0,1,12,4.56ZM12,19.6A7.6,7.6,0,0,1,4.4,12a7.61,7.61,0,0,1,1.29-4.18H5.9v2.54a4.29,4.29,0,0,0,8.57,0V7.77h.22A7.6,7.6,0,0,1,12,19.6Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-8 text-center text-white text-sm">
          <p>
            © 2024 Estructuras y Proyectos de Jalisco S.A. DE C.V. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
