import { autos } from "./db.js";
import {
  cargarYears,
  listarAutos
} from "./funciones.js";


// Eventos
document.addEventListener('DOMContentLoaded', () => {

  // Listar autos
  listarAutos(autos)

  // Cargar años
  cargarYears();
});