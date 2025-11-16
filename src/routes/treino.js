var express = require("express");
var router = express.Router();

var trainingController = require("../controllers/treinoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/add-training", function (req, res) {
    trainingController.addTraining(req, res);
})

router.post("/get-training", function (req, res) {
    trainingController.getTraining(req, res);
});

module.exports = router;