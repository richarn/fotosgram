"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_model_1 = require("../models/usuario.model");
var userRoutes = express_1.Router();
// userRoutes.get('/prueba', (req: Request, res: Response) => {
//   res.json({
//     ok: true,
//     mensaje: 'Todo funciona bien!'
//   })
// });
userRoutes.post('/create', function (req, res) {
    var user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
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
