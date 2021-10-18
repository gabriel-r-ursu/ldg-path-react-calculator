const Screen = (props) => {
  return (
    <div className="calculator__screen">
      <span className="screen__numbers">{props.result}</span>
    </div>
  );
};

export default Screen;
