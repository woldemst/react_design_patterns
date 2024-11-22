
import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

const App = () => {
  return (
    <>
      <UserLoader userId={"234"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"123"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"456"}>
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default App;
