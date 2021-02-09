"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var body_parser_1 = __importDefault(require("body-parser"));
var usuario_1 = __importDefault(require("./routes/usuario"));
var post_1 = __importDefault(require("./routes/post"));
var mongoose = require('mongoose');
var server = new server_1.default();
//body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//rutas de mi app
server.app.use('/user', usuario_1.default);
server.app.use('/posts', post_1.default);
//conectar db
mongoose.connect('mongodb://localhost:27017/fotosgram', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, function (err) {
    if (err)
        throw err;
    console.log('base de datos online');
});
//escuchar server
server.start(function () {
    console.log("Servidor corriendo en puerto " + server.port);
});
