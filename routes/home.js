var diaries = require('../diaries.json');

exports.view = function(req, res){
	res.render('home',diaries);
	};
