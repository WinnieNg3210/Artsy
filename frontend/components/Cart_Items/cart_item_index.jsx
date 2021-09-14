import React from "react";
import { withRouter } from "react-router";
import CartIndexItem from "./cart_item_index_item";

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentDidMount() {
    this.props.getCartItems();
  }

  handleCheckout(e) {
    e.preventDefault();
    this.props.cartItems.forEach((item) => {
      this.props.deleteCartItem(item);
    });
  }

  render() {
    if (!this.props.cartItems) return null;
    // prevents React from getting upset for not finding a shopping cart
    const allCartItems = this.props.cartItems.map((cartItem) => {
      return <CartIndexItem key={cartItem.id} cartItem={cartItem} />;
    });

    return (
      <div>
        <div>{allCartItems}</div>
        <button className="checkout-button" onClick={this.handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    );
  }
}

export default withRouter(CartItemIndex);
