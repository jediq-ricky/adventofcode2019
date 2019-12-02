var fs = require("fs");

function calculateFuel(mass) {
  var fuel = 0;
  if (Number.isInteger(mass) && mass > 0) {
    fuel = Math.floor(mass / 3) - 2;
  }
  return fuel;
}

function recursivelyCalculateFuel(mass) {
  var fuel = calculateFuel(mass);
  if (fuel > 0) {
    var recursedFuel = recursivelyCalculateFuel(fuel);
    if (recursedFuel > 0) {
      fuel += recursedFuel;
    }
  }
  return fuel;
}

function calculateFromArray(massArray, calculator) {
  return massArray.reduce(function(accumulator, mass) {
    return accumulator + calculator(mass);
  }, 0);
}

function readFileIntoArray(file) {
  var contents = fs.readFileSync(file).toString("utf-8");
  return contents.split("\n").map(Number);
}

module.exports = { calculateFuel, recursivelyCalculateFuel, calculateFromArray, readFileIntoArray };
