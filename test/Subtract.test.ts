import SubtractFunc from "../src/Functions/Subtract";
import { inputNumType } from "../src/types/Types";
import { faker } from "@faker-js/faker";

describe("Subtract Function Test with Random Numbers", () => {
  const testCount = 20;

  for (let i = 0; i < testCount; i++) {
    it(`should return the sub of two random values - Test #${i + 1}`, () => {
      const input: inputNumType = {
        first: faker.number.float({ min: -999.99, max: 999.99 }),
        second: faker.number.float({ min: -999.99, max: 999.99 }),
      };
      const result = SubtractFunc(input);
      console.log(
        `Test #${i + 1}: Input values - first: ${input.first}, second: ${
          input.second
        }`
      );
      expect(result).toBe(input.first - input.second);
    });
  }
});
