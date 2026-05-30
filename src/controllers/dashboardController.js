var dashboardModel = require("../models/dashboardModel");

function total(req, res) {
    dashboardModel.total()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function bairroEscola(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idEscola = req.body.idEscolaServer;

    // Faça as validações dos valores
    if (idEscola == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.bairroEscola(idEscola)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a busca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function bairro(req, res) {
    var idUsuario = req.body.idServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        dashboardModel.bairro(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a busca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function nulos(req, res) {
    dashboardModel.nulos()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a busca! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function contar(req, res) {
    dashboardModel.contar()
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

function maisBuscados(req, res) {
    dashboardModel.maisBuscados()
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
    total,
    bairro,
    bairroEscola,
    nulos,
    contar,
    maisBuscados
}