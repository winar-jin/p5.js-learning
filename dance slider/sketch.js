// Canvas 版本
// var angle = 0;
// var slider;
// function setup() {
// 	createCanvas(200,200);
// 	background(200);
// 	slider = createSlider(0,255,50);
// }

// function draw() {
//   	var bgc = map(sin(angle),-1,1,0,255);
//   	slider.value(bgc);
//   	background(slider.value());
//   	angle += 0.1;
// }



// no Canvas 版本
// var angle = 0;
// var sliders = [];
// function setup() {
// 	noCanvas();
// 	for (var i = 0; i < 100; i++) {
// 		sliders[i] = createSlider(0,255,0);
// 	}
// }

// function draw() {
// 	var offset = 0;
// 	for (var i = 0; i < sliders.length; i++) {
// 		var x = map(sin(angle+offset),-1,1,0,255);
// 		sliders[i].value(x);
// 		offset += 0.25;
// 	}
// 	angle += 0.1;
// }



var angle = 0;
var sliders = [];
function setup() {
	noCanvas();
	for (var i = 0; i < 255; i++) {
		sliders[i] = createSlider(0,255,i);
	}
	sliders[0].input(adjust);
}

function draw() {
	// var offset = 0;
	
	// angle += 0.1;
}

function adjust() {
	 for (var i = 1; i < sliders.length; i++) {
		var x = sliders[0].value();
		var x1 = map(sin(x+i),-1,1,0,255);
		sliders[i].value(x1);
		// offset += 0.25;
	}
}


