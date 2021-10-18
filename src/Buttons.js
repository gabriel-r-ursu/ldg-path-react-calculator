const Buttons = (props) => {
  return (
    <div className="calculator__input">
      <button
        name="AC"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--top"
      >
        AC
      </button>
      <button
        // onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--top"
      >
        +/-
      </button>
      <button
        name="%"
        // onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--top"
      >
        %
      </button>
      <button
        name="/"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--orange"
      >
        ÷
      </button>

      <button
        name="7"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        7
      </button>
      <button
        name="8"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        8
      </button>
      <button
        name="9"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        9
      </button>
      <button
        name="*"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--orange"
      >
        ×
      </button>

      <button
        name="4"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        4
      </button>
      <button
        name="5"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        5
      </button>
      <button
        name="6"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        6
      </button>
      <button
        name="-"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--orange"
      >
        –
      </button>

      <button
        name="1"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        1
      </button>
      <button
        name="2"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        2
      </button>
      <button
        name="3"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        3
      </button>
      <button
        name="+"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--orange"
      >
        +
      </button>

      <button
        name="0"
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--0 input__btn--numbers"
      >
        0
      </button>
      <button
        name=","
        onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--numbers"
      >
        ,
      </button>
      <button
        // onClick={(addInput = (e) => props.setInput(e.target.name))}
        className="input__btn input__btn--equals input__btn--orange"
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
