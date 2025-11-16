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

router.post("/get-total-of-minutes", function (req, res) {
    trainingController.getTotalOfMinutesByDay(req, res)
})

router.post("/get-today-training", function (req, res) {
    trainingController.getTodayTraining(req, res)
})

router.post("/get-week-training", function (req, res) {
    trainingController.getWeekTraining(req, res)
})

router.post("/get-conclusion-percent", function(req, res) {
    trainingController.getConclusionPercent(req, res)
})

router.post("/get-all-data", function(req, res) {
    trainingController.getAllTraining(req, res)
})

router.delete("/delete-training/:id", function(req, res) {
    trainingController.deleteTraining(req, res)
})

router.put("/update-training", function(req, res) {
    trainingController.updateTraining(req, res)
})

module.exports = router;