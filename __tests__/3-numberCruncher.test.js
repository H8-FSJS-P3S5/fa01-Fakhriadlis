const numberCruncher = require("../3-numberCruncher");

test("Test case 1", () => {
  const result = numberCruncher([2, 5, 1, 3]);

  expect(result).toEqual(expect.any(Number));
  expect(result).toEqual(16);
});

test("Test case 2", () => {
  const result = numberCruncher([2, 3, 1, 4, 1, 5, 0, 3]);

  expect(result).toEqual(expect.any(Number));
  expect(result).toEqual(8);
});

test("Test case 3", () => {
  const result = numberCruncher([3, 6, 8, 9, 1, 2, 3]);

  expect(result).toEqual(expect.any(Number));
  expect(result).toEqual(54);
});
