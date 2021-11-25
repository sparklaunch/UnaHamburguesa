import Brand from "./Brand";

function Frame(props) {
  return (
    <div>
      <Brand />
      {props.children}
    </div>
  );
}

export default Frame;
