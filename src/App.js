import { SplitScreen } from "./SplitScreen";

const LeftPanel = ({ name }) => {
  return <div style={{ backgroundColor: "lightblue" }}>{name}</div>;
};

const RightPanel = ({ message }) => {
  return <div style={{ backgroundColor: "lightgreen" }} >{message}</div>;
};

const App = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftPanel name={"John Doe"} />
      <RightPanel message={"Hello World"} />
    </SplitScreen>
  );
};

export default App;
