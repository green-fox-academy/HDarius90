const signup = document.querySelector('#signup');
const dog = document.getElementById('kutya');
const cat = document.querySelector('#cica');

const favPetList = document.getElementsByClassName('fav-pet');

//Ha kiválasztod a Kutyát vagy Cicát, a Feliratkozás gomb legyen elérhető
dog.addEventListener('change', catdogFunction);
cat.addEventListener('change', catdogFunction);

function catdogFunction() {
  signup.disabled = false;
  signup.addEventListener('change', myfunction);
  function myfunction() {
    alert(
      'Köszönjük, sikeresen feliratkoztál a macskákkal kapcsolatos hírlevelünkre'
    );
  }
}

//Ha igennel válaszolsz a macskás hírlevélre, akkor legyen elérhető a Szeretem a macskákat gomb
document.querySelector('#yes').addEventListener('change', catNewsFunction);

function catNewsFunction() {
  document.querySelector('#catlover').disabled = false;
}

//Ha Viktort választod és nemmel válaszolsz a macskás feliratkozásra, akkor csak a feliratkozás gomb legyen elérhető
const viktorHal = document.querySelector('#goldfish');
const noNews = document.querySelector('#no');

viktorHal.addEventListener('change', goldfishFunction);

function goldfishFunction() {
  noNews.addEventListener('change', noNewsFunction);
  function noNewsFunction() {
    signup.disabled = false;
    signup.addEventListener('change', myfunction);
    function myfunction() {
      alert(' Upsz, mégis felvettünk a macskákkal kapcsolatos hírlevelünkre');
    }
  }
}