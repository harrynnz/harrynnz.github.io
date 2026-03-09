let x, y;
let speed = 5;
let trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0); // clear background

  // Move rectangle based on WASD keys
  if (keyIsDown(87)) {
    y -= speed;
  } // W
  if (keyIsDown(83)) {
    y += speed;
  } // S
  if (keyIsDown(65)) {
    x -= speed;
  } // A
  if (keyIsDown(68)) {
    x += speed;
  } // D

  // Keep rectangle inside canvas
  x = constrain(x, 0, width - 50);
  y = constrain(y, 0, height - 50);

  // Save position to trail
  trail.push({ x: x, y: y });

  // Limit trail length
  if (trail.length > 10) {
    trail.shift();
  }

  // Draw trail
  for (let i = 0; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 50, 255);
    fill(0, 255, 0, alpha);
    noStroke();
    circle(trail[i].x, trail[i].y, 50, 50);
  }

  // Draw main rectangle
  fill(0, 255, 0);
  circle(x, y, 50, 50);
}
