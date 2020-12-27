'use strict';


/* Készíts egy BlogPost osztályt, aminek a következők a tagváltozói:
authorName
title
text
publicationDate
Készíts néhány blogposzt objektumot:
"Lorem Ipsum" címmel, Gipsz Jakab által írt, "2000.05.04."-én posztolva
Lorem ipsum dolor sit amet.
"Wait but why" címmel, Tim Urban által írt, "2010.10.10."-én posztolva
A popular long-form, stick-figure-illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" címmel, William által írt, "2017.03.28."-án posztolva
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing. */

class BlogPost {
    authorName;
    title;
    text;
    publicationDate;

    constructor(authorName, title, text, publicationDate){
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

console.log(new BlogPost('Gipsz Jakab', "Lorem Ipsum", 'Lorem ipsum dolor sit amet.', '2000.05.04'));
console.log(new BlogPost('Tim Urban', "Wait but why", 'A popular long-form, stick-figure-illustrated blog about almost everything.',  '2010.10.10.'));
console.log(new BlogPost('William ', "One Engineer Is Trying to Get IBM to Reckon With Trump", 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',  '2017.03.28.'));