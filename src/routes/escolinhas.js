var express = require("express");
var router = express.Router();

var escolaController = require("../controllers/escolaController");

//Recebendo os dados do html e direcionando para a função cadastrar de escolaController.js
router.post("/cadastrar", function (req, res) {
    escolaController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    escolaController.autenticar(req, res);
});

router.post("/bairroEscola", function (req, res) {
    escolaController.bairroEscola(req, res);
});

module.exports = router;