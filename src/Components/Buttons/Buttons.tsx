import { MathExpression } from 'mathjs';
import { ButtonsProps } from '../Interfaces';
import React from 'react';
import { buttonsData } from './ButtonsData';
import Button from './Button';

const Buttons: React.FC<ButtonsProps> = (input, setInput) => {
  return (
    <div className="calculator__input">
      {buttonsData.map((button) => {
        return (
          <Button
            key={button.name}
            buttonProperties={button}
            input={input}
            setInput={setInput}
          />
        );
      })}
    </div>
  );
};

export default Buttons;
