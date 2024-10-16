/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        naranja: "#FF6F20", // Color naranja
        azul: "#337AB7", // Color azul
        grisClaro: "#F2F2F2", // Color gris claro
        grisOscuro: "#4A4A4A", // Color gris oscuro
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
