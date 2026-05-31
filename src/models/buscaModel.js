var database = require("../database/config")

function listar(bairro) {
    console.log("Bairro recebido \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", bairro)
    var instrucaoSql = `
        SELECT e.nome, b.nome AS bairro, e.rua, e.numero, e.email FROM escolinha e JOIN bairro b ON e.fkBairroEscola = b.id WHERE e.fkBairroEscola = ${bairro};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarBusca(bairro) {
    console.log("ACESSEI A BUSCA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarBusca():", bairro);
    console.log("bairro recebido:", bairro);
    var instrucaoSql = `
        INSERT INTO busca (fkBairroBusca) VALUES ('${bairro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    registrarBusca
};