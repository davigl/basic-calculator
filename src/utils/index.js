import * as Validations from './validations';

export const {
  checkLastAction, checkZeroDigit, isNumber, isDot
} = Validations;

export const deleteElement = (expression, quantity) => {
  let output = expression.split('');

  if (output.length > 1) {
    return output.slice(0, output.length - quantity).join('');
  }

  return '0';
};

export const changeLastElement = (expression, value, quantity) => {
  let modifiedExpression = expression.split('');

  modifiedExpression[expression.length - quantity] = value;

  return modifiedExpression.join('');
};
