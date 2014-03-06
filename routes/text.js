var data = require("../goal.json");


exports.create = function(req, res){
	var text = {
		'goal' : req.body.goal
	}

	data.push(text);

	res.send(req.body.goal);
};