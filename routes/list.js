


exports.showlist = function(req, res){
	var text = {
		'title' : req.body.title,
		'goal' : req.body.goal,
		'needed' : req.body.needed,
		'current' : req.body.current

	}


	res.render('list', text);
};

// Chen: added exports.index_page
exports.index_page = function(req, res){
	res.render('index');
}