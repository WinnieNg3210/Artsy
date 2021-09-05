import React from "react";
import HeaderContainer from "./Header/header_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import {AuthRoute} from "../util/route_util";

const App = () => (
    <div>
        {/* <h1>Artsy</h1> */}
        <HeaderContainer/>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} /> 
        </Switch>
       
    </div>
)

export default App;