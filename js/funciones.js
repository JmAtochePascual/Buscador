import { autos } from "./db.js";
import {
  listaAutos,
  marcaInputElement,
  yearInputElement
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
  const autosFiltrados = autos.filter(filtrarMarca)

  // Listar autos filtrados
  listarAutos(autosFiltrados);
};


// Filtrar por marca
const filtrarMarca = (auto) => {
  const marca = marcaInputElement.value;
  return auto.marca === marca || marca === '';
};



export {
  listarAutos,
  cargarYears,
  filtrarAutos
}