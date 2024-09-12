"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Ladda miljövariabler från .env-filen
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
// Anslut till MongoDB Atlas med autentisering
mongoose_1.default.connect(process.env.MONGODB_URI || '', {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
})
    .then(() => {
    console.log('MongoDB connected');
})
    .catch((error) => {
    console.error('Connection error:', error);
});
// Routers
app.use('/api/users', userRoutes_1.default);
app.use('/api/tasks', taskRoutes_1.default);
// Starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
