"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var imageController_1 = require("../controllers/imageController");
var express_2 = require("supertokens-node/recipe/session/framework/express");
var multer_1 = __importDefault(require("multer"));
var router = (0, express_1.Router)();
var upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
router.post("/upload", (0, express_2.verifySession)(), upload.single("image"), imageController_1.uploadImage);
router.get("/:uid", (0, express_2.verifySession)(), imageController_1.getUserImages);
router.delete("/:imageId", (0, express_2.verifySession)(), imageController_1.deleteImage);
exports.default = router;
