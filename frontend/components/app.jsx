import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import HeaderContainer from "./Header/header_container";
import Modal from "./Modal/modal";
import Footer from "./footer";
// import { AuthRoute } from "../util/route_util";
// import BodyContainer from "./Splash/body_container";
import ProductIndexContainer from "./Products/product_index_container";

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    {/* <Banner /> */}
    <Switch>
      {/* <Route exact path="/" component={BodyContainer} /> */}
      <Route exact path="/" component={ProductIndexContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
