import { render } from "react-dom";
import TitleBar from "./TitleBar";
import Screen from "./Screen";
import Buttons from "./Buttons";

const App = () => {
  return (
    <div className="calculator">
      <TitleBar />
      <Screen />
      <Buttons />
    </div>
  );
};

render(<App />, document.getElementById("root"));
