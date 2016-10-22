function Bubble(x,y,img) {
	this.x = x;
	this.y = y;
	this.img = img;
	this.display = function() {
		// stroke(255);
		// fill(255,100);
		// ellipse(this.x,this.y,48,48);
		imageMode(CENTER);
		image(this.img,this.x,this.y);

	}

	this.update = function () {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
		// this.lifespan = this.lifespan - 1;
	}
}