import React, { useState } from 'react';

import Button from '~/components/Button';
import FormulaScreen from '~/components/FormulaScreen';
import {
  checkZeroDigit, checkLastAction, isDot, isNumber, deleteElement, changeLastElement
} from '~/utils/';

import {
  Wrapper, Parent, Layer,
} from './styles';

export default function Calculator() {
  const [result, setResult] = useState('0');
  const [countDot, setCountDot] = useState(0);

  function equalAction() {
    if (checkLastAction(result)) {
      setResult((res) => deleteElement(res, 1));
    } else {
      setResult((res) => eval(res).toString());

      if (eval(result) % 1 === 0) {
        setCountDot(0);
      }
    }
  }

  function resetAction() {
    setResult('0');
    setCountDot(0);
  }

  function othersActions(value) {
    if (checkLastAction(value)) {
      if (isDot(value)) {
        setCountDot((count) => count + 1);

        if (countDot < 1) {
          setResult((res) => res + value);
        }
      } else {
        setCountDot(0);

        if (checkLastAction(result)) {
          if (value === '-' && result[result.length - 1] !== value) {
            setResult((res) => res + value);
          } else if (value !== '-' && result[result.length - 1] === '-' && !(isNumber(result[result.length - 2]))) {
            setResult((res) => deleteElement(res, 2));
            setResult((res) => res + value);
          } else if (value !== '-') {
            setResult((res) => changeLastElement(res, value, 1));
          }
        } else {
          setResult((res) => res + value);
        }
      }
    } else if (checkZeroDigit(result)) {
      setResult(value);
    } else {
      setResult((res) => res + value);
    }
  }

  function calculate(e) {
    e.persist();
    const { value } = e.target;

    switch (value) {
      case 'AC':
        resetAction();
        break;
      case '=':
        equalAction();
        break;
      default:
        othersActions(value);
        break;
    }
  }

  return (
    <Parent>
      <Wrapper>
        <Layer>
          <p> CALCULATOR </p>
        </Layer>
      </Wrapper>
      <Wrapper>
        <FormulaScreen value={result} />
        <Button value="AC" id="clear" size="true" onClick={calculate} />
        <Button value="/" id="divide" onClick={calculate} />
        <Button value="7" id="seven" onClick={calculate} />
        <Button value="8" id="eight" onClick={calculate} />
        <Button value="9" id="nine" onClick={calculate} />
        <Button value="*" id="multiply" onClick={calculate} />
        <Button value="4" id="four" onClick={calculate} />
        <Button value="5" id="five" onClick={calculate} />
        <Button value="6" id="six" onClick={calculate} />
        <Button value="-" id="subtract" onClick={calculate} />
        <Button value="1" id="one" onClick={calculate} />
        <Button value="2" id="two" onClick={calculate} />
        <Button value="3" id="three" onClick={calculate} />
        <Button value="+" id="add" onClick={calculate} />
        <Button value="." id="decimal" onClick={calculate} />
        <Button value="0" id="zero" onClick={calculate} />
        <Button value="=" id="equals" onClick={calculate} />
      </Wrapper>
    </Parent>
  );
}
