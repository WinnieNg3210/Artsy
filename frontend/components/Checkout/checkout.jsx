import React from "react";
import { withRouter } from "react-router";
import CheckoutIndexItem from "./checkout_index_item";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToSplashPage = this.navigateToSplashPage.bind(this);
  }

  navigateToSplashPage(e) {
    e.preventDefault();
    this.props.cartItems.forEach((item) => {
      this.props.deleteCartItem(item);
    });
    this.props.hideModal();
    this.props.history.push("/");
  }

  render() {
    const { cartItems } = this.props;

    const allCheckedItems = cartItems.map((cartItem) => {
      return <CheckoutIndexItem key={cartItem.id} cartItem={cartItem} />;
    });

    let subTotal = 0;
    cartItems.forEach((cartItem) => {
      subTotal += cartItem.quantity * cartItem.price;
    });
    let shipping = subTotal * 0.05;
    let totalCost = subTotal + shipping;

    return (
      <div className="checkout-container">
        <div className="checkout-top">
          <h1>Order Summary</h1>
        </div>
        <div className="checkout-bottom">
          <div>
            <p className="checkout-note">
              Thank you for your purchase! You will receive an email shortly
              with a summary of your purchases. In the meantime, check out some
              more photographs from other shops!
            </p>
          </div>
          <br />
          <p>Your Purchases:</p>
          <div className="checkout-scroll">
            <div className="checkout-item">{allCheckedItems}</div>
            <div className="checkout-total">
              <div className="checkout-pricing">
                <p>Item(s) Total:</p>
                <p>${subTotal.toFixed(2)}</p>
              </div>
              <div className="checkout-pricing">
                <p>Shipping:</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className="checkout-pricing total">
                <p>Total:</p>
                <p>${totalCost.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="checkout-home-container">
            <button
              onClick={this.navigateToSplashPage}
              className="checkout-home"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Checkout);
