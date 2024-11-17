import MultipleFunc from "../src/Functions/MultipleFunc";
import { inputNumType } from "../src/types/Types";
import { faker } from "@faker-js/faker";

describe("Multiple Function Test for Sensetive Cases", () => {
  it("should return 0 if zero is one of the variables is sensetive", () => {
    const inputs: inputNumType[] = [
      {
        first: 0,
        second: Number.POSITIVE_INFINITY,
      },
      {
        first: Number.POSITIVE_INFINITY,
        second: 0,
      },
      {
        first: 0,
        second: Number.NEGATIVE_INFINITY,
      },
      {
        first: Number.NEGATIVE_INFINITY,
        second: 0,
      },
    ];
    const results: number[] = [];
    inputs.map((input) => {
      results.push(MultipleFunc(input));
    });

    results.map((res) => expect(res).toBe(0));
  });
});

describe("Multiple Function Test with Random Numbers", () => {
  const testCount = 20;

  for (let i = 0; i < testCount; i++) {
    it(`should return the multiple of two random values - Test #${
      i + 1
    }`, () => {
      const input: inputNumType = {
        first: faker.number.float({ min: -999.99, max: 999.99 }),
        second: faker.number.float({ min: -999.99, max: 999.99 }),
      };
      const result = MultipleFunc(input);
      console.log(
        `Test #${i + 1}: Input values - first: ${input.first}, second: ${
          input.second
        }`
      );
      expect(result).toBe(input.first * input.second);
    });
  }
});
