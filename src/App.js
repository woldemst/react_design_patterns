import { UncontolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>;
    <button onClick={() => goToNext({ name: "John Doe" })}>Step 1</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>;
    <button onClick={() => goToNext({ age: 54 })}>Step 2</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>;
    <button onClick={() => goToNext({ hairColor: "brown" })}>Step 3</button>
  </>
);

const App = () => {
  return (
    <>
      <UncontolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontolledOnboardingFlow>
    </>
  );
};

export default App;
