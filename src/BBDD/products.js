import camiseta_nike_hombre from "../assets/imagenes/camisetas/camiseta_nike_hombre.jpg";
import pantalones_reebok from "../assets/imagenes/pantalones/pantalones_reebok_hombre.jpg";
import calcetines_nike from "../assets/imagenes/calcetines/calcetines_nike_hombre.jpg";
import nike_air_zoom_hombre from "../assets/imagenes/zapatillas/nike_air_zoom_hombre.jpg";
import zapatillas_asics from "../assets/imagenes/zapatillas/zapatillas_asics.jpg";
import pantalones_asics from "../assets/imagenes/pantalones/pantalon_asics.jpg";
import pantalones_adidas_mujer from "../assets/imagenes/pantalones/pantalon_adidas_mujer.jpg";
import fila_clementina from "../assets/imagenes/camisetas/fila_clementina.jpg";

const products = [
  {
    id: 1,
    photo: camiseta_nike_hombre,
    description: "Camiseta Nike Trail",
    gender: "Hombre",
    precio: 29,
    category: "camisetas",
  },
  {
    id: 2,
    photo: pantalones_reebok,
    description: "Pantalon Reebok MVP",
    gender: "Hombre",
    precio: 25,
    category: "pantalones",
  },
  {
    id: 3,
    photo: calcetines_nike,
    description: "Calcetines Nike everyday",
    gender: "Hombre",
    precio: 15,
    category: "calcetines",
  },
  {
    id: 4,
    photo: nike_air_zoom_hombre,
    description: "Zapatillas Nike Air Zoom",
    gender: "Hombre",
    precio: 50.99,
    category: "zapatillas",
  },
  {
    id: 5,
    photo: zapatillas_asics,
    description: "Zapatillas Asic M23",
    gender: "Mujer",
    precio: 61.99,
    category: "zapatillas",
  },
  {
    id: 6,
    photo: pantalones_asics,
    description: "Pantalon Asics Pro",
    gender: "Mujer",
    precio: 26.99,
    category: "pantalones",
  },
  {
    id: 7,
    photo: pantalones_adidas_mujer,
    description: "Pantalon Adidas Running",
    gender: "Mujer",
    precio: 50.99,
    category: "pantalones",
  },
  {
    id: 8,
    photo: fila_clementina,
    description: "Camiseta Fila Verano",
    gender: "Mujer",
    precio: 27,
    category: "camisetas",
  },
];

export default products;
