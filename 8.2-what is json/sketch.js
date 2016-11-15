// var flower;
var animal;
function preload() {
	// flower = loadJSON("flower.json");
	animal = loadJSON("animal.json");
}

function setup() {
	noCanvas();
	// createCanvas(400,400);
	// flower = {
	// 	name: "sunflower",
	// 	col: color(200,220,0)
	// }

	// var birdName = animal.birds[1].members[1];
	// createP(birdName);

	var family = animal.birds;
	for(var i = 0;i<family.length;i++){
		createElement("h1",family[i].family);
		var list = family[i].members;
		for(var j = 0;j<list.length;j++){
			createElement("li",list[j]);
		}
	}
}

function draw() {
  // background(0);
  // fill(flower.r,flower.g,flower.b);
  // text(flower.name,100,100);
}