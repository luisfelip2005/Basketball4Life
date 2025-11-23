var express = require("express")

var router = express.Router()

var goalController = require("../controllers/goalController")

router.put("/update-goal", function(req, res) {
    goalController.updateGoal(req, res)
})

module.exports = router