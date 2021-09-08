import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import HeaderContainer from "./Header/header_container";
import Modal from "./Modal/modal";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import Product from "./Testing/product";
import Footer from "./Splash/footer";

import { AuthRoute } from "../util/route_util";
import BodyContainer from "./Splash/body_container";

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    {/* <Banner /> */}
    <Switch>
      {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}

      <Link to="/" component={BodyContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
