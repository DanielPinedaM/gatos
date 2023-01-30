"use strict";
/* -- SERVIDOR -- */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ESModules
// const express = require('express'); // commonJS
const gatos_1 = __importDefault(require("./routes/gatos"));
const path_1 = __importDefault(require("path")); // ruta actual
// usar express
const app = (0, express_1.default)();
// Middleware (intermediario) q transforma la req.body a JSON
app.use(express_1.default.json());
/* mostrar imagenes estaticas en servidor
https://youtu.be/DnoUtI30pcs */
const imgDir = path_1.default.join(__dirname, '../img');
app.use('/img', express_1.default.static(imgDir));
// console.log('imgDir', imgDir)
// Puerto de la API REST
const PORT = 3000;
/*
PETICION HTTP:
req      = solicitud
res      = respuesta
/kittens = ruta donde estan los datos (endpoint)
https://stackoverflow.com/questions/44849082/sending-a-json-file-to-express-server-using-js
*/
app.get('/kittens', (_req, res) => {
    console.log('ping ', new Date().toLocaleString());
    res.send('pong');
});
app.use('/api/gatos', gatos_1.default);
// esuchar peticion
app.listen(PORT, () => {
    console.log(`servidor en el puerto ${PORT} `, new Date().toLocaleString());
});
