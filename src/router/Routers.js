import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "../containers/layouts/Main";
import Nav from "../containers/layouts/Navbar/Nav";
import Login from "../containers/views/Login";
import Home from "../containers/views/Main/Home/Home";
import Notfound from "../containers/views/Notfound";
import Profile from "../containers/views/Profile/Profile";
import Registration from "../containers/views/Registration/Registration";

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
          <Main>
            <Switch>
              <Route path="/profile" exact component={Profile} />
              <Route path="/profile/settings" component={ProfileSetings} />
              <Route path="*" component={Notfound} />
            </Switch>
          </Main>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={ProfileSetings} />
              <Route path="*" component={Notfound} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
}
