exports.file = function (req, res) {

	var fs = require('fs'),
		Docxtemplater = require('docxtemplater');

	var content = fs.readFileSync(__dirname+"/input/input.docx", "binary");

	var doc = new Docxtemplater( content );


	doc.setData({
		"test":"Hello World"
	});

	doc.render();

	var buf = doc.getZip().generate({type:"nodebuffer"});

	res.setHeader('Content-disposition','attachment; filename=Coverpage');
	res.type('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
	res.end(buf,'binary');

};

exports.Coverpage = function(req, res) {
	console.log(req.body);
	res.send('Hello world');
}

