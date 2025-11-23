var express = require("express")

var router = express.Router()

var goalController = require("../controllers/goalController")

router.get("/get-goal/:user_id", function(req, res) {
    goalController.getGoal(req, res)
})

router.put("/update-goal", function(req, res) {
    goalController.updateGoal(req, res)
})

module.exports = router