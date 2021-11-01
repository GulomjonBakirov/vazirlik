import Routers from "./router/Routers";
import { loadUser } from "./actions/userActions";
import store from "./store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
