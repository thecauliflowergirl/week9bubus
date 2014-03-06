// Get all of our friend data
var data = require('../data.json');
var piggy = require('../piggy.json')

exports.view = function(req, res){
	console.log(data.user_bubbles);
	res.render('index', {'bubble_data' : data.user_bubbles, 'piggy_data' : piggy.piggy_data});
};

exports.text_page = function(req, res){
	res.render('text');
}

exports.feed_page = function(req, res){
	res.render('feed');
}