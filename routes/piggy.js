var data = require("../data.json");

exports.submit_detail = function(req, res) {    
	// Your code goes here
	var title, goal, need, current;
	title = req.body.title;
	goal = req.body.goal;
	need = req.body.needed;
	current = req.body.current;

	res.render('list', {'title' : title, 'goal' : goal, 'need' : need, 'current' : current})

 }