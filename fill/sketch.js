var mic;
function windowResized() {
	console.log("windowResized");
	resizeCanvas(windowWidth,windowHeight);
}
function setup() {
	createCanvas(windowWidth,windowHeight);
	
}

function draw() {
  	if(mouseIsPressed){
  		fill(0);
  	}else{
  		fill(255);
  	}
  	ellipse(pmouseX,pmouseY,300,300);
}