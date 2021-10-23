import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "../containers/layouts/Navbar/Nav";
import Login from "../containers/views/Login";
import Notfound from "../containers/views/Notfound";
import Registration from "../containers/views/Registration/Registration";

const Main = ({ children }) => {
  return <div>Salom {children}</div>;
};
const Profile = () => {
  return <h1>Profile</h1>;
};
const ProfileSetings = () => {
  return <h1>Profile Setings</h1>;
};
export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />

        <Route path="/profile/:path?" exact>
          <Nav>
            <Switch>
              <Route path="/profile" exact component={Profile} />
              <Route path="/profile/settings" component={ProfileSetings} />
              <Route path="*" component={Notfound} />
            </Switch>
          </Nav>
        </Route>

        <Route>
          <Nav>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path="/about" component={ProfileSetings} />
              <Route path="*" component={Notfound} />
            </Switch>
          </Nav>
        </Route>
      </Switch>
    </Router>
  );
}
