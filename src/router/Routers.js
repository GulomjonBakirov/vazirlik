import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main from "../containers/layouts/Main";
import Content from "../containers/views/Courses/Content";
import Courses from "../containers/views/Courses/Courses";
import TestContent from "../containers/views/Courses/TestContent";
import Login from "../containers/views/Login";
import Home from "../containers/views/Main/Home/Home";
import Notfound from "../containers/views/Notfound";
import Profile from "../containers/views/Profile/Profile";
import Registration from "../containers/views/Registration/Registration";
import Certificate from "../containers/views/Courses/certificate/Certificate";

const ProfileSetings = () => {
  return <h1>Profile Setings</h1>;
};
export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />

        <Route path="/myCourses/course/:path">
          <Courses>
            <Route path="/myCourses/course/0" component={Content} />
            <Route path="/myCourses/course/1" component={Content} />
            <Route path="/myCourses/course/2" component={Content} />
            <Route path="/myCourses/course/test" component={TestContent} />
          </Courses>
        </Route>
        <Route path="/certificate" component={Certificate} />
        <Route path="/profile/:path?" exact>
          <Main>
            <Switch>
              <Route path="/profile" exact component={Profile} />
              {/* <Route path="/profile/settings" component={ProfileSetings} /> */}
              {/* <Route path="/myCourses" component={Courses} /> */}
              <Route path="*" component={Notfound} />
            </Switch>
          </Main>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/about" component={ProfileSetings} /> */}
              <Route path="*" component={Notfound} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
}
