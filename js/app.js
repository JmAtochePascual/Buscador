import { autos } from "./db.js";
import { marcaInputElement } from "./elementos.js";
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
});