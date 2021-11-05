import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import TitleBar from './Components/TitleBar';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons/Buttons';

const App = () => {
  const [input, setInput] = useState('0');

  return (
    <div className="calculator">
      <TitleBar />
      <Screen input={input} />
      <Buttons input={input} setInput={setInput} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
