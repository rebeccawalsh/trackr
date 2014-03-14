
// Get all of our friend data
var data = require('../addpictures.json');

exports.view = function(req, res){
	console.log(data);
	res.render('diary', data);
};

