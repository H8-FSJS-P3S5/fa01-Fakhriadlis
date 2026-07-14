const findDuplicate = require("../1-findDuplicate");

test("Test case 1", () => {
  const result = findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  expect(result).toEqual(expect.any(Array));
  expect(result.length).toEqual(0);
});

test("Test case 2", () => {
  const result = findDuplicate([1, 2, 3, 4, 2, 3, 4, 5, 6]);
  
  expect(result).toEqual(expect.any(Array));
  expect(result.length).toEqual(3);
  expect(result[0]).toEqual(expect.any(Number));
  expect(result.includes(2)).toBeTruthy();
  expect(result[1]).toEqual(expect.any(Number));
  expect(result.includes(3)).toBeTruthy();
  expect(result[2]).toEqual(expect.any(Number));
  expect(result.includes(4)).toBeTruthy();
});

test("Test case 3", () => {
  const result = findDuplicate([1, 2, 3, 3, 2, 1]);

  expect(result).toEqual(expect.any(Array));
  expect(result.length).toEqual(3);
  expect(result[0]).toEqual(expect.any(Number));
  expect(result.includes(1)).toBeTruthy();
  expect(result[1]).toEqual(expect.any(Number));
  expect(result.includes(2)).toBeTruthy();
  expect(result[2]).toEqual(expect.any(Number));
  expect(result.includes(3)).toBeTruthy();
});

test("Test case 4", () => {
  const result = findDuplicate([1, 1, 1, 1, 1, 1, 2]);

  expect(result).toEqual(expect.any(Array));
  expect(result.length).toEqual(1);
  expect(result[0]).toEqual(expect.any(Number));
  expect(result.includes(1)).toBeTruthy();
});

test("Test case 5", () => {
  const result = findDuplicate([]);

  expect(result).toEqual(expect.any(Array));
  expect(result.length).toEqual(0);
});
