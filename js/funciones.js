import { autos } from "./db.js";
import {
  listaAutos,
  marcaInputElement,
  yearInputElement,
  precioMinimoInputElement,
  precioMaximoInputElement,
  puertasInputElement,
  transmisionInputElement,
  colorInputElement,
} from "./elementos.js";



// Listar autos
const listarAutos = (autos) => {

  autos.forEach(auto => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;

    const autoHTML = document.createElement('p');
    autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`;

    listaAutos.appendChild(autoHTML);
  });
};


// Cargar años
const cargarYears = () => {

  // Obtener el año actual
  const anioActual = new Date().getFullYear();
  const anioMinimo = anioActual - 10;

  // Generar los años
  for (let i = anioActual; i >= anioMinimo; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearInputElement.appendChild(option);
  }
};


// Filtar autos
const filtrarAutos = () => {

  // Limpiar HTML
  limpiarHTML();

  // Filtrar autos
  const autosFiltrados = autos.filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarPrecioMinimo);

  // Listar autos filtrados
  listarAutos(autosFiltrados);
};


// Filtrar por marca
const filtrarMarca = (auto) => {
  const marca = marcaInputElement.value;
  return auto.marca === marca || marca === '';
};


// Filtrar por years
const filtrarYear = (auto) => {
  const year = yearInputElement.value;
  return auto.year === parseInt(year) || year === '';
};


// Filtrar por precio mínimo
const filtrarPrecioMinimo = (auto) => {
  const precioMinimo = precioMinimoInputElement.value;
  return auto.precio >= precioMinimo || precioMinimo === '';
};


// Limpiar HTML
const limpiarHTML = () => {
  while (listaAutos.firstChild) {
    listaAutos.removeChild(listaAutos.firstChild);
  }
};



export {
  listarAutos,
  cargarYears,
  filtrarAutos,
}