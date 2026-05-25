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

function contar(req, res) {
    buscaModel.contar()
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

function registrarBusca(req, res) {
    var bairro = req.body.bairroServer;

    // Faça as validações dos valores
    if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        buscaModel.registrarBusca(bairro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function maisBuscados(req, res) {
    buscaModel.maisBuscados()
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

module.exports = {
    listar,
    contar,
    registrarBusca,
    maisBuscados
}