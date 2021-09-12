import React from "react";
import { withRouter } from "react-router";
import Checkout from "./checkout_container";

class CartShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Checkout of here!</h1>
        <div className="checkout-right">
          <Checkout />
          {/* will probably need to pass values inside checkout so that the props can be used for total item in cart */}
        </div>
      </div>
    );
  }
}

export default withRouter(CartShow);
