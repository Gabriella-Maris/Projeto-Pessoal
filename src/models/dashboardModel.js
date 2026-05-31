var database = require("../database/config")

// Primeira KPI - Total de escolas em diadema
function total() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
       SELECT COUNT(*) AS total FROM escolinha; `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Segunda KPI para escola - Total de escolas em seu bairro
function bairro(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idUsuario)
    var instrucaoSql = `
       SELECT COUNT(*) AS quantidade FROM escolinha WHERE fkBairroEscola = (SELECT fkBairroUsuario FROM usuario WHERE id = ${idUsuario});`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Segunda KPI para usuario - Total de escolas em seu bairro
function bairroEscola(idEscola) {
    console.log("ACESSEI O Escola MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", idEscola)
    var instrucaoSql = `
       SELECT COUNT(*) AS quantidade FROM escolinha WHERE fkBairroEscola = (SELECT fkBairroEscola FROM escolinha WHERE id = ${idEscola});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Terceira KPI - Total de bairros desprovidas de escolas
function nulos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
       SELECT COUNT(*) AS nulos FROM bairro b LEFT JOIN escolinha e ON b.id = e.fkBairroEscola WHERE e.id IS NULL;`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Primeiro gráfico - Total de escolas em cada bairro
function contar() {
    console.log("Bairro recebido \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
        SELECT b.nome AS bairro, COUNT(e.id) AS total FROM bairro b JOIN escolinha e ON b.id = e.fkBairroEscola GROUP BY b.id, b.nome ORDER BY total DESC;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Segundo gráfico - Top 3 dos bairros mais procurados
function maisBuscados() {
    console.log("ACESSEI A BUSCA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarBusca():");
    var instrucaoSql = `
        SELECT b.nome AS bairro, COUNT(bs.id) AS total FROM bairro b JOIN busca bs ON b.id = bs.fkBairroBusca GROUP BY b.id, b.nome ORDER BY total DESC LIMIT 3;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    bairro,
    total,
    nulos,
    bairroEscola,
    contar,
    maisBuscados
};