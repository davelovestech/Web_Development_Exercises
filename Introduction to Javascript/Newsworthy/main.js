/*
This Codecademy project is called Newsworthy. It's an instruction on using 
APIs. This project uses APIs from NewsAPI.org and Twitter to fetch, and then
display, news information from three different news sources. It was my first
time signing up for developer accounts for the APIs that'll be needed. It was
very exciting to see this project post to my personal Twitter account! :D
*/
// Page Elements
//These constants are for selecting the index.html file by different ids.
const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data
//Here are all the items required to make API calls. The most important
//component is my personal API key.
const apiKey = '73b36fbee62b48f6881633408040acfb';
const engadgetUrl = 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=73b36fbee62b48f6881633408040acfb';
const recodeUrl = 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=73b36fbee62b48f6881633408040acfb';
const nextWebUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=73b36fbee62b48f6881633408040acfb';

// Request News Function
/*
This function grabs 
*/
async function getNews(url) {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  let articlesArray = jsonResponse.articles.slice(0,5)
  console.log(jsonResponse);
  console.log(articlesArray);
  return articlesArray;
  
}
// Render Function
/*

*/
function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.urlToImage + '" />' +
      '   <a href="https://twitter.com/davehalvorsen" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button></a>' +
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function
/*

*/
function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      // Call Post Status function here
      Twitter.postStatus(newsObjects[i].url);
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners
/*
There are three different calls on three different news sites. .addEventListener checks for mouse 'click's on the specified constant
document.getElementById that it is called upon (see ~line 11 of main.js).
It then runs the function within the curly brackets. The getNews function
is called with the selected news website's url, which returns the 5 article
array. Then, that's passed into the renderNews function, which creates
the HTML layout. That returns the structured articles, which are then
passed as a parameter into the sendTweets function. 
*/
engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(recodeUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);
