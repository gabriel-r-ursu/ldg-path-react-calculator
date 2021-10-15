const Buttons = () => {
  return (
    <div className="calculator__input">
      <button className="input__btn input__color--top">C</button>
      <button className="input__btn input__color--top">-/+</button>
      <button className="input__btn input__color--top">%</button>
      <button className="input__btn input__btn--orange">÷</button>
      <button className="input__btn input__btn--numbers">7</button>
      <button className="input__btn input__btn--numbers">8</button>
      <button className="input__btn input__btn--numbers">9</button>
      <button className="input__btn input__btn--orange">X</button>
      <button className="input__btn input__btn--numbers">4</button>
      <button className="input__btn input__btn--numbers">5</button>
      <button className="input__btn input__btn--numbers">6</button>
      <button className="input__btn input__btn--orange">-</button>
      <button className="input__btn input__btn--numbers">1</button>
      <button className="input__btn input__btn--numbers">2</button>
      <button className="input__btn input__btn--numbers">3</button>
      <button className="input__btn input__btn--orange">+</button>
      <button className="input__btn input__btn--0 input__btn--numbers">
        0
      </button>
      <button className="input__btn input__btn--numbers">,</button>
      <button className="input__btn input__btn--equals input__btn--orange">
        =
      </button>
    </div>
  );
};

export default Buttons;
