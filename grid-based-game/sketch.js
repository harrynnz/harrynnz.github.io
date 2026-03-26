let playButton = {
  x: 400,
  y: 300,
  w: 300,
  h: 80
}
let button = false;

let theGrid = [[0, 0, 0],
               [0, 0, 0],
               [0, 0, 0]];
const SQUARE_DIMENSIONS = theGrid.length;

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  playButton.y = height/2 - playButton.w/2;
  playButton.x = width/2 - playButton.h/2;
  if (width < height) {
    cellSize = width / SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height / SQUARE_DIMENSIONS;
  }
}

function draw() {
  background(220);
  if (button) {
    showGrid();
  }
  fill(175);
  rect(playButton.x, playButton.y, playButton.w, playButton.h);
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  if (mouseX > playButton.x && mouseX < playButton.x + playButton.w && mouseY > playButton.y && mouseY < playButton.y + playButton.h) {
    button = !button;
  }
}

function toggleCell() {
  if (theGrid[y][x] === 1) {
    theGrid[y][x] = 0;
  }
  else if (theGrid[y][x] === 0) {
    theGrid[y][x] = 1;
  }
}

function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (theGrid[y][x] === 1) {
        fill("black");
      }
      if (theGrid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}