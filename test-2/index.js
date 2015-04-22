var officegen = require("officegen-2");

var docx = officegen ( 'docx' );

var pObj = docx.createP();
pObj.addText ( 'Simple' );

console.log(docx);
