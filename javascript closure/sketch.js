function setup() {
	noCanvas();
	var time1 = createP("time1");
	var time2 = createP("time2");
	setTimeAnimate(time1,100);
	setTimeAnimate(time2,500);
}

function setTimeAnimate(elt,wait) {
	var count = 0;
	setInterval(doTime,wait);
	function doTime() {
		elt.html(count);
		count++;
	}
}