let cols;
let rows;

let currentPlayer = "x";

let totalMove = 0;

//Play button properties
let theButton = {
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

  
  theButton.y = height/2 - theButton.h/2;
  theButton.x = width/2 - theButton.w/2;


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

  //
  //When play button is clicked, show 3x3 grid
  if (button) {
    showGrid();

    //
    //Make play button disappear and unclickable when clicked
    rect(0, 0, 0, 0);
    theButton.x = 0;
    theButton.y = 0;
    theButton.w = 0;
    theButton.h = 0;
  }

  //
  //Create play button
  if (!button) {
    
    //
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
    text("Tic -Tac -Toe", theButton.x - 100, theButton.y - 100 );
  }

  //Play button rect
  fill(175);
  rect(theButton.x, theButton.y, theButton.w, theButton.h);

  //Added text on top of play button
  textSize(50);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Play", theButton.x + theButton.w/2 -50, theButton.y + theButton.h - 25);
}


//Make play button clickable
function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  if (button) {
    dispplayxno(x, y);
  }


  if (mouseX > theButton.x && mouseX < theButton.x + theButton.w && mouseY > theButton.y && mouseY < theButton.y + theButton.h) {
    button = !button;
  }
}

function dispplayxno(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (currentPlayer === "x" && theGrid[y][x] === 0) {
      theGrid[y][x] = 1;
      switchPlayer();
      totalMove += 1;
    }
    else if (currentPlayer === "o" && theGrid[y][x] === 0) {
      theGrid[y][x] = 2;
      switchPlayer();
      totalMove += 1;
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
      if (theGrid[y][x] === 1) { // display X
        strokeWeight(5);
        fill("purple");
        square(x * cellSize, y * cellSize, cellSize);
        strokeWeight(60);
        stroke("black");
        line(x * cellSize + 50, y * cellSize + 50, x * cellSize + cellSize - 50, y * cellSize + cellSize - 50);
        line(x * cellSize + cellSize - 50, y * cellSize + 50, x * cellSize + 50, y * cellSize + cellSize - 50);
      }
      if (theGrid[y][x] === 2) { // display O
        strokeWeight(5);
        fill("purple");
        square(x * cellSize, y * cellSize, cellSize);
        strokeWeight(50);
        fill("purple");
        circle(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize / 2 - 10);
      }
    }
  }
  checkWinner();
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
  if  //3 in a horizontal line
  ((theGrid[0][0] === 1 &&
    theGrid[0][1] === 1 &&
    theGrid[0][2] === 1) ||

    (theGrid[1][0] === 1 &&
    theGrid[1][1] === 1 &&
    theGrid[1][2] === 1) ||

    (theGrid[2][0] === 1 &&
    theGrid[2][1] === 1 &&
    theGrid[2][2] === 1) ||

    //3 in vertical line
    (theGrid[0][0] === 1 &&
    theGrid[1][0] === 1 &&
    theGrid[2][0] === 1) ||

    (theGrid[0][1] === 1 &&
    theGrid[1][1] === 1 &&
    theGrid[2][1] === 1) ||

    (theGrid[0][2] === 1 &&
    theGrid[1][2] === 1 &&
    theGrid[2][2] === 1) ||

    //3 diagonally
    (theGrid[0][0] === 1 &&
    theGrid[1][1] === 1 &&
    theGrid[2][2] === 1) ||
    
    (theGrid[0][2] === 1 &&
    theGrid[1][1] === 1 &&
    theGrid[2][0] === 1)) {

    showWinner();
  }

  else if  //3 in a horizontal line
  ((theGrid[0][0] === 2 &&
    theGrid[0][1] === 2 &&
    theGrid[0][2] === 2) ||

    (theGrid[1][0] === 2 &&
    theGrid[1][1] === 2 &&
    theGrid[1][2] === 2) ||

    (theGrid[2][0] === 2 &&
    theGrid[2][1] === 2 &&
    theGrid[2][2] === 2) ||

    //3 in vertical line
    (theGrid[0][0] === 2 &&
    theGrid[1][0] === 2 &&
    theGrid[2][0] === 2) ||

    (theGrid[0][1] === 2 &&
    theGrid[1][1] === 2 &&
    theGrid[2][1] === 2) ||

    (theGrid[0][2] === 2 &&
    theGrid[1][2] === 2 &&
    theGrid[2][2] === 2) ||

    //3 diagonally
    (theGrid[0][0] === 2 &&
    theGrid[1][1] === 2 &&
    theGrid[2][2] === 2) ||
    
    (theGrid[0][2] === 2 &&
    theGrid[1][1] === 2 &&
    theGrid[2][0] === 2)) {

    showWinner();
  }
  else if (totalMove === 9) {
    fill("white");
    text("It's a tie", 380, 500);
  }
}


function showWinner() {
  fill("white");
  text("Player " + currentPlayer + " lose", 380, 450);
}