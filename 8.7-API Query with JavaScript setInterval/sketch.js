var x = 0;
var issX;
var issY;
function setup() {
	createCanvas(400,400);
	setInterval(getAsk,300);
}
function getAsk() {
	loadJSON("http://api.open-notify.org/iss-now.json",getData,"JSONP");
}

function getData(data) {
	var temX = data.iss_position.latitude;
	var temY = data.iss_position.longitude;
	console.log(temX + " " + temY);

	
	issX = map(temX,-30,0,0,width);
	issY = map(temY,100,130,0,height);
}
function draw() {
  	background(0);
  	stroke("#ccc");
  	strokeWeight(10);
  	line(x,0,x,height);
  	fill(255);
  	ellipse(issX,issY,20,20);
  	x = x + 5;
  	if(x>width){
  		x = 0;
  	}
}