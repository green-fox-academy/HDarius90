var fs = require('fs');
let content = fs.readFileSync('./content.txt', 'utf-8');
let words = content.split(' ');
let swearWords = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];
let swearCounter = 0;
let result;
for (let i = 0; i < words.length; i++){
    for(let j = 0; j < swearWords.length; j++){
        if(words[i] === swearWords[j]){
            swearCounter++;
            words.splice(i, 1);
        }
    }
}
content = words.join(' ');
console.log('swear words found: ' + swearCounter);