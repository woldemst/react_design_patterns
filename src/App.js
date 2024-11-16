import { SplitScreen } from "./SplitScreen";

const LeftPanel = () => {
  return <div>Left panel content</div>;
};

const RightPanel = () => {
  return <div>Right panel content</div>;
};

const App = () => {
  return (
    <SplitScreen left={LeftPanel} right={RightPanel} />
  );
};

export default App;
