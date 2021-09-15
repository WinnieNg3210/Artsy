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
    location.reload();
  }

  render() {
    if (!this.props.cartItems) return null;
    // prevents React from getting upset for not finding a shopping cart
    const { deleteCartItem } = this.props;

    const allCartItems = this.props.cartItems.map((cartItem) => {
      return (
        <CartIndexItem
          key={cartItem.id}
          cartItem={cartItem}
          deleteCartItem={deleteCartItem}
        />
      );
    });

    return (
      <div className="cart-container">
        <div className="cart-item-left">
          <h1>{allCartItems.length} item(s) in your cart</h1>
          <div>{allCartItems}</div>
        </div>
        <div className="cart-item-right">
          <button className="checkout-button" onClick={this.handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(CartItemIndex);
