import { InputTaking, Close } from "./helpers/TakingInput";
import { Operator } from "./types/Types";
import FunctionChooser from "./helpers/FunctionChooser";

const OperatorList: Operator[] = [
  Operator.Add,
  Operator.Subtract,
  Operator.Multiply,
  Operator.Divide,
];

const main = async (): Promise<void> => {
  try {
    const operationTypeAsk = await InputTaking(
      `Please enter the type of operation you want : \n --- \n${OperatorList.map(
        (operator, index) => `${index + 1}) ${operator}`
      ).join("\n")}\n --- \n `
    );
    const operationTypeValue: string = operationTypeAsk;

    if (!Object.values(Operator).includes(operationTypeValue as Operator)) {
      throw new Error(
        `Invalid operation type: ${operationTypeValue}. Please enter a valid operator.`
      );
    }

    console.log(
      `Selected Operator: ${operationTypeValue} \nNow Enert you Entries`
    );

    const firstValue = await InputTaking(`Enter your first Num : `);
    const secondValue = await InputTaking(`Enter your second Num : `);

    const result = FunctionChooser(
      operationTypeValue as Operator,
      Number(firstValue),
      Number(secondValue)
    );
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(err);
  } finally {
    Close();
  }
};

export default main;
