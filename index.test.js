// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  // Test Case 1: Positive case - lowercase input
  test("should return uppercased Hello for input 'hello'", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello"); // Using toBe matcher
  });
  // Test Case 2: Positive case - mixed case input (AnindA)
  test("should return uppercased AnindA for input 'AnindA'", () => {
    const result = capitalize("AnindA");
    expect(result).toEqual("AnindA"); // Using toEqual matcher
  });
  // Test Case 3: Edge case - empty input
  test("should return an empty string for empty input", () => {
    const result = capitalize("");
    expect(result).toHaveLength(0); // Using toHaveLength matcher
  });
  // Test Case 4: Negative case - input with numbers and symbols (123world!)
  test("should return uppercased 123world! for input '123World!'", () => {
    const result = capitalize("123World!");
    expect(result).toMatch(/123World!/); // Using toMatch matcher with a regular expression
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  // Test Case 1: Epoch Date 0
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT"); // Using toBe matcher
  });
   // Test Case 2: Epoch Date 1633082400 (Tue, 01 Oct 2021 00:00:00 GMT)
   test("should return Tue, 01 Oct 2021 00:00:00 GMT", () => {
    const result = epochDateToUTC(1633082400);
    expect(result).not.toBeNull(); // Using not.toBeNull matcher
  });
  // Test Case 3: Epoch Date -3600 (one hour before 1970)
  test("should return Wed, 31 Dec 1969 23:00:00 GMT", () => {
    const result = epochDateToUTC(-3600);
    expect(result).toMatch(/Dec 1969/); // Using toMatch matcher with regular expression
  });
  // Test Case 4: Epoch Date 1609459200 (Sun, 01 Jan 2017 00:00:00 GMT)
  test("should return Sun, 01 Jan 2017 00:00:00 GMT", () => {
    const result = epochDateToUTC(1609459200);
    expect(result).toBeTruthy(); // Using toBeTruthy matcher
  });
});

