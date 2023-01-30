/* -- RUTAS DE LA DATA -- */

import express from 'express'
import * as gatosServices from '../services/gatosServices'
import toNewGatosEntry from '../utils'

const router = express.Router()

// listar gatos
router.get('/', (_req, res) => {
  // res.send('Fetching de todos los gatos')

  // TODOS los datos
  res.send(gatosServices.getEntries())

  // todos los datos EXCEPTO "description":
  // res.send(gatosServices.getEntriesWithoutSensitiveInfo())
})

// buscar gato por ID
router.get('/:id', (req, res) => {
  const gatos = gatosServices.findById(Number(req.params.id))

  return (gatos !== null)
    ? res.send(gatos) // SI el ID del gato existe, entonces mostrarlo
    : res.sendStatus(404) // error cuando el ID no existe
})

// guardar un nuevo gato
router.post('/', (req, res) => {
  // res.send('guardando gatos')

  try {
    const newGatosEntry = toNewGatosEntry(req.body)
    const addedGatosEntry = gatosServices.addEntry(newGatosEntry)
    res.json(addedGatosEntry)
  } catch (e) {
    console.log('error')
    res.status(400)
  }
})

export default router
