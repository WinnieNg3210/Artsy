import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import HeaderContainer from "./Header/header_container";
import Modal from "./Modal/modal";
import Footer from "./footer";
// import { AuthRoute } from "../util/route_util";
import ProductShowContainer from "./Products/product_show_container";
import ProductIndexContainer from "./Products/product_index_container";

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={ProductIndexContainer} />
      <Route
        exact
        path="/products/:productId"
        component={ProductShowContainer}
      />
    </Switch>
    <Footer />
  </div>
);

export default App;
