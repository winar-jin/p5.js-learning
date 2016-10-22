function setup() {
	// // image1
	// img1 = createImage(66, 66);
	// img1.loadPixels();
	// for (i = 0; i < img1.width; i++) {
	//   for (j = 0; j < img1.height; j++) {
	//     img1.set(i, j, color(i, i*2, i*3));
	//   }
	// }
	// img1.updatePixels();
	// image(img1, width/2, width/2);



	// // image2
	// img2 = createImage(66, 66);
	// img2.loadPixels();
	// for (i = 0; i < img2.width; i++) {
	//   for (j = 0; j < img2.height; j++) {
	//     img2.set(i, j, color(0, 90, 102, i % img2.width * 2));
	//   }
	// }
	// img2.updatePixels();
	// image(img2, 17, 17);
	// image(img2, 34, 34);

	// image3
	var pink = color(0, 0, 0);
	img3 = createImage(66, 66);
	console.log(img3);
	img3.loadPixels();
	var d = pixelDensity;
	var halfImage = 4 * (width * d) * (height/2 * d);
	for (var i = 0; i < halfImage; i+=4) {
	  img3.pixels[i] = red(pink);
	  img3.pixels[i+1] = green(pink);
	  img3.pixels[i+2] = blue(pink);
	  img3.pixels[i+3] = alpha(pink);
	}
	img3.updatePixels();
	image(img3, 17, 17);

}

function draw() {

}