var bgcolor;
var canvas;
var button;
var slider;
var nameP;
var input;
var paragraph;
var paragraphs;
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
	// input.changed(changeText); //当输入框改变后按下了ENTER键触发该事件
	input.input(changeText);   //当输入框里面只要一发生变化就会触发该事件
	nameP.style("color","#ccc");

	// for(var i =0;i<100;i++){
	// 	var newp = createP("rainbow");
	// 	newp.position(random(500),random(500));
	// }

	var aa = select("#aa");
	aa.parent("#unicorn");

	var paragraph = select("#unicorn");
	paragraph.mouseOver(changeItsBg);
	var paragraphs = selectAll("p");
	for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style("background","#ccc");
	}
	// var paragraph = select("#unicorn");
	paragraph.style("background","#f0f");
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

function changeItsBg() {
	this.style("background","#000");
}

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