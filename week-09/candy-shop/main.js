import CandyShop from './CandyShop.js';
import Lollipop from './Lollipop.js';

const sugarShop = new CandyShop(200);
const chupaChupsLollipop = new Lollipop();  
const poppingLollipop = new Lollipop();  


try {
    sugarShop.createCandy(chupaChupsLollipop);
     sugarShop.createCandy(poppingLollipop);
    
} catch (error) {
    console.error(error.message);
}
sugarShop.raisePrice(50);
try{
    sugarShop.buySuger(1);
    sugarShop.buySuger(2);
}  catch (error) {
    console.error(error.message);
}
console.log(sugarShop);

console.log(sugarShop.toString());
