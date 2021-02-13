'use strict';

const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&page=1&api-key=ZXGTxa7eCqU3B8lhPsCHT739uzjZRLPB';

document.querySelector('button').addEventListener("click", () => {

  const data = fetch(url)
    .then(response => response.json())
    .catch(reject => console.log('Hiba: ', reject.message));

  data.then(r => {
    listArticles(r.response.docs);
  });
});


function listArticles(articles) {

  const table = document.querySelector('table');

  articles.forEach(article => {
    const row = document.createElement('tr');
    const headline = document.createElement('td');
    const snippet = document.createElement('td');
    const pubDate = document.createElement('td');

    headline.textContent = article.headline.main;
    snippet.textContent = article.snippet;
    pubDate.textContent = article.pub_date;

    row.appendChild(headline);
    row.appendChild(snippet);
    row.appendChild(pubDate);

    table.appendChild(row);

  });
}
