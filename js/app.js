import { autos } from "./db.js";

import {
  marcaInputElement,
  precioMaximoInputElement,
  precioMinimoInputElement,
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
});