let button = false;
let x = 400;
let y = 400;
let w = 100;
let h = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (button) {
    background(255);
    stroke(0);
    
    y = 400;
    w = 100;
    h = 75;
  }
  else {
    background(0);
    stroke(255);
    x = 390;
    y = 390;
    w = 120;
    h = 95;
  }
  fill(175);
  rect(x, y, w, h);
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    button = !button;
  }
}

