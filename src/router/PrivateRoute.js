import React from "react";
import { Route, Redirect } from "react-router-dom";

console.log(localStorage.getItem("access_token"));

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("access_token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          // to={{ pathname: "/login", state: { from: props.location } }}
          to="/login"
        />
      )
    }
  />
);
