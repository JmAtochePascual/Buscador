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

const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: ''
};



// Muestra los autos en el HTML
const mostrarAutos = (autos) => {

  limpiarHTML();

  if (autos.length) {
    autos.forEach(auto => {

      const { marca, modelo, year, precio, puertas, color, transmision } = auto;
      const autoHTML = document.createElement('p');

      autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`;

      resultadoElement.appendChild(autoHTML);
    });
    return;
  }

  // Mensaje de no resultados
  mostrarMensajeNoResultados();
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



// carga los datos de la busqueda
const llenarDatosBusqueda = (event) => {
  datosBusqueda[event.target.id] = event.target.value;

  filtrarAutos();
};



// Filtra todos los autos 
const filtrarAutos = () => {

  const resultado = autos.filter(filtraMarca)
    .filter(filtraYear)
    .filter(filtraMinimo)
    .filter(filtraMaximo)
    .filter(filtraPuertas)
    .filter(filtraTransmision)
    .filter(filtraColor);

  mostrarAutos(resultado);
};




const filtraMarca = (auto) => auto.marca === datosBusqueda.marca || datosBusqueda.marca === '';

const filtraYear = (auto) => auto.year === parseInt(datosBusqueda.year) || datosBusqueda.year === '';

const filtraMinimo = (auto) => auto.precio >= parseInt(datosBusqueda.minimo) || datosBusqueda.minimo === '';

const filtraMaximo = (auto) => auto.precio <= parseInt(datosBusqueda.maximo) || datosBusqueda.maximo === '';

const filtraPuertas = (auto) => auto.puertas === parseInt(datosBusqueda.puertas) || datosBusqueda.puertas === '';

const filtraTransmision = (auto) => auto.transmision === datosBusqueda.transmision || datosBusqueda.transmision === '';

const filtraColor = (auto) => auto.color === datosBusqueda.color || datosBusqueda.color === '';




// limpia el listado de autos
const limpiarHTML = () => {
  while (resultadoElement.firstChild) {
    resultadoElement.firstChild.remove();
  }
}




// Muestra un mensaje cuando no hay resultados
const mostrarMensajeNoResultados = () => {

  const noResultado = document.createElement('p');
  noResultado.classList.add('alerta', 'error');
  noResultado.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
  resultadoElement.appendChild(noResultado);
  console.log('No hay resultados');
};






// Cargar eventos
document.addEventListener('DOMContentLoaded', () => {

  mostrarAutos(autos); // Muestra los autos al cargar
  cargarYear(); // Llena el select de años

  // Eventos para los select de búsqueda
  marcaInputElement.addEventListener('change', llenarDatosBusqueda);
  yearInputElement.addEventListener('change', llenarDatosBusqueda);
  precioMinimoInputElement.addEventListener('change', llenarDatosBusqueda);
  precioMaximoInputElement.addEventListener('change', llenarDatosBusqueda);
  puertasInputElement.addEventListener('change', llenarDatosBusqueda);
  transmisionInputElement.addEventListener('change', llenarDatosBusqueda);
  colorInputElement.addEventListener('change', llenarDatosBusqueda);
});
