export default function Contact() {
  return (
    <div id="contact" className="py-8 mt-32 md:mt-20">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-400">
          Envíanos un mensaje
        </h2>
        <form
          action="https://formsubmit.co/krkevinrogelio1600@gmail.com" // Reemplaza con tu dirección de correo
          method="POST"
          className="max-w-xl max-md:mx-4 mx-auto"
        >
          <input
            type="text"
            name="name" // Agrega el nombre del campo
            placeholder="Nombre"
            className="w-full p-3 mb-4 border rounded-xl"
            required
          />
          <input
            type="email"
            name="email" // Agrega el nombre del campo
            placeholder="Correo Electrónico"
            className="w-full p-3 mb-4 border rounded-xl"
            required
          />
          <input
            type="tel" // Tipo de entrada para número telefónico
            name="telephone" // Agrega el nombre del campo
            placeholder="Número de Teléfono"
            className="w-full p-3 mb-4 border rounded-xl"
            required
          />
          <textarea
            name="message" // Agrega el nombre del campo
            placeholder="Mensaje"
            className="w-full p-3 mb-4 border rounded-xl"
            required
          ></textarea>
          <button
            type="submit"
            className="w-48 py-2 font-bold text-white rounded-xl shadow-xl bg-naranja"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
