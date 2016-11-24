var clock;
var flag = 1;
var interval;
var i = 0;
var button;
function setup() {
	noCanvas();
	clock = createP("Timer!");
	button = createButton("Strat Counting!");
	button.mousePressed(doTimer);
}
function addSenconds() {
	clock.html(i);
	i = i + 1;
}

function doTimer() {
	if(flag === 1){
		interval = setInterval(addSenconds,500);
		flag = 0;
		button.html("Stop Counting!");
	}else{
		clearInterval(interval);
		flag = 1;
		button.html("Start Counting!");
		createP(i-1);
	}
}
function draw() {
  
}