import React from "react";
import "typeface-roboto";

import { Switch, Route } from "react-router-dom";

import SignIn from "./components/Account/SignIn/";
import SignUp from "./components/Account/SignUp/";
import Home from "./components/Home";
import Followers from "./components/Followers/Followers";

//import AuthenticatedRoute from "./components/common/AuthenticatedRoute";

const App = () => (
  <Switch>
    <Route path="/following" />
    <Route path="/followers" component={Followers} />
    <Route path="/" component={Home} />

    <Route path="/auth/login" render={props => <SignIn {...props} />} />
    <Route path="/auth/signup" component={SignUp} />
    {/* 
    <AuthenticatedRoute path="/" component={Home} /> */}
  </Switch>
);

export default App;
