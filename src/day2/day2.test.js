const {
  process,
  replacement
} = require("./day2");

const program = [1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 10, 19, 2, 9, 19, 23, 2, 23, 10, 27, 1, 6, 27, 31, 1, 31, 6, 35, 2, 35, 10, 39, 1, 39, 5, 43, 2, 6, 43, 47, 2, 47, 10, 51, 1, 51, 6, 55, 1, 55, 6, 59, 1, 9, 59, 63, 1, 63, 9, 67, 1, 67, 6, 71, 2, 71, 13, 75, 1, 75, 5, 79, 1, 79, 9, 83, 2, 6, 83, 87, 1, 87, 5, 91, 2, 6, 91, 95, 1, 95, 9, 99, 2, 6, 99, 103, 1, 5, 103, 107, 1, 6, 107, 111, 1, 111, 10, 115, 2, 115, 13, 119, 1, 119, 6, 123, 1, 123, 2, 127, 1, 127, 5, 0, 99, 2, 14, 0, 0]


describe("day 2", () => {

  test("test add", () => {
    expect(process([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]);
  });

  test("test multiply", () => {
    expect(process([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99]);
  });

  test("test real examples", () => {
    expect(process([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]);
    expect(process([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99]);
    expect(process([2, 4, 4, 5, 99, 0])).toStrictEqual([2, 4, 4, 5, 99, 9801]);
    expect(process([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });

  test("Calculate part 1 answer", () => {
    console.log("Day 2 Part 1 Answer : " + process([...program]));
  });

  test("Calculate part 2 answer", () => {
    var {
      noun,
      verb
    } = replacement([...program], 19690720);

    console.log("Day 2 Part 1 Answer : " + (100 * noun + verb));
  });

});