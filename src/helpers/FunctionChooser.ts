import { Operator } from "../types/Types";
import Functions from "../Functions";

const FunctionChooser = (
  operator: Operator,
  first: number,
  second: number
): number => {
  const operationFunc = Functions[operator]; // Ensure the operator is in lowercase
  return operationFunc({ first, second });
};

export default FunctionChooser;
