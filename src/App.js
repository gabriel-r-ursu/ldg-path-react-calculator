import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Your App rendered, yaaay!</h1>
      <h2>And this rendered as well</h2>
    </div>
  );
};

render(<App />, document.getElementById("root"));
