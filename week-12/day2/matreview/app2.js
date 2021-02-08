import express from 'express';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'formViews'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/reg', (req, res) => {
    res.render('index', {
        isRegistration: true,
        isRegistrationSuccessful: false
    });
});

app.post('/reg', (req, res) => {

    const user = req.body;

    // users.json
    try {
        const usersFileContent = fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8');
        const users = JSON.parse(usersFileContent);

        users.push(user);

        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users));
    } catch (err) {
        res.status(500).send();
        return;
    }

    res.render('index', {
        isRegistration: true,
        isRegistrationSuccessful: true,
        username: user.username
    });
});

app.listen(port, () => {
    console.log(`App listens on port ${ port }`);
});