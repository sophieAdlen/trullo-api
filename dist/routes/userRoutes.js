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
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const router = express_1.default.Router();
// Skapa en User
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = new User_1.User({ name, email, password: hashedPassword });
        yield user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// Läs alla Users
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.User.find();
    res.json(users);
}));
// Uppdatera en User
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield User_1.User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
// Ta bort en User
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_1.User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.default = router;
