"use strict";
/* -- RUTAS DE LA DATA -- */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gatosServices = __importStar(require("../services/gatosServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
// listar gatos
router.get('/', (_req, res) => {
    // res.send('Fetching de todos los gatos')
    // TODOS los datos
    res.send(gatosServices.getEntries());
    // todos los datos EXCEPTO "description":
    // res.send(gatosServices.getEntriesWithoutSensitiveInfo())
});
// buscar gato por ID
router.get('/:id', (req, res) => {
    const gatos = gatosServices.findById(Number(req.params.id));
    return (gatos !== null)
        ? res.send(gatos) // SI el ID del gato existe, entonces mostrarlo
        : res.sendStatus(404); // error cuando el ID no existe
});
// guardar un nuevo gato
router.post('/', (req, res) => {
    // res.send('guardando gatos')
    try {
        const newGatosEntry = (0, utils_1.default)(req.body);
        const addedGatosEntry = gatosServices.addEntry(newGatosEntry);
        res.json(addedGatosEntry);
    }
    catch (e) {
        console.log('error');
        res.status(400);
    }
});
exports.default = router;
