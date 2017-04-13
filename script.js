var img;
function preload() {
  img = loadImage("drawable/box.png");
}

function setup() {
	createCanvas(600, 480);
	background(51);
	imageMode(CENTER)
	image(img, width / 2, height / 2, 100, 100);
	image(img, 3*width / 4, height / 2, 100, 100);
	image(img, width / 4, height / 2, 100, 100);
}