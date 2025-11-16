var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");
var goalModel = require("../models/goalModel");
var trainigModel = require("../models/treinoModel")

function addTraining(req, res) {
    var starting_time = req.body.starting_time
    var ending_time = req.body.ending_time
    var training_date = req.body.training_date
    var fk_user = req.body.fk_user

    if (starting_time == undefined) {
        res.status(400).send("Seu starting_time está undefined!");
    } else if (ending_time == undefined) {
        res.status(400).send("Sua ending_time está indefinida!");
    }else if (training_date == undefined) {
        res.status(400).send("Sua training_date está indefinida!");
    }else if (fk_user == undefined) {
        res.status(400).send("Sua fk_user está indefinida!");
    } else {

        trainigModel.addTraining(starting_time, ending_time, training_date, fk_user)
            .then(
                function (trainigList) {
                    console.log(`\nResultados encontrados: ${trainigList.length}`);
                    console.log(`Resultados: ${JSON.stringify(trainigList)}`); // transforma JSON em String

                    res.json(trainigList)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function getTraining(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var user_id = req.body.user_id;

    // Faça as validações dos valores
    if (user_id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        trainigModel.getTraining(user_id)
            .then(
                function (resultado) {

                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar treinos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    addTraining,
    getTraining
}