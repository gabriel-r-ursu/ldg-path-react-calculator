import { Textfit } from "react-textfit";

const Screen = ({ input }) => {
  return (
    <div className="calculator__screen">
      <Textfit mode="single" max={45} className="screen__numbers">
        {input}
      </Textfit>
    </div>
  );
};

export default Screen;
