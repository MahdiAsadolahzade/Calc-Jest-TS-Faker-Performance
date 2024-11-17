import AddFunc from "./Add";
import SubtractFunc from "./Subtract";
import MultipleFunc from "./MultipleFunc";
import DivideFunc from "./DivideFunc";
import type { OperatorMap } from "../types/Types";

const Functions: OperatorMap = {
  add: AddFunc,
  subtract: SubtractFunc,
  multiply: MultipleFunc,
  divide: DivideFunc,
};
export default Functions;
