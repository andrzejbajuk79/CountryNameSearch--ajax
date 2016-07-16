// for (var i = 0; i < 100; i++) {
// 	var request = new XMLHttpRequest();
// 	request.open('GET', 'data.txt', false);
// 	request.send();
// 	if (request.status===200) {
// 		console.log(request);
// 		document.writeln(request.responseText);
// 	}	
// }
// $("#button").click(function() {
// 	$.ajax({
// 		type: "GET",
// 		url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
// 		succes: function(data) {
// 			console.log(data);
// 		},
// 		dataType: "jsonp"
// 	});  
//  });

var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');
button.addEventListener('click', function(){
  getJoke();
});

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerText = response.value.joke;
  });
  xhr.send();
}