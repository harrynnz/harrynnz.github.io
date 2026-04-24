let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new vehicle("Car", "Kona");
  console.log(myCar.getType());
  console.log(myCar.getName());
}

function draw() {
  background(220);
}

class vehicle {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

class Car extends vehicle {
  constructor(name) {
    supper("car", name);
  }

  getName() {
    return "This is a car called " + super.getName();
  }
}