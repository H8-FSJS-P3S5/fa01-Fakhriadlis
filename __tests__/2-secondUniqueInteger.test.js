const secondUniqueInteger = require("../2-secondUniqueInteger");

test("Test case 1", () => {
  const result = secondUniqueInteger([1, 2, 3, 5, 9, 12], [1, 2, 5, 10, 12]);

  expect(result).toEqual(expect.any(Number));
  expect(result).toEqual(9);
});

test("Test case 2", () => {
  const result = secondUniqueInteger([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]);

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(false);
});

test("Test case 3", () => {
  const result = secondUniqueInteger([3, 5, 7, 9, 1, 4], [3, 7, 1, 4, 8]);

  expect(result).toEqual(expect.any(Number));
  expect(result).toEqual(9);
});

test("Test case 4", () => {
  const result = secondUniqueInteger([1, 2, 3, 4], [1, 2, 3, 4]);

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(false);
});

test("Test case 5", () => {
  const result = secondUniqueInteger([1, 2, 3, 4], [5, 6]);

  expect(result).toEqual(expect.any(Number));
  expect(result).toEqual(2);
});