import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3040;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

const cocktails = [{
        name: 'GIN FIZZ',
        price: 1520,
        contains: ['gin', 'sugar', 'lemon juice', 'soda'],
        isAlcoholic: true,
    },
    {
        name: 'BLOODY MARY',
        price: 1650,
        contains: ['vodka', 'tomato juice', 'spices'],
        isAlcoholic: true,
    },
    {
        name: 'SEX ON THE BEACH',
        price: 1850,
        contains: [
            'vodka',
            'peach schnapps',
            'orange juice',
            'cranberry juice'
        ],
        isAlcoholic: true,
    },
    {
        name: 'CUBA LIBRE',
        price: 1850,
        contains: ['rum', 'cola', 'lime juice'],
        isAlcoholic: true,
    },
    {
        name: 'MOJITO',
        price: 1850,
        contains: ['rum', 'sugar', 'lime juice', 'soda water'],
        isAlcoholic: true,
    },
    {
        name: 'LONG ISLAND ICE TEA',
        price: 2450,
        contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'],
        isAlcoholic: true,
    },
    {
        name: 'VIRGIN MOJITO',
        price: 990,
        contains: ['sugar', 'lime juice', 'soda water'],
        isAlcoholic: false,
    },
    {
        name: 'SAFE SEX ON THE BEACH',
        price: 990,
        contains: ['peach schnapps', 'orange juice', 'cranberry juice'],
        isAlcoholic: false,
    },
];

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.get('/', (req, res) => {
    let alcoholType;
    if (req.query.alcohol) {
        //http://localhost:3040/?alcohol:alcohol
        alcoholType = req.query.alcohol;


        let filteredCocktails = [];
        for (let cocktail of cocktails) {
            //pl http://localhost:3040/?alcohol=gin
            if (cocktail.contains.includes(alcoholType)) {
                filteredCocktails.push(cocktail);
            }
        }

        res.render('home', {
            cocktails: filteredCocktails,
            alcohols: alcoholList
        });
    } else {
        res.render('home', {
            cocktails: cocktails,
            alcohols: alcoholList
        });
    }
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});