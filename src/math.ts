import { cleanNumbers } from './util/numbers';

export function add(numbers: (number | string)[]) {
  let sum = 0;

  // throw new Error('Something went wrong');

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(numberValues: string[]) {
  let result = '';
  try {
    const numbers = cleanNumbers(numberValues);

    result = add(numbers).toString();
  } catch (error) {
    result = (error as Error).message;
  }
  return result;
}
