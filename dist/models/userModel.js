"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    name: String,
    uid: String,
    images: [
        {
            url: String,
            public_id: String,
            display_name: String,
            original_filename: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],
});
exports.User = mongoose_1.default.model("User", UserSchema);
