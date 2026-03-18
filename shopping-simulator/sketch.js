// 1. Object Notation for the Player/Basket
let basket = {
  x: 200,
  y: 360,
  w: 60,
  h: 40,
  score: 0,
  startTime: 0
};

// 2. Array to store multiple cookie objects
let cookies = [];
let gameOver = false;

function setup() {
  createCanvas(400, 400);
  basket.startTime = millis(); // Record start time in milliseconds
}

function draw() {
  background(135, 206, 235); // Sky Blue

  if (!gameOver) {
    updateGame();
    drawGame();
  }
  else {
    showGameOver();
  }
}

function updateGame() {
  // Move basket with arrow keys
  if (keyIsDown(LEFT_ARROW) && basket.x > 0) {
    basket.x -= 7;
  }
  if (keyIsDown(RIGHT_ARROW) && basket.x < width - basket.w) {
    basket.x += 7;
  }

  // Spawn a new cookie object every 60 frames
  if (frameCount % 60 === 0) {
    cookies.push(new Cookie());
  }

  // Update and check each cookie in the array
  for (let i = cookies.length - 1; i >= 0; i--) {
    cookies[i].fall();
    
    // Check for "Catch" (Collision)
    if (cookies[i].y + 10 > basket.y && 
        cookies[i].x > basket.x && 
        cookies[i].x < basket.x + basket.w) {
      cookies.splice(i, 1); // Remove caught cookie
      basket.score++;
    } 
    // Check for "Fail" (Hits bottom)
    else if (cookies[i].y > height) {
      gameOver = true;
    }
  }
}

function drawGame() {
  // Draw Basket
  fill(139, 69, 19);
  rect(basket.x, basket.y, basket.w, basket.h, 5);

  // Draw Cookies from the array
  fill(210, 105, 30);
  for (let c of cookies) {
    ellipse(c.x, c.y, 20, 20);
  }

  // UI: Score and Timer
  let timePassed = ((millis() - basket.startTime) / 1000).toFixed(1);
  fill(0);
  textSize(16);
  text("Cookies Caught: " + basket.score, 10, 25);
  text("Survival Time: " + timePassed + "s", 10, 45);
}

function showGameOver() {
  textAlign(CENTER);
  fill(200, 0, 0);
  textSize(32);
  text("GAME OVER", width / 2, height / 2);
  textSize(16);
  text("Click to Restart", width / 2, height / 2 + 40);
}


class Cookie {
  constructor() {
    this.x = random(20, width - 20);
    this.y = 0;
    this.speed = random(2, 5);
  }
  
  fall() {
    this.y += this.speed;
  }
}


function mousePressed() {
  if (gameOver) {
    cookies = [];
    basket.score = 0;
    basket.startTime = millis();
    gameOver = false;
  }
}

