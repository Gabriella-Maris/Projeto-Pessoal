var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/bairro", function (req, res) {
    dashboardController.bairro(req, res);
});

router.post("/total", function (req, res) {
    dashboardController.total(req, res);
});

router.post("/nulos", function (req, res) {
    dashboardController.nulos(req, res);
});

router.post("/bairroEscola", function (req, res) {
    dashboardController.bairroEscola(req, res);
});

router.post("/contar", function (req, res) {
    dashboardController.contar(req, res);
});

router.post("/maisBuscados", function (req, res) {
    dashboardController.maisBuscados(req, res);
});

module.exports = router;