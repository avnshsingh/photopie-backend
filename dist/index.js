"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var supertokens_node_1 = __importDefault(require("supertokens-node"));
var express_2 = require("supertokens-node/framework/express");
var config_1 = require("./config/config");
var mongoose_1 = __importDefault(require("mongoose"));
var imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
var sessionRoutes_1 = __importDefault(require("./routes/sessionRoutes"));
dotenv_1.default.config();
supertokens_node_1.default.init(config_1.SuperTokensConfig);
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: (0, config_1.getWebsiteDomain)(),
    allowedHeaders: __spreadArray(["content-type"], supertokens_node_1.default.getAllCORSHeaders(), true),
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
}));
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(function () { return console.log("Connected to MongoDB"); })
    .catch(function (err) { return console.log("MongoDB connection error", err); });
app.use((0, express_2.middleware)());
app.use("/api/images", imageRoutes_1.default);
app.use("/api/session", sessionRoutes_1.default);
app.use((0, express_2.errorHandler)());
app.get("/", function (req, res) {
    res.send("Server is Running");
});
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
