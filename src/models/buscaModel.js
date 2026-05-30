var database = require("../database/config")

function listar(bairro) {
    console.log("Bairro recebido \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", bairro)
    var instrucaoSql = `
        SELECT * FROM escolinha WHERE bairro = '${bairro}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarBusca(bairro) {
    console.log("ACESSEI A BUSCA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarBusca():", bairro);
    var instrucaoSql = `
        INSERT INTO busca (bairro) VALUES ('${bairro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    registrarBusca
};