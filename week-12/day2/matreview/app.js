import fs from 'fs';
import util from 'util';
import express from 'express';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(
    import.meta.url));

// console.log('import.meta.url', import.meta.url);
// console.log('fileURLToPath', fileURLToPath(import.meta.url));
// console.log('dirname', dirname(fileURLToPath(import.meta.url)));
// console.log('process.cwd', process.cwd());
// console.log('__dirname', __dirname);

const app = express();
const port = 3456; // 0-65535

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// console.log('resolve', path.resolve(__dirname, 'views'));
// console.log('join', path.join(__dirname, '../../week-01'));

// app.use(express.static('public'));
// static belseje séma:
// app.use((req, res, next) => {
//     // public
//     const fileName = req.originalUrl;
//     const filePath = path.join(__dirname, 'public', fileName);

//     if (fs.existsSync(filePath)) {
//         res.sendFile(filePath);
//     }
//     else next();
// });

app.get('/hello', (req, res) => {
    res.render('hello', { helloWho: null });
});

app.get('/requestObject', (req, res) => {
    // req.name
    // req.query.name
    const queryStringObj = req.query; // ?xy=z&ab=c...
    /*
    queryStringObj = {
        name: 'QueryString',
        otherParam: '1234'
    }
    */

    console.log('req.name', req.name);
    console.log('req.query.name', queryStringObj.name);
    res.send('');
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'EJS Mat Review',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit fuga similique consequatur, dolores facere voluptate. Doloribus repellendus, earum velit reprehenderit quam expedita magnam excepturi corporis nisi neque libero necessitatibus.'
    });
});

app.get('/:name', (req, res) => {
    const requestParamObject = req.params;
    console.log('req.params.name', requestParamObject.name);

    res.send('');
});

// JSON BODY-parser (application/json)
app.use(express.json());
// Form Data BODY-parser (application/www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.post('/hello', (req, res) => {

    // request value? body
    // req.body
    const requestBodyObject = req.body;

    let helloWho = requestBodyObject.helloWho;

    res.render('hello', {
        helloWho /*: helloWho*/
    });
    // POJO = Plain Old JavaScript Object
});

app.listen(port, () => {
    console.log(`App listens on ${ port }.`);
});


//json - [{"username":"szirmi","password":"almafa"},{"username":"greenfox","password":"seo"},{"username":"szirmi","password":"almafa"}]