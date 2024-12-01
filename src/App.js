import React, { useState } from "react";
import { ContolledOnboardingFlow } from "./ControlledOnboardingFlow";

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
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <ContolledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ContolledOnboardingFlow>
    </>
  );
};

export default App;
