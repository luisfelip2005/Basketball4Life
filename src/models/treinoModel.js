var database = require("../database/config")

function getTraining(fk_user) {
    console.log("ACESSEI O Training MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getTraining(): ", fk_user)
    var instrucaoSql = `
        SELECT starting_time, ending_time, trainig_date FROM training WHERE fk_user = '${fk_user}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function addTraining(starting_time, ending_time, trainig_date, fk_user) {
    console.log("ACESSEI O Training MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function addTraing():", starting_time, ending_time, trainig_date, fk_user);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO training (starting_time, ending_time, trainig_date, fk_user) VALUES ('${starting_time}', '${ending_time}', '${trainig_date}', '${fk_user}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    getTraining,
    addTraining
};