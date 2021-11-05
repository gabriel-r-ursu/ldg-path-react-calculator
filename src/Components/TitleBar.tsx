import React from 'react';

const TitleBar: React.FC = () => {
  return (
    <div className="calculator__titlebar">
      <TitleButton />
    </div>
  );
};

function TitleButton(): React.ReactElement {
  return (
    <div className="titlebar__container">
      <button className="titlebar__btn titlebar__btn--red"></button>
      <button className="titlebar__btn titlebar__btn--yellow"></button>
      <button className="titlebar__btn titlebar__btn--green"></button>
    </div>
  );
}

export default TitleBar;
