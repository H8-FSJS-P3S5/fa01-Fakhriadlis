const isMatchBloodType = require("../4-bloodTypeMatcher");

test("Test case 1", () => {
  const result = isMatchBloodType("O", "A", "O");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(true);
});

test("Test case 2", () => {
  const result = isMatchBloodType("O", "A", "A");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(true);
});

test("Test case 3", () => {
  const result = isMatchBloodType("O", "A", "B");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(false);
});

test("Test case 4", () => {
  const result = isMatchBloodType("O", "B", "B");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(true);
});

test("Test case 5", () => {
  const result = isMatchBloodType("AB", "B", "O");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(false);
});

test("Test case 6", () => {
  const result = isMatchBloodType("AB", "B", "B");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(true);
});

test("Test case 7", () => {
  const result = isMatchBloodType("AB", "AB", "A");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(true);
});

test("Test case 8", () => {
  const result = isMatchBloodType("AB", "AB", "B");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(true);
});

test("Test case 9", () => {
  const result = isMatchBloodType("AB", "AB", "AB");

  expect(result).toEqual(expect.any(Boolean));
  expect(result).toEqual(true);
});
