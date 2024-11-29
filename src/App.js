import { useState } from "react";
import { UncontolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
const App = () => {
  const StepOne = ({ goToNext }) => (
    <>
      <h1>Step One</h1>;<button onClick={goToNext}>Step 1</button>
    </>
  );

  const StepTwo = ({ goToNext }) => (
    <>
      <h1>Step Two</h1>;<button onClick={goToNext}>Step 2</button>
    </>
  );

  const StepThree = ({ goToNext }) => (
    <>
      <h1>Step Three</h1>;<button onClick={goToNext}>Step 3</button>
    </>
  );

  return (
    <>
      <UncontolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontolledOnboardingFlow>
    </>
  );
};

export default App;
