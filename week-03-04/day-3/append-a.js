'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!

const animals = ['koal', 'pand', 'zebr'];
const newAnimals = animals.map(animalName => animalName + 'a');

console.log(newAnimals);