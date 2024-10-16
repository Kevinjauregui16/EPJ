export default function Projects() {
  return (
    <div id="projects" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-400">
          Algunos de Nuestros Trabajos
        </h2>
        <div className="grid grid-cols-1 gap-8 mx-4 md:grid-cols-3">
          <img
            src="/src/assets/imagen-1.jpg"
            alt="Proyecto 1"
            className="w-full h-60 rounded-xl"
          />
          {/* <img
            src="/src/assets/imagen-2.jpg"
            alt="Proyecto 2"
            className="w-full h-auto rounded-xl"
          /> */}
          <img
            src="/src/assets/imagen-3.jpg"
            alt="Proyecto 3"
            className="w-full h-60 rounded-xl"
          />
          <img
            src="/src/assets/imagen-4.jpg"
            alt="Proyecto 4"
            className="w-full h-60 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
