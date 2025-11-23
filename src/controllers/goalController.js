var goalModel = require("../models/goalModel")

function updateGoal(req, res) {
    var user_id = req.body.user_id
    var time_goal = req.body.time_goal
    var qtd = req.body.qtd

    if (!user_id || !time_goal || !qtd) {
        res.status(400).json("Preencha todos os campos")
    } else {
        goalModel.updateGoal(user_id, time_goal, qtd)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }
}

module.exports = {
    updateGoal
}