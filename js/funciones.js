import {
  listaAutos
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


export {
  listarAutos
}