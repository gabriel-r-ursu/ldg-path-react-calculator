import * as math from "mathjs";

const Buttons = (props) => {
  const availableOperations = ["+", "-", "*", "/", "."];

  const addInput = (e) => {
    if (
      (availableOperations.includes(e.target.name) &&
        props.input.toString() === "0") ||
      (availableOperations.includes(e.target.name) &&
        availableOperations.includes(props.input.toString().slice(-1)))
    )
      return;

    props.setInput(
      props.input === "0"
        ? (props.input = e.target.name)
        : (props.input = props.input + e.target.name)
    );
  };

  const handleClear = () => props.setInput("0");
  const handleClearText = props.input !== "0" ? "C" : "AC";

  const toNegative = () => {
    props.setInput(
      Math.sign(props.input) === 1
        ? -Math.abs(props.input)
        : Math.abs(props.input)
    );
  };

  const moveTwoDecimalPlaces = () =>
    props.setInput(props.input / Math.pow(10, 2));

  const handleEquals = () =>
    props.setInput(props.input === "0" ? "0" : math.evaluate(props.input));

  return (
    <div className="calculator__input">
      <button
        name={handleClearText}
        onClick={handleClear}
        className="input__btn input__btn--top"
      >
        {handleClearText}
      </button>
      <button onClick={toNegative} className="input__btn input__btn--top">
        +/-
      </button>

      <button
        name="%"
        onClick={moveTwoDecimalPlaces}
        className="input__btn input__btn--top"
      >
        %
      </button>

      <button
        name="/"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        ÷
      </button>

      <button
        name="7"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        7
      </button>
      <button
        name="8"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        8
      </button>
      <button
        name="9"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        9
      </button>
      <button
        name="*"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        ×
      </button>

      <button
        name="4"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        4
      </button>
      <button
        name="5"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        5
      </button>
      <button
        name="6"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        6
      </button>
      <button
        name="-"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        –
      </button>

      <button
        name="1"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        1
      </button>
      <button
        name="2"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        2
      </button>
      <button
        name="3"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        3
      </button>
      <button
        name="+"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        +
      </button>

      <button
        name="0"
        onClick={addInput}
        className="input__btn input__btn--0 input__btn--numbers"
      >
        0
      </button>
      <button
        name="."
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        ,
      </button>
      <button
        onClick={handleEquals}
        name="="
        className="input__btn input__btn--equals input__btn--orange"
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
