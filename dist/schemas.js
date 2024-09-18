"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
// Task Schema
const TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['to-do', 'in progress', 'blocked', 'done'], default: 'to-do' },
    assignedTo: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    finishedBy: { type: String }
});
exports.TaskSchema = TaskSchema;
// User Schema
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
exports.UserSchema = UserSchema;
