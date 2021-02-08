'use strict';
//import fs from 'fs';
//import util from 'util';
import cors from 'cors';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(
    import.meta.url));
//const express = require('express');
//const path = require('path');
const app = express();
const port = 5000;

app.use(express.static('assets'));
app.use(express.json());
app.use(cors());


/*
app.get("/", (req, res) => {
    res.send("OK!");
  });
*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get('/doubling', (req, res) => {
    //doubling?input=15
    if (req.query.input === undefined) {
        let error = {
            "error": "Please provide an input!"
        }
        res.json(error);
        return;
    }
    let numberToDoubling = req.query.input; //5
    const output = {
        "received": parseInt(numberToDoubling),
        "result": 2 * numberToDoubling
    };
    res.json(output);
});



app.get('/greeter', (req, res) => {

    if (req.query.name === undefined && req.query.title === undefined) {
        let error = {
            "error": "Please provide a name and a title!"
        }
        res.status(400).json(error);
        return;
    }
    if (req.query.name === undefined) {
        let error = {
            "error": "Please provide a name!"
        }
        res.json(error);
        return;
    }
    if (req.query.title === undefined) {
        let error = {
            "error": "Please provide a title!"
        }
        res.status(400).json(error);
        return;
    }
    //greeter?name=Petike&title=student
    let name = req.query.name;
    let title = req.query.title;
    const output = {
        "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    };
    res.json(output);
});



app.get('/appenda/:appendable', (req, res) => {
    let appendable = req.params.appendable; //kuty

    function append(str) {
        let newStr = str.concat('a');
        return newStr;
    }
    let output = {
        "appended": append(appendable)
    };

    res.json(output);
});

app.get('/appenda', (req, res) => {
    res.status(404).json({});

})



app.post('/dountil/:action', (req, res) => {
    const number = req.body.until;
    const action = req.params.action;

    let output;
    //postmanben működik, böngészőben nem
    if (!number) {
        output = {
            "error": "Please provide a number!"
        }
    } else if (action === 'sum') {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        output = {
            "result": sum
        }
    } else if (action === 'factor') {
        let factor = 1;
        for (let i = 1; i <= number; i++) {
            factor *= i;
        }
        output = {
            "result": factor
        }
    }
    res.send(output);
});


function getResult(what, numbers) {
    let result = 0;
    for (let i = 1; i <= numbers.length; i++) {

        if (what === 'multiply') {
            if (result === 0) {
                result = 1;
            }
            result = result * numbers[i - 1];

        } else if (what === 'sum') {
            const reducer = (a, b) => a + b;
            result = numbers.reduce(reducer);

        } else if (what === 'double') {
            if (result === 0) {
                result = [];
            }
            result.push(numbers[i - 1] * 2);
        }
    }
    return result;
}


app.post('/arrays', (req, res) => {
    let what = req.body.what;
    let numbers = req.body.numbers;
    let output;
    if (what !== 'sum' || what !== 'multiply' || what !== 'double') {
        output = {
            "error": "nem definiált művelete"
        }
    }
    if (numbers === undefined) {
        output = {
            "error": "Kérem, adja meg a számokat!"
        }

    }
    if (what === undefined) {
        output = {
            "error": "Kérem, adja meg a műveletet!"
        }

    } else {
        output = {
            "result": getResult(what, numbers)
        }
    }
    res.send(output);
})







app.listen(port, () => {
    console.log(`App listens on ${port}.`);
});