"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var autenticacion_1 = require("../middlewares/autenticacion");
var post_model_1 = require("../models/post.model");
var postRouts = express_1.Router();
postRouts.post('/', [autenticacion_1.verificaToken], function (req, res) {
    var body = req.body;
    body.usuario = req.usuario._id;
    post_model_1.Post.create(body).then(function (postDB) {
        res.json({
            ok: true,
            post: postDB
        });
    }).catch(function (err) {
        res.json(err);
    });
});
exports.default = postRouts;
