export default function Galery() {
  return (
    <section className="py-8">
      <div className="container flex flex-col items-center justify-center mx-auto px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-400 mb-10 mt-20">
          Galería
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Imagen grande */}
          <div className="col-span-2 row-span-2">
            <img
              src="/src/assets/imagen-5.jpg"
              alt="Imagen Grande"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Imágenes más pequeñas */}
          <div>
            <img
              src="/src/assets/imagen-8.jpg"
              alt="Imagen"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <img
              src="/src/assets/imagen-2.jpg"
              alt="Imagen"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <img
              src="/src/assets/imagen-6.jpg"
              alt="Imagen"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <img
              src="/src/assets/imagen-4.jpg"
              alt="Imagen"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Otra imagen grande */}
          <div className="col-span-2">
            <img
              src="/src/assets/imagen-7.jpg"
              alt="Imagen"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Imágenes adicionales pequeñas */}
          <div>
            <img
              src="/src/assets/imagen-9.jpg"
              alt="Imagen"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <img
              src="/src/assets/imagen-10.jpg"
              alt="Imagen"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
