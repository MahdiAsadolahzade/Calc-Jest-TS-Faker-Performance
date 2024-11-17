import type { inputNumType, SensetiveCase } from "../types/Types";

const sensetives: SensetiveCase[] = [
  { first: 0, second: Number.POSITIVE_INFINITY, returnValue: 0 },
  { first: Number.POSITIVE_INFINITY, second: 0, returnValue: 0 },
  { first: 0, second: Number.NEGATIVE_INFINITY, returnValue: 0 },
  { first: Number.NEGATIVE_INFINITY, second: 0, returnValue: 0 },
];

const MultipleFunc = ({ first, second }: inputNumType): number => {
  for (const sensitive of sensetives) {
    if (first === sensitive.first && second === sensitive.second) {
      return sensitive.returnValue;
    }
  }
  return first * second;
};

export default MultipleFunc;
