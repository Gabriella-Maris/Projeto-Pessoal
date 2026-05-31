var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `SELECT e.id, e.nome, e.cnpj, b.nome AS bairro, e.rua, e.numero, e.nome_representante, e.email, e.cpf, e.senha FROM escolinha AS e JOIN bairro AS b ON e.fkBairroEscola = b.id WHERE e.email = '${email}' AND e.senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, cnpj, rua, numero, nome_representante, email, cpf, senha, fkBairroEscola) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, cnpj, rua, numero, nome_representante, email, cpf, senha, fkBairroEscola);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO escolinha (nome, cnpj, rua, numero, nome_representante, email, cpf, senha, fkBairroEscola) VALUES ('${nome}', '${cnpj}', '${rua}', '${numero}', '${nome_representante}', '${email}', '${cpf}', '${senha}', '${fkBairroEscola}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};