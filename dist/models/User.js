"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemas_1 = require("../schemas");
exports.User = mongoose_1.default.model('User', schemas_1.UserSchema, 'trullo-user');
