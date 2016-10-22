var song;
var fft;
var button;
var w;

var volhistory = [];

function windowResized() {
	console.log("windowResized");
	resizeCanvas(windowWidth,windowHeight);
}

function toggleSong() {
  if(song.isPlaying()){
    song.pause();
  }else{
    song.play();
  }
}

function preload() {
  song = loadSound("ifyou.mp3");
}

function setup() {
	createCanvas(256,256);
	angleMode(DEGREES);
  colorMode(HSB);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9,64);
  // w = width/64;
}

function draw() {
  	background(0);
    var spectrum = fft.analyze();
    // console.log(spectrum.length);
    // stroke(255);
    noStroke();
    translate(width/2,height/2);
    // beginShape();
    for (var i = 0; i <=spectrum.length; i++ ) {
      var angle = map(i,0,spectrum.length,0,360);
      var amp = spectrum[i];
      var r = map(amp,0,256,40,100);
      // fill(i,255,255);
      var x = r * cos(angle);
      var y = r * sin(angle);
      stroke(i,255,255);
      line(0,0,x,y);
      // vertex(x,y);
      // var y = map(amp,0,256,height,0);
      // line(i*w,height,i*w,y);
      // fill(i,255,255);
      // rect(i * w,y,w,height-y);
    }
    // endShape();
    // stroke(255);
    // noFill();
}