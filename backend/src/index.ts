/* -- SERVIDOR -- */

import express from 'express' // ESModules
// const express = require('express'); // commonJS

import gatosRouter from './routes/gatos'
import path from 'path' // ruta actual

// usar express
const app = express()

// Middleware (intermediario) q transforma la req.body a JSON
app.use(express.json())

/* mostrar imagenes estaticas en servidor
https://youtu.be/DnoUtI30pcs */
const imgDir = path.join(__dirname, '../img')
app.use('/img', express.static(imgDir))
// console.log('imgDir', imgDir)

// Puerto de la API REST
const PORT = 3000

/*
PETICION HTTP:
req      = solicitud
res      = respuesta
/kittens = ruta donde estan los datos (endpoint)
https://stackoverflow.com/questions/44849082/sending-a-json-file-to-express-server-using-js
*/
app.get('/kittens', (_req, res) => {
  console.log('ping ', new Date().toLocaleString())
  res.send('pong')
})

app.use('/api/gatos', gatosRouter)

// esuchar peticion
app.listen(PORT, () => {
  console.log(`servidor en el puerto ${PORT} `, new Date().toLocaleString())
})
