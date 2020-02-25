export const checkLastAction = (expression) => {
  const actions = /[+/\-x*.]$/;

  return actions.test(expression);
};

export const checkZeroDigit = (expression) => expression === '0';

export const isDot = (expression) => expression === '.';

export const isNumber = (value) => {
  const numbers = /[0-9]/;

  return numbers.test(value);
};
