// var dropzone;
var canvas;
function setup() {
	var canvas = createCanvas(200,200);
	console.log(canvas);
	background(0);

	// dropzone = select('#dropzone');
	// dropzone.dragOver(highlight);
	// dropzone.dragLeave(unhighlight);
	// dropzone.drop(gotFile,unhighlight);
	// canvas.dragOver(highlight);
	// canvas.dragLeave(unhighlight);
	// canvas.drop(gotFile,unhighlight);
	canvas.drop(gotFile);
}

function gotFile(file) {
	createP(file.name + file.size);
	var img = createImg(file.data);
	img.hide();
	image(img,0,0,width,height);
}



function draw() {
  background(244, 248, 252);
    line(mouseX, mouseY, pmouseX, pmouseY);
    print(pmouseX + " -> " + mouseX);
  if(mouseIsPressed){
  	console.log("mouseIsPressed");
  	line(pmouseX,pmouseY,mouseX,mouseY);
  	console.log('mouseX = '+mouseX +" pmouseX = " + pmouseX);
  	console.log('mouseY = '+mouseY +" pmouseY = " + pmouseY);
	stroke(255);
  }
  // line(mouseX,mouseY.pmouseX,pmouseY);
}

// function highlight() {
// 	dropzone.style('background-color','#ccc');
// }
// function unhighlight() {
// 	dropzone.style('background-color','#fff');
// }