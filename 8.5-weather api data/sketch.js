var weather;
function setup() {
	createCanvas(400,400);
	var host = "http://api.openweathermap.org/data/2.5/weather?q=";
	var city = "Beijing,CN";
	var appid = "&APPID=eacb407a6f1517cc3ed33ba1b6485e2d";
	var subCity = select("#submit");
	subCity.mousePressed(getWeather);
	var cityInput = select("#city");


	function getWeather() {
		city = cityInput.value();
		var path = host + city + appid;
		loadJSON(path,getData,"JSONP");
	}

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