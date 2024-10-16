import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto text-center md:text-left">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Sobre Nosotros</h2>
        <p className="mb-4 text-lg text-gray-700">
          Estructuras y Proyectos de Jalisco S.A de C.V es una empresa constructora fundada el 26 de enero de 1999 por el Sr. Rafael Cervantes Magaña y tres de sus hijos, con el objetivo de ofrecer soluciones de construcción de alta calidad y con un enfoque familiar.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Nos especializamos en la construcción de estructuras metálicas y otros proyectos de ingeniería, contando con un equipo humano altamente capacitado y comprometido con la mejora continua. Nuestra empresa está afiliada a la CMIC y se unió al Pacto Mundial de la ONU en 2015, reafirmando nuestro compromiso con la sostenibilidad y el bienestar de nuestros empleados.
        </p>
        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Misión</h3>
        <p className="mb-4 text-lg text-gray-700">
          Ofrecer servicios de construcción de alta calidad, mejorando continuamente para cumplir con las expectativas de nuestros clientes, y cuidando la integridad de nuestro personal.
        </p>
        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Visión</h3>
        <p className="mb-4 text-lg text-gray-700">
          Ser una empresa líder a nivel nacional en el ramo de la construcción, alcanzando los más altos estándares de calidad y satisfaciendo las necesidades de nuestros clientes con personal altamente calificado y los mejores materiales.
        </p>
        <h3 className="mb-4 text-2xl font-semibold text-gray-800">Valores</h3>
        <ul className="mb-4 text-lg text-gray-700 list-disc list-inside">
          <li><strong>Honestidad:</strong> Promover la verdad como base para generar confianza y credibilidad.</li>
          <li><strong>Compromiso:</strong> Cumplir con los compromisos hacia empleados y clientes.</li>
          <li><strong>Libertad:</strong> Fomentar la expresión de opiniones con respeto.</li>
          <li><strong>Responsabilidad:</strong> Garantizar estabilidad laboral y entregar servicios de calidad.</li>
          <li><strong>Trabajo en equipo:</strong> Integrar a todos los colaboradores en un ambiente positivo para lograr mejores resultados.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Poco a poco, nuestra empresa ha crecido tanto en maquinaria como en equipo humano, contando con 15 colaboradores de base y 30 personas más en el ramo de la albañilería, brindando servicios a nivel local, regional y nacional.
        </p>
      </div>
    </section>
  );
}
