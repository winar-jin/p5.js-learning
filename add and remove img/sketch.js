var images = [];
function setup() {
	noCanvas();
	for (var i = 0 ; i <5; i++) {
		var p = createP("want a img ?");
		p.style("background-color","#ccc");
		p.style("padding","20px");
		var anchor = createA("#","add a img!");
		anchor.mousePressed(addImg);
		anchor.parent(p);
	}
	var clear = select("#clear");
	clear.mousePressed(removeImg);
	var hide = select("#hide");
	hide.mousePressed(hideImg);
	var show = select("#show");
	show.mousePressed(showImg);
}

function addImg(){
	var img = createImg("1.jpg");
	img.size(80,80);
	images.push(img);
	var para = this.parent();
	img.parent(para);
}

function removeImg() {
	for (var i = 0; i < images.length; i++) {
		images[i].remove();
	}
	images = [];
}

function hideImg() {
	for (var i = 0; i < images.length; i++) {
		images[i].hide();
	}
}

function showImg() {
	for (var i = 0; i < images.length; i++) {
		images[i].show();
		images[i].style("display","inline");
	}
}


function draw() {
  
}