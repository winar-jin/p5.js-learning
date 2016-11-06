var bgcolor;
var canvas;
var button;
var slider;
var nameP;
var input;
function setup() {
	canvas = createCanvas(200,200);
	bgcolor = color(200);
	button = createButton("GO GO GO!");
	button.mousePressed(changeBgcolor);
	slider = createSlider(10,100,20);
	nameP = createP("Type your name !");
	input = createInput("type something");
	nameP.mouseOver(overpara);
	nameP.mouseOut(outpara);
	// input.changed(changeText);
	input.input(changeText);
	nameP.style("color","#ccc");
}
function changeText() {
	nameP.html(input.value());
	console.log("you are typing :" ,this.value());
}
function changeBgcolor() {
	bgcolor = color(random(255));
}

// function mousePressed() {
// 	changeBgcolor();
// }

function overpara() {
	nameP.html("your mouse is over me !");
}

function outpara() {
	nameP.html("your mouse is out of me !");
}

function draw() {
  background(bgcolor);
  fill(255,0,175);
  // rect(100,100,50,50);
  ellipse(100,100,slider.value(),slider.value());
  // nameP.html(input.value());
  text(input.value(),10,50);
}