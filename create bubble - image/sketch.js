var bubbles = [];
var imgs = [];
function setup() {
	createCanvas(600,400);
}
function preload() {
	for (var i = 0; i <4; i++) {
		imgs[i] = loadImage("image/smile" + (i+1) + ".png");	
	}
}

function mousePressed() {
	var r = floor(random(0,imgs.length));
	var b = new Bubble(mouseX,mouseY,imgs[r]);
	bubbles.push(b);
}
function draw() {
  	background(0);
  	for(var i = bubbles.length - 1;i>=0;i--){
  		bubbles[i].update();
  		bubbles[i].display();
  	}
}