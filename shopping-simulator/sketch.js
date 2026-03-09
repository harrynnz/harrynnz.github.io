let shoppingCart;
let posX = 300;
let posY = 732;
let speed = 5;

function preload() {
  shoppingCart = loadImage("shoppingCart.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {


  // Move the cart based on WASD key
  background("green");
  if (keyIsDown(65)) {
    posX -= speed;
  } // A
  if (keyIsDown(68)) {
    posX += speed;
  } // D


  // Position of the cart
  image(shoppingCart, posX, posY, shoppingCart.width * 0.5, shoppingCart.height * 0.5);
}
