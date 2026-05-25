var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/bairro", function (req, res) {
    usuarioController.bairro(req, res);
});

router.post("/total", function (req, res) {
    usuarioController.total(req, res);
});

router.post("/nulos", function (req, res) {
    usuarioController.nulos(req, res);
});

module.exports = router;