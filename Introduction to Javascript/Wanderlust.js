/*
This program is called Wanderlust. It is from chapt 12 of the 
Introduction to Javascript track from Codecademy. It allows a
user to submit a search for a destination and then the program
returns the weather and popular attractions for the 
destination. It uses APIs from Foursquare and APIXU.
*/

// Here is necessary Foursquare API Info
//It's used later for the API calls. 
const clientId = 'INDBPLKTB4EXCKP3CQYS342SJ4F3CT51S01HFX0HCN04AZUT';
const clientSecret = 'EIYCYLIYZV05PQ4SL0DCHSYLP3ERULP2FXOMQHAMJJH3ET0I';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

// Here is necessary APIXU Info
//It's called later for the API calls. 
const apiKey = 'a9ac3c69cdb8499ead524551172606';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// Page Elements
//These are used throughout the program to grab items in 
//the HTML file. 
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// AJAX functions
//async functions store a promise until the requested data is
//delivered. input.val is what's typed in to the search field.
//urlToFetch uses the API info to make a coherent call for 
//the information.
async function getVenues() {
  const cityToLand = $input.val();
  const urlToFetch = url + cityToLand + '&venuePhotos=1&limit=10&client_id=' +
    clientId + '&client_secret=' + clientSecret + '&v=20170305';
//The try statement lets you test a block of code for errors.
//await & fetch are ways of requesting data and holding a 
//promise until that data has been acquired. 
  try {
    let response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      let venues = jsonResponse.response.groups[0].items.map(spot => spot.venue);
      console.log(venues);
      return venues;
    }
  } catch (error) {
    console.log(error);
  }
}
//This is another asnchronous function. This time it's used to 
//get the weather forecast. 
async function getForecast() {
  const urlToFetch = forecastUrl + apiKey + '&q=' + $input.val() + '&days=4&hour=11';
//Another try statement. See above explanation. 
  try {
    let response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      let days = jsonResponse.forecast.forecastday;
      return days;
    }
  } catch (error) {
    console.log(error);
  }
}

// Render functions
// This creates the HTML additions, so the user can see what 
// was returned. It returns three values for venue. 
function renderVenues(venues) {
  $venueDivs.forEach(($venue, index) => {
    let venueContent =
      '<h2>' + venues[index].name + '</h2>' +
      '<img class="venueimage" src="' + imgPrefix +
      venues[index].photos.groups[0].items[0].suffix + '"/>' +
      '<h3>Address:</h3>' +
      '<p>' + venues[index].location.address + '</p>' +
      '<p>' + venues[index].location.city + '</p>' +
      '<p>' + venues[index].location.country + '</p>';
    $venue.append(venueContent);
  });
  $destination.append('<h2>' + venues[0].location.city + '</h2>');
}
//This creates the HTML component of the requested forecast
//data. 
function renderForecast(days) {
  $weatherDivs.forEach(($day, index) => {
    let weatherContent =
      '<h2> High: ' + days[index].day.maxtemp_f + '</h2>' +
      '<h2> Low: ' + days[index].day.mintemp_f + '</h2>' +
      '<img src="http://' + days[index].hour[0].condition.icon +
      '" class="weathericon" />' +
      '<h2>' + weekDays[(new Date(days[index].date)).getDay()] + '</h2>';
    $day.append(weatherContent);
  });
}
//This runs the whole program, calling each item. 
function executeSearch() {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}
//This causes the program to run once a click event is "heard"
//at the submit button. 
$submit.click(executeSearch)

