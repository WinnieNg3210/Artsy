import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import HeaderContainer from "./Header/header_container";
import Modal from "./Modal/modal";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Banner from "./Splash/banner";
// import Product from "./Testing/product";

import { AuthRoute } from "../util/route_util";
import MainPage from "./Splash/main_page";

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    <Banner />
    {/* <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> 
        </Switch> */}
    {/* <Product/> */}
    <MainPage />
  </div>
);

export default App;
