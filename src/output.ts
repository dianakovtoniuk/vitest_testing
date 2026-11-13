export function generateResultText(calculationResult: string | number | boolean) {
  let resultText = '';

  if (calculationResult === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (calculationResult !== 'no-calc') {
    resultText = 'Result: ' + calculationResult;
  }

  return resultText;
}

export function outputResult(resultText: string) {
  const output = document.getElementById('result')!;
  output.textContent = resultText;
}
