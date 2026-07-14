const hospitalRoom = require("../5-hospitalRoom");

test("Test case 1", () => {
  const result = hospitalRoom([
    ["Awtian", "II"],
    ["Dimas", "I"],
    ["Dimitri", "II"],
    ["Icha", "II"],
    ["Hardim", "II"],
    ["Radit", "I"],
  ]);

  expect(result).toEqual(expect.any(Object));
  expect(result).toHaveProperty("I");
  expect(result["I"]).toEqual(expect.any(Array));
  expect(result["I"].length).toEqual(2);
  expect(result).toHaveProperty("II");
  expect(result["II"]).toEqual(expect.any(Array));
  expect(result["II"].length).toEqual(2);
  expect(result).toEqual({
    I: [['Dimas'], ['Radit']],
    II: [["Awtian", "Dimitri"], ["Icha", "Hardim"]],
  });
});

test("Test case 2", () => {
  const result = hospitalRoom([
    ["Arthamevia", "IV"],
    ["Adhi", "III"],
    ["Agus", "III"],
    ["Zaskia", "I"],
    ["Abu Hanifah", "III"],
    ["Umi Hani", "I"],
    ["Umar", "III"]
  ]);

  expect(result).toEqual(expect.any(Object));
  expect(result).toHaveProperty("I");
  expect(result["I"]).toEqual(expect.any(Array));
  expect(result["I"].length).toEqual(2);
  expect(result).toHaveProperty("III");
  expect(result["III"]).toEqual(expect.any(Array));
  expect(result["III"].length).toEqual(2);
  expect(result).toHaveProperty("IV");
  expect(result["IV"]).toEqual(expect.any(Array));
  expect(result["IV"].length).toEqual(1);
  expect(result).toEqual({
    I: [["Zaskia"], ["Umi Hani"]],
    III: [["Adhi", "Agus", "Abu Hanifah"], ["Umar"]],
    IV: [["Arthamevia"]],
  });
});

test("Test case 3", () => {
  const result = hospitalRoom([
    ["Naruto", "IV"],
    ["Sasuke", "II"],
    ["Sakura", "I"],
    ["Kakashi", "III"],
  ]);
  /*
{
  IV: [['Naruto']],
  II: [['Sasuke']],
  I: [['Sakura']],
  III: [['Kakashi']],
}
*/

  expect(result).toEqual(expect.any(Object));
  expect(result).toHaveProperty("IV");
  expect(result["IV"]).toEqual(expect.any(Array));
  expect(result["IV"].length).toEqual(1);
  expect(result).toHaveProperty("II");
  expect(result["II"]).toEqual(expect.any(Array));
  expect(result["II"].length).toEqual(1);
  expect(result).toHaveProperty("I");
  expect(result["I"]).toEqual(expect.any(Array));
  expect(result["I"].length).toEqual(1);
  expect(result).toHaveProperty("III");
  expect(result["III"]).toEqual(expect.any(Array));
  expect(result["III"].length).toEqual(1);
  expect(result).toEqual({
    IV: [['Naruto']],
    II: [['Sasuke']],
    I: [['Sakura']],
    III: [['Kakashi']],
  });
});
