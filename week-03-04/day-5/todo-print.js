'use strict';


/* A "todoText" lista kezdődjön a "My todos:" szöveggel (a jelenlegihez add hozzá ezt a szöveget úgy, hogy elé kerüljön)
Add hozzá a " - Download games" tennivalót a lista végére
Add hozzá a " - Diablo" tennivalót a lista végére, 2 szóköz indentációval
Várt eredmény: 

My todos:
 - Buy milk
 - Download games
     - Diablo

     */

let todoText = " - Buy milk\n";
todoText = todoText.split('');
todoText.unshift("My todos:\n");
todoText.push(" - Download games\n");
todoText.push("   - Diablo\n");
todoText = todoText.join('');
console.log(todoText);

