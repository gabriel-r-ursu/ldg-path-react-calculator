import { Textfit } from "react-textfit";

const Screen = (props) => {
  return (
    <div className="calculator__screen">
      <Textfit mode="single" max={45} className="screen__numbers">
        {props.result}
      </Textfit>
    </div>
  );
};

export default Screen;
