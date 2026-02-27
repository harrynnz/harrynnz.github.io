let xStartLocation = 0;
let yStartLocation= 0;
let objectVelocity = 5;
let dashVelocity = 10;
let dashDistance = 30;
let objectSize = 20;
let cavaSize = 500;

function setup() {
  createCanvas(cavaSize, cavaSize);
  noStroke();
}

function draw() {
  background(255);
  moveRect();
  fill("black");
  rect(250, 250, objectSize, objectSize);
}

////////////////////////////////////////////////////////////

while (dashVelocity < dashDistance) {
  if (objectSize + objectVelocity >= x ) {
    break;
  }
  moveRect();
}



function moveRect() {
  if (keyIsDown(87)) { // w
    y -= speed;
    restriction();
    if (keyIsDown(32)) { // SPACE
      y -= dashVelocity;
      restriction();
    }
  }
  
  
  
  if (keyIsDown(83)) { // s
    y += speed;
    restriction();
    if (keyIsDown(32)) { // SPACE
      y += dashVelocity;
      restriction();
    }
  }
  
  
  
  if (keyIsDown(68)) { // d
    x += speed;
    restriction();
    if (keyIsDown(32)) { // SPACE
      x += dashVelocity;
      restriction();
    }
  }
  
  
  
  if (keyIsDown(65)) {
    // a
    x -= speed;
    restriction();
    if (keyIsDown(32)) { // SPACE
      x -= dashVelocity;
      restriction();
    }
  }
  
  
}

////////////////////////////////////////////////////////////  function restriction() {
if (x + size === width) {
  x -= speed;
  console.log("You hit the wall");
}
if (y + size === height) {
  y -= speed;
  console.log("You hit the wall"); 
}
if (x === 0) {
  x += speed;
  console.log("You hit the wall");
}
if (y === 0) {
  y += speed;
  console.log("You hit the wall");
}

