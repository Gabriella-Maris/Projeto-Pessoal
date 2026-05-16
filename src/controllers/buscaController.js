var buscaModel = require("../models/buscaModel");

function listar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var bairro = req.body.bairroServer;

    // Faça as validações dos valores
    if (bairro == undefined) {
        res.status(400).send("Ainda sem escolinhas cadastradas nesse bairro");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo buscaModel.js
        buscaModel.listar(bairro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    listar
}