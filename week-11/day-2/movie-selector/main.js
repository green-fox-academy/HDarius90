const movieList = document.getElementById('movies');

function myFunction() {
  let genre = document.getElementById('genre').value;

  for (let i = 0; i < movieList.length; i++) {
    if (genre != movieList[i].classList) {
      movieList[i].disabled = true;
      movieList[i].hidden = true;
    }
  }
}

function myMovie() {
  let myText = document.getElementById('movies').value;
  document.getElementById('movie-text').innerHTML = ' ' + myText;
}