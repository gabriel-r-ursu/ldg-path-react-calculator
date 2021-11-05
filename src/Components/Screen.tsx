import React from 'react';
// @ts-ignore
import { Textfit } from 'react-textfit';

interface IState {
  input: string;
}

const Screen: React.FC<IState> = ({ input }) => {
  return (
    <div className="calculator__screen">
      <Textfit mode="single" max={45} className="screen__numbers">
        {input}
      </Textfit>
    </div>
  );
};

export default Screen;
