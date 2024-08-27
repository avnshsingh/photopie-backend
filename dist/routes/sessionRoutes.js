"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sessionController_1 = require("../controllers/sessionController");
var express_2 = require("supertokens-node/recipe/session/framework/express");
var router = (0, express_1.Router)();
router.get("/sessioninfo", (0, express_2.verifySession)(), sessionController_1.getSessionInfo);
exports.default = router;
