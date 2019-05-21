const add = require("../src/kata");

test("empty string should return 0", () => {
  expect(add("")).toBe(0);
});

test("single digit should return digit", () => {
  expect(add("1")).toBe(1);
});

test("two digits, comma sep, should return the sum", () => {
  expect(add("1,2")).toBe(3);
});

test("any quantity of integers should return the sum", () => {
  expect(add("1, 2, 3")).toBe(6);
});

test("add should treat new line as a comma", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("Add supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("negative numbers throw an error", () => {
  expect(() => add("1, 2, -3")).toThrow();
});
