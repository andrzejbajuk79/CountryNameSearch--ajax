

var url = 'http://api.icndb.com/jokes/random';

// var button = document.getElementById('get-joke');
var $button = $('#get-joke').click(function() {
	getJoke();
});
// var paragraph = document.getElementById('joke');
var $paragraph = $('#joke');
// button.addEventListener('click', function(){
//   getJoke();
// });

// function getJoke() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.addEventListener('load', function(){
//     var response = JSON.parse(xhr.response);
//     paragraph.innerText = response.value.joke;
//   });
//   xhr.send();
// }

function getJoke() {
$.ajax({
	method: 'GET',
	url: url, 
	success: function(res) {
		$paragraph.text(res.value.joke);
	}

});
}


//cwiczenie nr 2
//
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";
function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = "Unknown author";
	}
	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
	if (tweetText.length > 140) {
		getQuote();
	} else {
		var tweet = tweetLink + tweetText;
		$('.quote').text(input.quoteText);
		$('.author').text("Author: " + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
	
}
$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	});
});

//cwiczenie 3

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
  	countriesList.empty();
	resp.forEach(function(item) {
   		$('<li>').text(item.name).appendTo(countriesList);
	});
}

