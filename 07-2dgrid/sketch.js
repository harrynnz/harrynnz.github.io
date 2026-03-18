// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theGrid = [[0, 0, 1, 0],
               [1, 0, 1, 0],
               [0, 1, 0, 0],
               [0, 1, 0, 1]];


const SQUARE_DIMENSION = theGrid.length;

let cellSize;




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSION; y++) {
    for (let x = 0; x < SQUARE_DIMENSION; x++) {
      if (theGrid[y][x] === 1) {
        fill("black");
      }
      if (theGrid[y][x] === 0) {
        fill("white");
      }
      square(x * 50, y * 50, cellSize, cellSize);
    }
  }
}