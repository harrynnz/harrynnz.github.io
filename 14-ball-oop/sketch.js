
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(15, 30);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  display() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius*2);
  }
  
  move() {
    this.x += this.dx;
    this.y += this.dy;

    //check wall for bounce
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }

    if (this.x - this.radius < 0 || this.x + this.radius > height) {
      this.dx *= -1;
    }
  }

  bounceOff(otherball) {
    let radiusSum = this.radius + otherball.radius;
    let distanceApart = dist(this.x, this.y, otherball.x, otherball.y);
    if (radiusSum <= distanceApart) {
      //hitting each other
      let tempX = this.dx;
      let tempY = this.dy;

      this.dx = otherball.dx;
      this.dy = otherball.dy;

      otherball.dx = tempX;
      otherball.dy = tempY;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let ball of ballArray) {
    ball.move();
    for (let otherBall of ballArray) {
      //avoid detecting hitting self
      if (ball !== otherBall) {
        ball.bounceOff(otherBall);
      }
    }
    ball.display();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}