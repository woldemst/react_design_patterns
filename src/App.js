
import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

const App = () => {
  return (
    <>
      <ResourceLoader resourceUrl={'/users/123'} resourceName={'user'} >
        <UserInfo />
      </ResourceLoader>
    </>
  );
};

export default App;
