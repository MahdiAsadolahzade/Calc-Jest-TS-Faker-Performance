export enum Operator {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}

export interface inputNumType {
  first: number;
  second: number;
}

export type OperatorMap = {[key in Operator]:Function}

export type SensetiveCase = inputNumType & {returnValue:number}