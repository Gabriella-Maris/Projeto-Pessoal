var database = require("../database/config")

function listar(bairro) {
    console.log("Bairro recebido \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", bairro)
    var instrucaoSql = `
        SELECT * FROM escolinha WHERE bairro = '${bairro}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contar() {
    console.log("Bairro recebido \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
        SELECT bairro, COUNT(id) AS total FROM escolinha GROUP BY bairro;
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

function maisBuscados() {
    console.log("ACESSEI A BUSCA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarBusca():");
    var instrucaoSql = `
        SELECT bairro, COUNT(id) AS total FROM busca GROUP BY bairro ORDER BY total DESC LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    contar,
    registrarBusca,
    maisBuscados
};