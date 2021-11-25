import Frame from "./layouts/Frame";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Frame>
        <h1>Hello World</h1>
      </Frame>
    </div>
  );
}

export default App;
