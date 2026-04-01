let cols;
let rows;

let currentPlayer = "x";


//Play button properties
let playButton = {
  x: 400,
  y: 300,
  w: 300,
  h: 80
};
let button = false;


//Create 3x3 array
let theGrid = [[0, 0, 0],
               [0, 0, 0],
               [0, 0, 0]];
const SQUARE_DIMENSIONS = theGrid.length;
let cellSize;

//"Tic-Tac-Toe" animation stuffs
let growing = true;
let sizeChange = 0.5;
let maxSize = 100;
let minSize = 60;
let currentSize = 80;

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

  rows = Math.floor(height/cellSize);
  cols = Math.floor(width/cellSize);
}

function draw() {
  background("purple");

  //When play button is clicked, show 3x3 grid
  if (button) {
    showGrid();
    //Make play button disappear and unclickable when clicked
    rect(0, 0, 0, 0);
    playButton.x = 0;
    playButton.y = 0;
    playButton.w = 0;
    playButton.h = 0;
  }

  //Create play button
  if (!button) {

    //Text animation
    if (growing) {
      currentSize += sizeChange;
      if (currentSize >= maxSize) {
        growing = !growing;
      }
    }
    else {
      currentSize -= sizeChange;
      if (currentSize <= minSize) {
        growing = !growing;
      }
    }
    textSize(currentSize);
    text("Tic -Tac -Toe", playButton.x - 100, playButton.y - 100 );
  }

  //Play button rect
  fill(175);
  rect(playButton.x, playButton.y, playButton.w, playButton.h);

  //Added text on top of play button
  textSize(50);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Play", playButton.x + playButton.w/2 -50, playButton.y + playButton.h - 25);
}


//Make play button clickable
function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  if (button) {
    dispplayxno(x, y);
  }


  if (mouseX > playButton.x && mouseX < playButton.x + playButton.w && mouseY > playButton.y && mouseY < playButton.y + playButton.h) {
    button = !button;
  }
}

function dispplayxno(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (currentPlayer === "x" && theGrid[y][x] === 0) {
      theGrid[y][x] = 1;
      switchPlayer();
    }
    else if (currentPlayer === "o" && theGrid[y][x] === 0) {
      theGrid[y][x] = 2;
      switchPlayer();
    }
  }
}

//Display 3x3 grid
function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (theGrid[y][x] === 0) {
        strokeWeight(5);
        fill("white");
        square(x * cellSize, y * cellSize, cellSize);
      }
      if (theGrid[y][x] === 1) {
        strokeWeight(60);
        stroke("black");
        line(x * cellSize + 50, y * cellSize + 50, x * cellSize + cellSize - 50, y * cellSize + cellSize - 50);
        line(x * cellSize + cellSize - 50, y * cellSize + 50, x * cellSize + 50, y * cellSize + cellSize - 50);
      }
      if (theGrid[y][x] === 2) {
        strokeWeight(50);
        fill("purple");
        circle(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize / 2 - 10);
      }
    }
  }
}


//Switch player
function switchPlayer() {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  }
  else {
    currentPlayer = "x";
  }
  return  currentPlayer;
}


function checkWinner() {
  for (let i = 0; i <= theGrid.length; i++)
    for (let k =0; k <= theGrid.length; k++) {
      if  //3 in a horizontal line
         (theGrid[y][x - 1] === 1 &&
          theGrid[y][x + 1] === 1 &&

          //3 in vertical line
          theGrid[y - 1][x] === 1 &&
          theGrid[y + 1][x] === 1 &&

          //3 diagonally
          theGrid[y - 1][x - 1] === 1 &&
          theGrid[y + 1][x + 1] === 1 &&) 

          {}
}