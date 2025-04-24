import { autos } from "./db.js";

const listCars = document.querySelector('#resultado');
const marcaInputElement = document.querySelector('#marca');
const yearInputElement = document.querySelector("#year");
const precioMinimoInputElement = document.querySelector("#minimo");
const precioMaximoInputElement = document.querySelector("#maximo");
const puertasInputElement = document.querySelector("#puertas");
const transmisionInputElement = document.querySelector("#transmision");
const colorInputElement = document.querySelector("#color");

const showCarsInHtml = (autos) => {
  cleanHtml();

  if (autos.length === 0) {
    const alert = document.createElement('div');
    alert.classList.add('alerta', 'error');
    alert.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    listCars.appendChild(alert);
    return;
  };

  autos.forEach(auto => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;

    const carHtml = document.createElement('p');
    carHtml.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`;
    listCars.appendChild(carHtml);
  });
};


const loadYears = () => {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 10;

  for (let i = currentYear; i >= minYear; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearInputElement.appendChild(option);
  }
};


const filtrarAutos = () => {
  const filteredCars = autos.filter(filterByBrand)
    .filter(filterByYear)
    .filter(filterByMinPrice)
    .filter(filterByMaxPrice)
    .filter(filterByDoors)
    .filter(filterByTransmision)
    .filter(filterByColor);

  showCarsInHtml(filteredCars);
};


const filterByBrand = (auto) => {
  const marca = marcaInputElement.value;
  return auto.marca === marca || marca === '';
};


const filterByYear = (auto) => {
  const year = yearInputElement.value;
  return auto.year === parseInt(year) || year === '';
};


const filterByMinPrice = (auto) => {
  const precioMinimo = precioMinimoInputElement.value;
  return auto.precio >= precioMinimo || precioMinimo === '';
};


const filterByMaxPrice = (auto) => {
  const precioMaximo = precioMaximoInputElement.value;
  return auto.precio <= precioMaximo || precioMaximo === '';
};


const filterByDoors = (auto) => {
  const puertas = puertasInputElement.value;
  return auto.puertas === parseInt(puertas) || puertas === '';
};


const filterByTransmision = (auto) => {
  const transmision = transmisionInputElement.value;
  return auto.transmision === transmision || transmision === '';
}


const filterByColor = (auto) => {
  const color = colorInputElement.value;
  return auto.color === color || color === '';
}


const cleanHtml = () => {
  while (listCars.firstChild) {
    listCars.removeChild(listCars.firstChild);
  }
};


document.addEventListener('DOMContentLoaded', () => {
  showCarsInHtml(autos)
  loadYears();

  marcaInputElement.addEventListener('change', filtrarAutos);
  yearInputElement.addEventListener('change', filtrarAutos);
  precioMinimoInputElement.addEventListener('change', filtrarAutos);
  precioMaximoInputElement.addEventListener('change', filtrarAutos);
  puertasInputElement.addEventListener('change', filtrarAutos);
  transmisionInputElement.addEventListener('change', filtrarAutos);
  colorInputElement.addEventListener('change', filtrarAutos);
});