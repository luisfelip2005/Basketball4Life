var database = require("../database/config")

function getTraining(fk_user) {
    console.log("ACESSEI O Training MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getTraining(): ", fk_user)
    var instrucaoSql = `
        SELECT id_training, 
            DATE_FORMAT(starting_time,'%H:%i') as starting_time,
            DATE_FORMAT(ending_time,'%H:%i') as ending_time, 
            DATE_FORMAT(training_date,'%d/%m/%Y') as training_date 
            FROM training WHERE fk_user = '${fk_user}' ORDER BY id_training DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function addTraining(starting_time, ending_time, training_date, fk_user) {
    console.log("ACESSEI O Training MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function addTraing():", starting_time, ending_time, training_date, fk_user);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO training (starting_time, ending_time, training_date, fk_user) VALUES ('${starting_time}', '${ending_time}', '${training_date}', '${fk_user}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function getTotalOfMinutesByDay(date, user_id) {
    var instrucaoSql = `SELECT * FROM vw_total_of_minutes_by_day
        WHERE YEARWEEK(training_date, 0) = YEARWEEK('${date}', 0) and fk_user = '${user_id}'
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    getTraining,
    addTraining,
    getTotalOfMinutesByDay
};