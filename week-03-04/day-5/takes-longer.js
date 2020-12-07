'use strict';


 /* Az idézet mentésekor lemezhiba történt. Kérlek, javítsd ki!
Az "always takes longer than" szövegrészletnek az "It" és a "you" között kell szerepelnie, tehát helyesen: Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.
Használd a quote változó darabjait (a szöveg újra definiálása helyett). */

let quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";
quote = quote.slice(0,20) + ' always takes longer than'+ quote.slice(20);
console.log(quote);