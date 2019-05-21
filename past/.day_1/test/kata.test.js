const add = require("../src/kata");

test("should return 0 if empty string provided", () => {
  expect(add("")).toBe(0);
});

test("should return single provided element", () => {
  expect(add("1")).toBe(1);
});

test("should return expected sum", () => {
  //arrange
  let values = "1, 2, 3";
  let expected = 6;

  //act
  let actual = add(values);

  //assert
  expect(actual).toBe(expected);
});

test("should handle line breaks", () => {
  //arrange
  let values = "1\n2, 3";
  let expected = 6;

  //act
  let actual = add(values);

  //assert
  expect(actual).toBe(expected);
});

test("should support different delimiters", () => {
  //arrange
  let values = "//;\n1;2";
  let expected = 3;

  //act
  let actual = add(values);

  //assert
  expect(actual).toBe(expected);
});

test("should throw if a neg num provided", () => {
  expect(() => add("-5, 2, -10")).toThrow();
});
