import React from "react";

export default function Valores() {
  return (
    <section id="valores" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-400 mb-10 mt-20">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-naranja mb-4">
              Honestidad
            </h3>
            <p className="text-gray-400">
              Se promueve la verdad como una herramienta elemental para generar
              confianza y la credibilidad de la empresa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-naranja mb-4">
              Compromiso
            </h3>
            <p className="text-gray-400">
              Hace referencia a la coherencia que deben tener los empleadores
              para con sus trabajadores y viceversa, como de la empresa con los
              clientes. En caso de haber compromisos deben ser cumplidos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-naranja mb-4">
              Libertad
            </h3>
            <p className="text-gray-400">
              Se busca que tanto los empleados como los clientes puedan
              expresarse con total seguridad en caso de tener creencias u
              opiniones distintas, siempre que sean presentadas con respeto y
              cordialidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-naranja mb-4">
              Responsabilidad
            </h3>
            <p className="text-gray-400">
              La empresa se compromete a la estabilidad y buenas condiciones
              laborales para los trabajadores, y a entregar bienes y servicios
              de calidad a los clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-naranja mb-4">
              Trabajo en equipo
            </h3>
            <p className="text-gray-400">
              Se promueve la integración de cada uno de los miembros de la
              empresa al grupo laboral, generando mejores resultados gracias a
              un ambiente positivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
