import { autos } from "./db.js";
import {
  listarAutos
} from "./funciones.js";


// Eventos
document.addEventListener('DOMContentLoaded', () => {

  // Listar autos
  listarAutos(autos)
});