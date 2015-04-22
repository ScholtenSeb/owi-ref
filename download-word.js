//Require
var fs = require('fs'),
	Docxtemplater = require('docxtemplater');

//Download coverpage
exports.coverpage = function(req, res) {

	var content = fs.readFileSync(__dirname+"/../templates/coverpage.docx", "binary"),
		doc = new Docxtemplater(content),
		fields = req.body;

	doc.setData(fields);
	doc.render();

	var buffer = doc.getZip().generate({type:"nodebuffer"});

	res.setHeader('Content-disposition','attachment; filename=Coverpage.docx');
	res.type('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
	res.end(buffer,'binary');

}

exports.biblio = function(req, res) {

	var content =fs.readFileSync(__dirname+"/../templates/bibliography.docx"),
		doc = new Docxtemplater(content),
		string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."

	doc.setData({
		bibentry:string
	});
	doc.render();

	var buffer = doc.getZip().generate({type:"nodebuffer"});

	res.setHeader('Content-disposition','attachment; filename=Bibliography.docx');
	res.type('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
	res.end(buffer,'binary');

}