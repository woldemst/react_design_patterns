
import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";

const App = () => {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
};

export default App;
