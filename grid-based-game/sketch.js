let playButton = {
  x: 400,
  y: 300,
  w: 300,
  h: 80
};
let button = false;
let text1 = 'Play';
let theGrid = [[0, 0, 0],
               [0, 0, 0],
               [0, 0, 0]];
const SQUARE_DIMENSIONS = theGrid.length;

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton.y = height/2 - playButton.h/2;
  playButton.x = width/2 - playButton.w/2;
  if (width < height) {
    cellSize = width / SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height / SQUARE_DIMENSIONS;
  }
}

function draw() {
  background(225);

  //When play button is clicked, show 3x3 grid
  if (button) {
    showGrid();
  }

  //Create play button
  if (!button) {
    fill(175);
    rect(playButton.x, playButton.y, playButton.w, playButton.h);

    //Added text on top of play button
    textSize(50);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(text1, playButton.x + playButton.w/2 -50, playButton.y + playButton.h - 25);
  }
  //Make play button disappear and unclickable when clicked
  else {
    rect(0, 0, 0, 0);
    playbutton.x = 0;
    playbutton.y = 0;
    playbutton.w = 0;
    playbutton.h = 0;
  }
}

//Make play button clickable
function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  if (mouseX > playButton.x && mouseX < playButton.x + playButton.w && mouseY > playButton.y && mouseY < playButton.y + playButton.h) {
    button = !button;
  }
}

//Make 3x3 grid
function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (theGrid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}