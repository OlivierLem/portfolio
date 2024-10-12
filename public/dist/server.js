"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.set("views", "./app/views");
app.set("view engine", "ejs");
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.render(`./pages/homepage`, { test: "essais" });
});
app.listen(port, () => console.log(`Serveur Express écoutant sur l'url http://localhost:${port}`));
