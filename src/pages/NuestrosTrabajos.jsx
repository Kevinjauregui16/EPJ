import React from "react";

const trabajos = [
  {
    nombre: "Drenaje Catastro Tlaquepaque",
    descripcion:
      "Remodelación de drenaje, nodo sanitario y agua pluvial. Reforzamiento de edificio.",
    ubicacion: "Oficinas de Catastro Tlaquepaque.",
    periodo: "En proceso.",
    referencia: "H. Ayuntamiento de Tlaquepaque",
  },
  {
    nombre: "Drenaje Maquisa",
    descripcion:
      "Incorporación de línea de drenaje sanitario al drenaje municipal 310 Mts.",
    ubicacion:
      "Carretera San Miguel Cuyutlan KM 9.5, Tlajomulco de Zúñiga, Jalisco.",
    periodo: "Marzo – Junio 2016.",
    referencia: "MAQUISA",
  },
  {
    nombre: "Tunel Hidalgo",
    descripcion:
      "Colocación de bancas, pintura en jardineras de la explanada del mercado Corona. Suministro, fabricación y colocación de barandal del puente a desnivel en Av. Hidalgo. Cuarto de maquinas al interior del puente.",
    ubicacion: "Av. Hidalgo, Guadalajara, Jalisco.",
    periodo: "Marzo 2016.",
    referencia: "Maquiobras",
  },
  {
    nombre: "Bodega Almacén de llantas",
    descripcion: "Construcción de Bodega para venta de llantas.",
    ubicacion: "Zapopan, Jalisco.",
    periodo: "Noviembre 2015- Marzo 2016.",
    referencia: "Grupo Gontez",
  },
  {
    nombre: "Escuela Sec. Técnica 160",
    descripcion: "Estructura metálica para primer piso de Escuela Sec Tec 160.",
    ubicacion: "Zapopan, Jalisco.",
    periodo: "Septiembre – Noviembre 2015.",
    referencia: "TC CONSTRUCCIONES",
  },
  {
    nombre: "Edificio de oficinas el Fresno",
    descripcion: "Construcción de edificio de 3 pisos para oficinas.",
    ubicacion: "Encino Col. EL Fresno.",
    periodo: "Agosto-Octubre 2015.",
    referencia: "Arq. Enrique Córdova",
  },
  {
    nombre: "Estacionamiento",
    descripcion:
      "Suministro y colocación de estructura y lamina, para estacionamiento en el centro de Guadalajara.",
    ubicacion: "Prisciliano Sánchez 419, Jalisco.",
    periodo: "Agosto 2014 – Febrero 2016.",
    referencia: "Ing. Juan José Molina",
  },
  {
    nombre:
      "Suministro y Colocación de estructura y lámina para bodega Recicladora",
    descripcion: "Suministro y Colocación de estructura y lámina para bodega.",
    ubicacion: "Tonalá, Jalisco.",
    periodo: "Junio – Octubre 2015.",
    referencia: "Jorge Jiménez",
  },
  {
    nombre: "Construcción de oficina Recicladora",
    descripcion: "Construcción de oficinas para bodega recicladora.",
    ubicacion: "Tonalá, Jalisco.",
    periodo: "Junio – Octubre 2015.",
    referencia: "Jorge Jiménez",
  },
  {
    nombre: "Colocación de concreto Recicladora",
    descripcion: "Colocación de concreto en bodega recicladora.",
    ubicacion: "Tonalá, Jalisco.",
    periodo: "Junio – Octubre 2015.",
    referencia: "Jorge Jiménez",
  },
  {
    nombre: "Torres Seder",
    descripcion: "Reforzamiento de columnas, Torre Hidalgo.",
    ubicacion: "Guadalajara, Jalisco.",
    periodo: "Noviembre 2014/Agosto 2015.",
    referencia: "IPEJAL",
  },
  {
    nombre: "Bodega la Brida",
    descripcion: "Construcción de Bodega de almacenamiento, La Brida.",
    ubicacion: "Tlaquepaque , Jalisco.",
    periodo: "Septiembre - Noviembre 2014.",
    referencia: "Nave Industrial La Brida",
  },
  {
    nombre: "Porton en Maquisa",
    descripcion: "Elaboración de Portón eléctrico y acceso con obra civil.",
    ubicacion: "Tlajomulco de Zúñiga, Jalisco.",
    periodo: "Agosto 2014.",
    referencia: "Maquisa S.A de C.V.",
  },
  {
    nombre: "Centro Universitario Valles",
    descripcion: "Construcción de edificio, centro Universitario Valles.",
    ubicacion: "Ameca, Jalisco.",
    periodo: "2013-2014.",
    referencia: "IFEJAL",
  },
  {
    nombre: "Bodega Frudest",
    descripcion: "Construcción de Bodega para almacenamiento, FRUDEST.",
    ubicacion: "Tlaquepaque, Jalisco.",
    periodo: "Enero - Mayo 2014.",
    referencia: "FRUDEST S.A DE C.V.",
  },
  {
    nombre: "Tanque San Gilberto",
    descripcion: "Suministro, fabricación y montaje de Tanque elevado.",
    ubicacion: "Tlajomulco de Zúñiga, Jalisco.",
    periodo: "Febrero - Abril 2014.",
    referencia: "Vivienda de Calidad San Gilberto S.A.",
  },
  {
    nombre: "Terraza Andares",
    descripcion:
      "Suministro, fabricación y montaje de terraza y recibidor VIP Plaza Andares.",
    ubicacion: "Zapopan, Jalisco.",
    periodo: "Mayo 2011/Noviembre 2012.",
    referencia: "Desarrolladora Mexicana de Inmuebles",
  },
  {
    nombre: "Cancha de usos múltiples",
    descripcion:
      "Suministro e instalación de estructura y malla sombra en canchas de usos múltiples.",
    ubicacion: "Zapopan, Jalisco.",
    periodo: "Junio 2012.",
    referencia: "SEDEUR",
  },
  {
    nombre:
      "Fabricación de estructura decorativa, barandales y cortinas Centro comercial las Ramblas",
    descripcion: "Fabricación de estructura decorativa, barandales y cortinas.",
    ubicacion: "Av. Chapultepec Sur No.542.",
    periodo: "Enero-Marzo 2012.",
    referencia: "Lar Crea Residencial III , S.A. de C.V.",
  },
  {
    nombre:
      "Fabricación e Instalación de escaleras de emergencia Centro comercial las Ramblas",
    descripcion: "Fabricación e Instalación de escaleras de emergencia.",
    ubicacion: "Av. Chapultepec Sur No.542.",
    periodo: "Enero-Marzo 2012.",
    referencia: "Lar Crea Residencial III , S.A. de C.V.",
  },
  {
    nombre:
      "Fabricación e Instalación de escaleras de ingreso Centro comercial las Ramblas",
    descripcion: "Fabricación e Instalación de escaleras de ingreso.",
    ubicacion: "Av. Chapultepec Sur No.542.",
    periodo: "Enero-Marzo 2012.",
    referencia: "Lar Crea Residencial III , S.A. de C.V.",
  },
  {
    nombre: "Fabricación e Instalación de puertas Centro comercial las Ramblas",
    descripcion:
      "Fabricación e Instalación de puertas para el centro comercial.",
    ubicacion: "Av. Chapultepec Sur No.542.",
    periodo: "Enero-Marzo 2012.",
    referencia: "Lar Crea Residencial III , S.A. de C.V.",
  },
  {
    nombre: "Cimentación para Tanque elevado",
    descripcion: "Cimentación para Tanque elevado.",
    ubicacion: "Toluquilla, Jalisco.",
    periodo: "Diciembre 2011.",
    referencia: "Obras Publicas Tlaquepaque",
  },
  {
    nombre: "Estructuras para casas",
    descripcion:
      "Estructuras de acero base de perfil monten y tubular para 119 casas y estructura para área de eventos.",
    ubicacion: "Santa Ana, Jalisco.",
    periodo: "2013 - 2014.",
    referencia: "IFEJAL",
  },
];

export default function NuestrosTrabajos() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center text-gray-400 mb-8 mt-20">
        Nuestros Trabajos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {trabajos.map((trabajo, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">{trabajo.titulo}</h2>
            <p className="text-gray-500 mb-2">
              <strong>Descripción:</strong> {trabajo.descripcion}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Ubicación:</strong> {trabajo.ubicacion}
            </p>
            {/* <p className="text-gray-700 mb-2">
              <strong>Periodo:</strong> {trabajo.periodo}
            </p> */}
            <p className="text-gray-500">
              <strong>Referencia:</strong> {trabajo.referencia}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
