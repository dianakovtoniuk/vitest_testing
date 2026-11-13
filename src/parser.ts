export function extractNumbers(formData: FormData) {
  const num1Input = formData.get('num1') as string;
  const num2Input = formData.get('num2') as string;

  return [num1Input, num2Input];
}

export function extractEnteredNumberValues(form: HTMLFormElement) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}
