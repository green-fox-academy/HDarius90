'use strict';

//wrapper function
//function(__dirname, __filename, module, require, exports){

//console.log(__dirname);
//C:\Users\Bogi\Desktop\greenfox1\greenfox\boglarka-pixel\week-12\node
//console.log(__filename);
//C:\Users\Bogi\Desktop\greenfox1\greenfox\boglarka-pixel\week-12\node\index.js 

const add = require('./calculator.js');

console.log(add(2, 3));


//szerver létrehozása

const http = require('http');


const server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello, World!');
})
server.listen(8080);

//}