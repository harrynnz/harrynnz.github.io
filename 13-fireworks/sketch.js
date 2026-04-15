class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = randomw(-5, 5);
    this.dy - random(-5, 5);
    this.radius = 3;
    this.radius = 3;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.opacity = 255;
  }

  update() {
    //move
    this.x += this.dx;
    this.y += this.dy;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.radius*2);
  }
}



let theFireworks = {};
const NUMBER_OF_FIREWORKS = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let someFireworks of theFireworks) {
    someFireworks.update();
    someFireworks.display();
  }
}

function mousePressed() {
  for (let i = 0; i < NUMBER_OF_FIREWORKS; i++) {
    let aFireworks = new Particle(mouseX,mouseY);
    theFireworks.push(aFireworks);
  }
}