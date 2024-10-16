export default function Services() {
  return (
    <section id="services" className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-400">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Servicio 1 */}
          <div className="p-6 text-center bg-white rounded-2xl shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-naranja">
              Fabricación y montaje de estructura metálica
            </h3>
            <p className="text-gray-500">
              Expertos en la fabricación y montaje de estructuras metálicas de
              alta calidad para todo tipo de proyectos.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="p-6 text-center bg-white rounded-2xl shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-naranja">
              Colocación de lámina
            </h3>
            <p className="text-gray-500">
              Soluciones para la colocación profesional de láminas en cubiertas
              y cerramientos de edificios.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="p-6 text-center bg-white rounded-2xl shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-naranja">
              Obra Civil
            </h3>
            <p className="text-gray-500">
              Servicios completos de obra civil, desde cimentaciones hasta
              acabados, con la mayor precisión y calidad.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="p-6 text-center bg-white rounded-2xl shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-naranja">
              Tanques de almacenamiento
            </h3>
            <p className="text-gray-500">
              Diseño y construcción de tanques de almacenamiento que cumplen con
              los más altos estándares de seguridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
