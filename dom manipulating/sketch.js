var bgcolor;
var canvas;
var button;
function setup() {
	canvas = createCanvas(200,200);
	bgcolor = color(200);
	button = createButton("GO GO GO!");
	button.mousePressed(changeBgcolor);
}

function changeBgcolor() {
	bgcolor = color(random(255));
}

// function mousePressed() {
// 	changeBgcolor();
// }

function draw() {
  background(bgcolor);
  fill(255,0,175);
  rect(100,100,50,50);
}