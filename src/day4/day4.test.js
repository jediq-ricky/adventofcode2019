const {
  neverDecrease,
  adjascentDigits,
  checkRules
} = require("./day4");

describe("day 4", () => {

  test("check never decrease", () => {
    expect(neverDecrease('76543')).toBe(false);
    expect(neverDecrease('34567')).toBe(true);
    expect(neverDecrease('344456')).toBe(true);
  });

  test("check adjascent digits", () => {
    expect(adjascentDigits('76543')).toBe(false);
    expect(adjascentDigits('345677')).toBe(true);
    expect(adjascentDigits('344456')).toBe(false);
  });


  test("check rules", () => {
    expect(checkRules('111111')).toBe(false);
    expect(checkRules('223450')).toBe(false);
    expect(checkRules('123789')).toBe(false);
  });


  test("get looped answers", () => {
    var answers = []
    for (var i = 245673; i < 246000; i++) {
      if (checkRules(i)) {
        answers.push(i);
      }
    }

    expect(answers.length).toBe(9);
  });

  test("get answer", () => {
    var answers = []
    for (var i = 271973; i < 785961; i++) {
      if (checkRules(i)) {
        answers.push(i)
      }
    }

    console.log("Number of day 4 part 1 : " + answers.length)

  });
});