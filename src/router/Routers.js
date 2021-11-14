import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { loadUser } from "../actions/userActions";
import store from "../store";
import { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import Payment from "../containers/views/Payment";
import { PrivateRoute } from "./PrivateRoute";
// import Quiz from "../containers/views/quizApp/Quiz";

const ProfileSetings = () => {
  return <h1>Profile Setings</h1>;
};

export default function Routers() {
  const dispatch = useDispatch();

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />

        <Route exact path="/">
          <Main>
            <Home />
          </Main>
        </Route>
        {/* <Route path="/about" component={ProfileSetings} /> */}
        <PrivateRoute exact path="/profile">
          <Main>
            <Profile />
          </Main>
        </PrivateRoute>
        <Route exact path="/payment">
          <Main>
            <Payment />
          </Main>
        </Route>
        <PrivateRoute exact path="/courses/0">
          <Courses>
            <Content />
          </Courses>
        </PrivateRoute>
        <PrivateRoute exact path="/courses/1">
          <Courses>
            <Content />
          </Courses>
        </PrivateRoute>
        <PrivateRoute exact path="/courses/2">
          <Courses>
            <Content />
          </Courses>
        </PrivateRoute>

        <PrivateRoute exact path="/courses/test">
          <Courses>
            <TestContent />
            {/* <Quiz /> */}
          </Courses>
        </PrivateRoute>
        <PrivateRoute exact path="/courses/certificate">
          <Courses>
            <Certificate />
          </Courses>
        </PrivateRoute>
        <Route path="*">
          <Main>
            <Notfound />
          </Main>
        </Route>
      </Switch>
    </Router>
  );
}
