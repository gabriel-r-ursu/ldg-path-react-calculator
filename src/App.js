// import { useState } from "react";
import { useState } from "react";
import { render } from "react-dom";
import TitleBar from "./TitleBar";
import Screen from "./Screen";
import Buttons from "./Buttons/Buttons";

const App = () => {
  const [input, setInput] = useState("0");

  return (
    <div className="calculator">
      <TitleBar />
      <Screen input={input} />
      <Buttons input={input} setInput={setInput} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
