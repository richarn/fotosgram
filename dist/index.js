"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var usuario_1 = __importDefault(require("./routes/usuario"));
var server = new server_1.default();
//rutas de mi app
server.app.use('/user', usuario_1.default);
//escuchar server
server.start(function () {
    console.log("Servidor corriendo en puerto " + server.port);
});
