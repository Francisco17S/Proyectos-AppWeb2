"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const computadora2_1 = __importDefault(require("./rutes/computadora2"));
const prestamista2_1 = __importDefault(require("./rutes/prestamista2"));
const prestamo2_1 = __importDefault(require("./rutes/prestamo2"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
// Ruta básica para la URL raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servicio REST de prestamo de computadora');
});
app.use('/computadora2', computadora2_1.default);
app.use('/prestamista2', prestamista2_1.default);
app.use('/prestamo2', prestamo2_1.default);
app.listen(port, () => {
    console.log(`Servicio REST escuchando en http://localhost:${port}`);
});
