const add = require("../src/kata");

test("empty string should return 0", () => {
  expect(add("")).toBe(0);
});

test("single number return number", () => {
  expect(add("1")).toBe(1);
});

test("two numbers returns the sum of numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("add should accept new lines (\n) in input", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should accept different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should accept different delimiters AND line breaks", () => {
  expect(add("//;\n1\n2;3")).toBe(6);
});

test("neg numbers should throw an exception", () => {
  expect(() => add("1, -6, 3")).toThrow("negatives not allowed");
});
