var data = require("../addpictures.json");

exports.addEntry = function(req, res) {  
	var name = req.query.diarynotes;

	
	var jsonObject = 		{
			"date": "3/14/2014",
			"notes": name
		};
	console.log(jsonObject);
	
	data["entries"].push(jsonObject);
	res.render('diary', data);
}