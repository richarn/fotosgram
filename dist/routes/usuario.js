"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_model_1 = require("../models/usuario.model");
var bcrypt_1 = __importDefault(require("bcrypt"));
var userRoutes = express_1.Router();
// userRoutes.get('/prueba', (req: Request, res: Response) => {
//   res.json({
//     ok: true,
//     mensaje: 'Todo funciona bien!'
//   })
// });
//login
userRoutes.post('/login', function (req, res) {
    var body = req.body;
    usuario_model_1.Usuario.findOne({ email: body.email }, function (err, userDB) {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Usuario/contrasena no son correctas'
            });
        }
        if (userDB.compararPassword(body.password)) {
            res.json({
                ok: true,
                token: "ASDJASDHAUSHDAHSD"
            });
        }
        else {
            res.json({
                ok: false,
                token: "Usuario/contrasena no son correctos**"
            });
        }
    });
});
//crear un usuario
userRoutes.post('/create', function (req, res) {
    var user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    };
    usuario_model_1.Usuario.create(user).then(function (userDB) {
        res.json({
            ok: true,
            user: userDB
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
exports.default = userRoutes;
