


var url = 'https://restcountries.eu/rest/v1/name/';
var url1 = 'https://restcountries.eu/rest/v1/alpha?codes=';

var countriesList = $('#countries');
var neighbourList = $("#neighbours");

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

function showNeigboursList(resp) {
     // neighbourList.empty();
     var country = resp[0].name;
     var countryToAdd = ' ' + resp[0].nativeName + ',';
     var textToDisplay = neighbourList.html();
     neighbourList.text(textToDisplay + countryToAdd);
}

function showCountriesList(response) {
  	countriesList.empty();
  	neighbourList.empty();
	response.forEach(function(item) {
   		$('<li>').text(item.name).appendTo(countriesList);
	});
	
	var borderCountry = response[0].borders;
	for(var i in borderCountry){
	$.ajax({
	  		url: url1 + borderCountry[i],
	  		method: 'GET',
	  		success: showNeigboursList
	  	});
	console.log(borderCountry[i]);

	}
	
}

// function showNeigboursList(resp) {
// 	 neighbourList.empty();
// 	 console.log("odp z serwera", resp);
// 	 console.log("nazwa",resp[0].name);
// 	 // var country = resp[0].name;
	
// 	// neighbourList.text(country).appendTo(neighbourList + " , ");
// 	var countryToAdd = ' ' + resp[0].nativeName + ',';
// 	neighbourList.innerHTML += countryToAdd;
	
	
// }
