export default function Contact() {
  return (
    <div id="contact" className="py-16 mt-32 md:mt-20">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-400">Envianos un mensaje</h2>
        <form className="max-w-md max-md:mx-4 mx-auto">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 mb-4 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full p-3 mb-4 border rounded-xl"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 mb-4 border rounded-xl"
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
