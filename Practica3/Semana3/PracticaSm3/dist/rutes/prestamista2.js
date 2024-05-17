"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("../prisma"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const estado = req.query.estado ? String(req.query.estado) : 'Activo';
    const prestamistas = yield prisma_1.default.prestamista2.findMany({
        where: { estado: estado },
    });
    res.json(prestamistas);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPrestamista = yield prisma_1.default.prestamista2.create({
        data: req.body,
    });
    res.status(201).json(newPrestamista);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prestamista = yield prisma_1.default.prestamista2.findUnique({
        where: { ID: parseInt(req.params.id) },
    });
    if (prestamista && prestamista.estado !== 'Eliminado') {
        res.json(prestamista);
    }
    else {
        res.status(404).send('Prestamista no encontrado');
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPrestamista = yield prisma_1.default.prestamista2.update({
        where: { ID: parseInt(req.params.id) },
        data: req.body,
    });
    res.json(updatedPrestamista);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedPrestamista = yield prisma_1.default.prestamista2.update({
            where: { ID: parseInt(req.params.id) },
            data: { estado: 'Eliminado' },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el prestamista' });
    }
}));
exports.default = router;
