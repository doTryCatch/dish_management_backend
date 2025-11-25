"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.appServer = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
exports.appServer = (0, http_1.createServer)(app);
exports.io = new socket_io_1.Server(exports.appServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
exports.io.on("connection", (socket) => {
    console.log("client connected:", socket.id);
    socket.on("disconnect", () => {
        console.log("client disconnected:", socket.id);
    });
});
const PORT = process.env.PORT || 4000;
app.use("/api", router_1.default);
exports.appServer.listen(PORT, () => {
    console.log("app is running at port: ", PORT);
});
