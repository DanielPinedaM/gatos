"use strict";
/* -- JSON CON LA DATA -- */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.findById = exports.getEntries = void 0;
const kittens_json_1 = __importDefault(require("./kittens.json"));
// importar tipos de datos del JSON en un array de objetos [{}]
const gatos = kittens_json_1.default;
// TODOS los pares de [propiedad, valor] del array de objetos [{}] (JSON)
const getEntries = () => gatos;
exports.getEntries = getEntries;
/* buscar gato por ID,
el ID puede ser undefined */
const findById = (id) => {
    const entry = gatos.find(d => d.id === id); // todos los gatos q COINCIDEN con un ID
    // todos los datos EXCEPTO "description":
    // if (entry !== null) {
    //   const { description, ...restOfGatos } = entry
    //   return restOfGatos
    // }
    return entry;
};
exports.findById = findById;
// listar todos los datos EXCEPTO "description":
/* export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoGatosEntry[] => {
  return gatos.map(({ id, name, gender, ImageFileName, age }) => {
    return {
      id,
      name,
      gender,
      ImageFileName,
      age
    }
  })
} */
// guardar nuevo gato
const addEntry = (newGatosEntry) => {
    const newGatos = Object.assign({ id: Math.max(...gatos.map(d => d.id)) + 1 }, newGatosEntry);
    gatos.push(newGatos);
    return newGatos;
};
exports.addEntry = addEntry;
