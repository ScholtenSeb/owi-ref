//Book model

var newField = function(f, i) {
    return {
        field: f,
        italics: i || false
    }
};




function Book(theAuthor, theYear, theTitle, thePublishedLocation, thePublisher) {

    this.author = newField(theAuthor);
    this.year = newField(theYear);
    this.title = newField(theTitle, true);
    this.publishedLocation = newField(thePublishedLocation);
    this.publisher = newField(thePublisher);

    //this.biblioStr = "bjnebt";
    //this.intextStr = "ergjnetr (ebt)";

    this.getIntext = function() {

    };

    this.getBiblio = function() {

    }

}

var myBook = new Book('Sebastian Scholten', 2013, "My NodeJS Book", "Pretoria", "Sebs Books");

//console.log(myBook);