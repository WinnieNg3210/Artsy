import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import HeaderContainer from "./Header/header_container";
import Modal from "./Modal/modal";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import Product from "./Testing/product";

import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    {/* <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> 
        </Switch> */}
    {/* <Product/> */}
  </div>
);

export default App;
