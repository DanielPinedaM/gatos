
/* -- JSON CON LA DATA -- */

/* orden de prioridad en q TypeScript importa las extensiones:
'.tsx', '.ts', '.node', '.js', '.json' */
import { gatosEntry, NewGatosEntry/*, NonSensitiveInfoGatosEntry */ } from '../types'
import gatosData from './kittens.json'

// importar tipos de datos del JSON en un array de objetos [{}]
const gatos: gatosEntry[] = gatosData as gatosEntry[]

// TODOS los pares de [propiedad, valor] del array de objetos [{}] (JSON)
export const getEntries = (): gatosEntry[] => gatos

/* buscar gato por ID,
el ID puede ser undefined */
export const findById = (id: number): gatosEntry | undefined => {
  const entry = gatos.find(d => d.id === id) // todos los gatos q COINCIDEN con un ID

  // todos los datos EXCEPTO "description":
  // if (entry !== null) {
  //   const { description, ...restOfGatos } = entry
  //   return restOfGatos
  // }

  return entry
}

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
export const addEntry = (newGatosEntry: NewGatosEntry): gatosEntry => {
  const newGatos = {
    id: Math.max(...gatos.map(d => d.id)) + 1, // ID auto-incrementables 1, 2, 3...
    ...newGatosEntry
  }

  gatos.push(newGatos)
  return newGatos
}
