import { render } from "react-dom";
import TitleBar from "./TitleBar";
import Screen from "./Screen";
import Input from "./Input";

const App = () => {
  return (
    <div className="calculator">
      <TitleBar className="calculator__titlebar" />
      <Screen className="calculator__screen" />
      <Input className="calculator__input" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
