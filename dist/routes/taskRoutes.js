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
const Task_1 = require("../models/Task");
const router = express_1.default.Router();
// Skapa en Task
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = new Task_1.Task(req.body);
        yield task.save();
        res.status(201).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// Läs alla Tasks
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task_1.Task.find().populate('assignedTo');
    res.json(tasks);
}));
// Uppdatera en Task
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTask = yield Task_1.Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// Ta bort en Task
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Task_1.Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.default = router;
