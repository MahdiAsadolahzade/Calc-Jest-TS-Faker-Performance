import DivideFunc from "../src/Functions/DivideFunc";
import { inputNumType } from "../src/types/Types";
import { faker } from "@faker-js/faker";

describe("Divide Function Test for Sensetive Cases", () => {
  it("should return the multiple of two numbers", () => {
    const input: inputNumType = {
      first: 0,
      second: Number.POSITIVE_INFINITY,
    };
    const result = DivideFunc(input);
    expect(result).toBe(0);
  });
});

describe("Multiple Function Test with Random Numbers", () => {
  const testCount = 20;

  for (let i = 0; i < testCount; i++) {
    it(`should return the divide of two random values - Test #${i + 1}`, () => {
      const input: inputNumType = {
        first: faker.number.float({ min: -999.99, max: 999.99 }),
        second: faker.number.float({ min: -999.99, max: 999.99 }),
      };
      const result = DivideFunc(input);
      console.log(
        `Test #${i + 1}: Input values - first: ${input.first}, second: ${
          input.second
        }`
      );
      expect(result).toBe(input.first / input.second);
    });
  }
});
