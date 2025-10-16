var car = document.getElementById("car");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var pos = 0;
var moving = false;
var currentLight = "green";
var carInterval;
var crossedLine = false;
var signalPosition = 700;
var roadEnd = 1300;

function startCar() {
  if (moving) return;
  moving = true;
  carInterval = setInterval(moveCar, 100);
}

function stopCar() {
  moving = false;
  clearInterval(carInterval);
}

function moveCar() {
  pos += 5;
  car.style.left = pos + "px";

  if (pos + 100 >= signalPosition && crossedLine === false) {
    crossedLine = true;

    if (currentLight === "red") {
      alert("Chalan! Aap ne Red Signal cross kiya!");
      stopCar();
    }
  }

  if (pos + 100 < signalPosition) {
    crossedLine = false;
  }

  if (pos > roadEnd) {
    stopCar();
  }
}

function changeLights() {
  if (currentLight === "green") {
    green.style.background = "#333";
    yellow.style.background = "yellow";
    currentLight = "yellow";
  } else if (currentLight === "yellow") {
    yellow.style.background = "#333";
    red.style.background = "red";
    currentLight = "red";
  } else {
    red.style.background = "#333";
    green.style.background = "lime";
    currentLight = "green";
    crossedLine = false;
  }
}

setInterval(changeLights, 3000);
changeLights();
