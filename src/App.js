import Routers from "./router/Routers";
import { loadUser } from "./actions/userActions";
import store from "./store";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
