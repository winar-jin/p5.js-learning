var mic;
function windowResized() {
	console.log("windowResized");
	resizeCanvas(windowWidth,windowHeight);
}
function setup() {
	createCanvas(windowWidth,windowHeight);
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
  	background(0);
  	var vol = mic.getLevel();
  	//console.log(vol);
  	ellipse(width/2,height/2,vol*300,vol*300);
}