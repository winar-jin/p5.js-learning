var dropzone;
var canvas;
function setup() {
	var canvas = createCanvas(200,200);
	console.log(canvas);
	background(100);

	dropzone = select('#dropzone');
	dropzone.dragOver(highlight);
	dropzone.dragLeave(unhighlight);
	dropzone.drop(gotFile,unhighlight);
	canvas.dragOver(highlight);
	canvas.dragLeave(unhighlight);
	canvas.drop(gotFile,unhighlight);
	//canvas.drop(gotFile);
}

function gotFile(file) {
	createP(file.name + file.size);
	var img = createImg(file.data);
	//img.show();
	//img.size(100,100);
	image(img,0,0,width/2,height/2);
}



function draw() {
  background(100, 248, 252);
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

function highlight() {
	dropzone.style('background-color','#ccc');
}
function unhighlight() {
	dropzone.style('background-color','#fff');
}