export default function Location() {
  return (
    <div id="location" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-400">
          Nuestra Ubicación
        </h2>
        <div className="flex justify-center">
          <iframe
            className="rounded-xl max-md:mx-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.9905136992566!2d-103.43542032577365!3d20.58844500275807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad72f2d76ee7%3A0x9a705e4be5d29dfc!2sEstructuras%20y%20Proyectos%20de%20Jalisco!5e0!3m2!1ses-419!2smx!4v1728837194910!5m2!1ses-419!2smx"
            width="900"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
