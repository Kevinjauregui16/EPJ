export default function Location() {
  return (
    <div id="location" className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-400">
          Nuestra Ubicación
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch">
          {/* Iframe de Google Maps */}
          <iframe
            className="rounded-2xl max-md:px-0 mb-4 md:mb-0 shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.9905136992566!2d-103.43542032577365!3d20.58844500275807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad72f2d76ee7%3A0x9a705e4be5d29dfc!2sEstructuras%20y%20Proyectos%20de%20Jalisco!5e0!3m2!1ses-419!2smx!4v1728837194910!5m2!1ses-419!2smx"
            width="100%" // Ajusta al 100% del contenedor
            height="300" // Altura ajustada para móviles
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Panel de horarios */}
          <div className="bg-white shadow-xl rounded-2xl p-4 flex items-center justify-center mx-4 max-md:mt-4">
            <div className="w-full max-w-xs">
              <h3 className="text-2xl font-bold text-gray-400 mb-4 text-center">
                Horarios
              </h3>
              <ul className="text-left text-gray-400">
                <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
                <li>Sábado: 9:00 AM - 4:00 PM</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
