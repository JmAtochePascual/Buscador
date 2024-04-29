import { autos } from './db.js';


// Variables 
const marcaInputElement = document.querySelector('#marca');
const yearInputElement = document.querySelector("#year");
const precioMinimoInputElement = document.querySelector("#minimo");
const precioMaximoInputElement = document.querySelector("#maximo");
const puertasInputElement = document.querySelector("#puertas");
const transmisionInputElement = document.querySelector("#transmision");
const colorInputElement = document.querySelector("#color");
const resultadoElement = document.querySelector("#resultado");





// Muestra los autos en el HTML
const mostrarAutos = (autos) => {

  autos.forEach(auto => {

    const { marca, modelo, year, precio, puertas, color, transmision } = auto;
    const autoHTML = document.createElement('p');

    autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`;

    resultadoElement.appendChild(autoHTML);
  });
}





// Llena las opciones de los años
const cargarYear = () => {

  const max = new Date().getFullYear(); // Año actual
  const min = max - 10;

  for (let i = max; i >= min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearInputElement.appendChild(option);
  }
};





// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {

  mostrarAutos(autos); // Muestra los autos al cargar


  cargarYear(); // Llena el select de años
});
