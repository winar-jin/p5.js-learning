var particles = [];
function setup() {
    createCanvas(600,600);
}
function mousePressed(){
    console.log(mouseX,mouseY);
    particles.push(new Particle(mouseX,mouseY));
}
function draw() {
    background(200);
    for(var i in particles){
        particles[i].update();
        particles[i].show();
    }
}