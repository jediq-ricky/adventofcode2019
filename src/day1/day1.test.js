const {
  calculateFuel,
  recursivelyCalculateFuel,
  calculateFromArray,
  readFileIntoArray
} = require("./day1");

test("Calculate fuel, real examples", () => {
  expect(calculateFuel(12)).toBe(2);
  expect(calculateFuel(14)).toBe(2);
  expect(calculateFuel(1969)).toBe(654);
  expect(calculateFuel(100756)).toBe(33583);
});

test("Calculate fuel with extra fuel fuel, real examples", () => {
  expect(recursivelyCalculateFuel(12)).toBe(2);
  expect(recursivelyCalculateFuel(14)).toBe(2);
  expect(recursivelyCalculateFuel(1969)).toBe(966);
  expect(recursivelyCalculateFuel(100756)).toBe(50346);
});

test("Calculate array of fuel", () => {
  expect(calculateFromArray([12, 14, 1969, 100756], calculateFuel)).toBe(34241);
});

test("Calculate array of fuel with extra fuel fuel", () => {
  expect(calculateFromArray([12, 14, 1969, 100756], recursivelyCalculateFuel)).toBe(51316);
});

test("Read file from array", () => {
  var arr = readFileIntoArray("./src/day1/testfile.txt");
  expect(arr.length).toBe(4);
  expect(calculateFromArray(arr, calculateFuel)).toBe(34241);
});

test("Calculate part 1 answer", () => {
  var arr = readFileIntoArray("./src/day1/input.txt");
  console.log("Day 1 Part 1 Answer : " + calculateFromArray(arr, calculateFuel));
});

test("Calculate part 2 answer", () => {
  var arr = readFileIntoArray("./src/day1/input.txt");
  console.log("Day 1 Part 2 Answer : " + calculateFromArray(arr, recursivelyCalculateFuel));
});