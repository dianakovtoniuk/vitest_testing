import { validateStringNotEmpty, validateNumber } from './validation';

export function transformToNumber(value: string) {
  // return NaN;
  return +value;
}

export function cleanNumbers(numberValues: string[]) {
  const numbers: number[] = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
