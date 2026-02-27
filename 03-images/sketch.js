// Image Demo

let marioImg;

function preload() {
  marioImg = loadImage("mario.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(marioImg, mouseX - 100, mouseY);
}
