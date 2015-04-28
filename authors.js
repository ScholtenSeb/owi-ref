/**
 * Created by sebastian on 15/04/26.
 */

function Authors() {

    this.authors = [];

    this.addAuthor = function(fNs, lN) {

        var author = {};
        author.firstNames = fNs;
        author.lastName = lN;
        author.initials = "";

        author.firstNames.map(function (name)  {
            author.initials += name[0];
        });

        this.authors.push(author);
        return author;

    }

    this.getStr = function() {
        if ( this.authors.length > 2 ) {

            var str = "";
            var tempAuthors = this.authors;
            tempAuthors.map(function(author, index){
                str += author.lastName + ", " + author.initials;
                if ( index == tempAuthors.length -2 ) {
                    str += " & ";
                } else if ( index != tempAuthors.length -1 ) {
                    str += ", ";
                }
            });
            str += ".";
            return str;

        } else if ( this.authors.length == 2 ) {
            return ( this.authors[0].lastName + ", " + this.authors[0].initials + " & " + this.authors[1].lastName + ", " + this.authors[1].initials + "." );

        } else {
            return ( this.authors[0].lastName + ", " + this.authors[0].initials + "." );
        }
    }
}

var myAuthors = new Authors();

myAuthors.addAuthor(['Jan','Sebastian'],'Scholten');


console.log(myAuthors.getStr());

myAuthors.addAuthor(['Darryn'],'Clarke');

console.log(myAuthors.getStr());

myAuthors.addAuthor(['Mike'],'Maynard');

console.log(myAuthors.getStr());

myAuthors.addAuthor(['Marcel','Herman'],'Scholten');

console.log(myAuthors.getStr());