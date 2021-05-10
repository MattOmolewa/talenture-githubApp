import React from "react";
import Header from "./Header";
import Users from "./Users";
import { Route, Switch, Redirect } from "react-router-dom";
import GithubContext from "../context/GithubContext";
import UserDetails from "./UserDetails";

const ResultCanvas = () => {
  return (
    <div className="results">
      {/* <Users /> */}
      <Switch>
        <Route path={`/user/:name`} component={UserDetails} />
        <Route path="/" component={Users} />
      </Switch>
    </div>
  );
};

export { ResultCanvas };
