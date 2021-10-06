import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import HeaderContainer from "./Header/header_container";
import Modal from "./Modal/modal";
import Footer from "./footer";
// import { AuthRoute } from "../util/route_util";
import ProductShowContainer from "./Products/product_show_container";
import ProductIndexContainer from "./Products/product_index_container";
import EditReviewFormContainer from "./Review/edit_review_form_container";
import CartIndexContainer from "./Cart_Items/cart_item_index_container";
import SearchContainer from "./Search/search_container";

const App = () => (
  <div>
    <Modal />
    <HeaderContainer />
    <Switch>
      <Route
        exact
        path="/products/:productId"
        component={ProductShowContainer}
      />
      <Route
        exact
        path="/products/:productId/reviews/:reviewId"
        component={EditReviewFormContainer}
      />
      <Route exact path="/products" component={SearchContainer} />
      <Route exact path="/cart" component={CartIndexContainer} />
      <Route exact path="/" component={ProductIndexContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
