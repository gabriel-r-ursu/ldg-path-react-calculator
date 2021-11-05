import { MouseEvent } from 'react';
import { ButtonsProps } from '../Interfaces';
import React from 'react';
import * as math from 'mathjs';

const Button: React.FC<ButtonsProps> = ({
  input,
  setInput,
  buttonProperties,
}) => {
  const handleInputs = (e: any): any => {
    const buttonPressed = e.target.name;

    if (input === '0' && buttonPressed === '0') return;

    if (buttonPressed === 'C') {
      setInput('0');
    } else if (buttonPressed === '+/-') {
      setInput(`${math.evaluate(`+${input}`) ? -input : +input}`);
    } else if (buttonPressed === '%') {
      setInput(`${math.evaluate(`${input}%`)}`);
    } else if (buttonPressed === '=') {
      setInput(`${input === '0' ? '0' : math.evaluate(input)}`);
    } else {
      setInput(`${(input += buttonPressed).replace(/^0+/, '')}`);
    }
  };
  return (
    <button
      name={buttonProperties.name}
      className={buttonProperties.className}
      onClick={handleInputs}
    >
      {buttonProperties.name}
    </button>
  );
};

export default Button;
