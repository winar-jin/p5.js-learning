var weather;
function setup() {
	createCanvas(400,400);
	loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Beijing,CN&APPID=eacb407a6f1517cc3ed33ba1b6485e2d",getData,"JSONP");

}

function getData(data) {
	weather = data;
	console.log(weather);
}

function draw() {
	background(0);
	fill("#EEE");
	if(weather){         //先判断数据有没有加载成功再使用
	  	ellipse(100,200,weather.coord.lon,weather.coord.lon);
	  	ellipse(300,100,weather.coord.lat,weather.coord.lat);
	}
}