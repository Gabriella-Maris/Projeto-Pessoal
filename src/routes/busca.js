var express = require("express");
var router = express.Router();

var buscaController = require("../controllers/buscaController");

//Recebendo os dados do html e direcionando para a função cadastrar de buscaController.js
router.post("/listar", function (req, res) {
    buscaController.listar(req, res);
});

module.exports = router;