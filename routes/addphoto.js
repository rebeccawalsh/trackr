var data = require('../addpictures.json');

exports.view = function(req, res){
	
	res.render('addphoto', data);
};

