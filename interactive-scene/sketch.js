let x = 0;
let y = 0;
let speed = 5;
let size = 20;

function setup() {
  createCanvas(910, 710);
  x = width/2;
  y = height/2;
  noStroke();
}

function draw() {
  background(255);
  moveRect();
  fill("black")
  rect(x, y, size, size);
  
}


////////////////////////////////////////////////////////////
function moveRect() {
  if (keyIsDown(87)) { // w
    y -= speed;
    restriction();
  }
  if (keyIsDown(83)) { // s
    y += speed;
    restriction();
  }
  if (keyIsDown(68)) { // d
    x += speed;
    restriction();
  }
  if (keyIsDown(65)) { // a
    x -= speed;
    restriction();
  }
}

function keyPressed() {
  if (key === 32) {
    
  }
}
////////////////////////////////////////////////////////////
function restriction() {
  if (x + size === width) {
    x -= speed;
  }
  if (y + size  === height) {
    y -= speed;
  }
  if (x === 0) {
    x += speed;
  }
  if (y === 0) {
    y += speed;
  }
}