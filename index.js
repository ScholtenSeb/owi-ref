// OWI-REF APP

var express = require("express");
var ejs = require("ejs");
var bodyParser = require('body-parser');
// var download = require('./docx.js');
var morgan = require('morgan');

var downloadWord = require('./modules/download-word');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', function (req,res) {
	res.render('index.html');
});

// app.post('/download', download.file);
app.post('/coverpage', downloadWord.coverpage);
app.post('/biblio', downloadWord.biblio);

app.set('views', __dirname + '/views');  
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.listen(3000,function () {
	console.log("listening on port 3000");
})
