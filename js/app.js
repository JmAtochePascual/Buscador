import { autos } from "./db.js";

import {
  colorInputElement,
  marcaInputElement,
  precioMaximoInputElement,
  precioMinimoInputElement,
  puertasInputElement,
  transmisionInputElement,
  yearInputElement
} from "./elementos.js";

import {
  cargarYears,
  filtrarAutos,
  listarAutos
} from "./funciones.js";




// Eventos
document.addEventListener('DOMContentLoaded', () => {

  // Listar autos
  listarAutos(autos)

  // Cargar años
  cargarYears();

  marcaInputElement.addEventListener('change', filtrarAutos);
  yearInputElement.addEventListener('change', filtrarAutos);
  precioMinimoInputElement.addEventListener('change', filtrarAutos);
  precioMaximoInputElement.addEventListener('change', filtrarAutos);
  puertasInputElement.addEventListener('change', filtrarAutos);
  transmisionInputElement.addEventListener('change', filtrarAutos);
  colorInputElement.addEventListener('change', filtrarAutos);
});