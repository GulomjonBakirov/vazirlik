import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../containers/views/Login";
import Registration from "../containers/views/Registration/Registration";

export default function Routers() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </Router>
  );
}
