var link1 = "http://api.wordnik.com:80/v4/word.json/";
var word = "fancy";
var link2 = "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
var link = link1 + word + link2;
function setup() {
	noCanvas();
	var caoch = createA("#",word);
	caoch.mousePressed(getDef);
	function getDef() {
		loadJSON(link,getData);
	}
}

function getData(data) {
	console.log();
	createP(data[1].text);
}
// function draw() {
  
// }