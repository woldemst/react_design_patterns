import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { DataSource } from "./DataSource";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";
import axios from "axios";

const App = () => {
  return (
    <>
      <DataSource
        getDataFunction={async () => {
          const responce = await axios.get("/users/123");
          return responce.data;
        }}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
    </>
  );
};

export default App;
