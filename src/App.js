// import { useState } from "react";
import { useState } from "react";
import { render } from "react-dom";
import TitleBar from "./TitleBar";
import Screen from "./Screen";
import Buttons from "./Buttons";

const App = () => {
  const [input, setInput] = useState("0");

  return (
    <div className="calculator">
      <TitleBar />
      <Screen result={input} />
      <Buttons input={input} setInput={setInput} hasOperationQueued={false} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
