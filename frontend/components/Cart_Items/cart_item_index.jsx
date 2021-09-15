import React from "react";
import { withRouter } from "react-router";
import CartIndexItem from "./cart_item_index_item";
import { Link } from "react-router-dom";

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
    this.props.cartItems
      .forEach((item) => {
        this.props.deleteCartItem(item);
      })
      .then(this.props.getCartItems);
    // location.reload();
  }

  render() {
    if (!this.props.cartItems) return null;
    // prevents React from getting upset for not finding a shopping cart
    const { deleteCartItem, getCartItems } = this.props;

    const allCartItems = this.props.cartItems.map((cartItem) => {
      return (
        <CartIndexItem
          key={cartItem.id}
          cartItem={cartItem}
          deleteCartItem={deleteCartItem}
          getCartItems={getCartItems}
        />
      );
    });

    return (
      <div className="cart-container">
        <h1 className="cart-item-header">
          <p className="item-quantity">
            {allCartItems.length} item(s) in your cart
          </p>
          <Link to="/" className="continue-shop">
            Keep Shopping
          </Link>
        </h1>
        <div className="cart-item-info-container">
          <div className="cart-item-left">
            <div>{allCartItems}</div>
          </div>
          <div className="cart-item-right">
            <label>
              <input type="radio" />
              Credit Cart
            </label>
            <br />
            <label>
              <input type="radio" />
              PayPal
            </label>
            <br />
            <div className="subtotal">
              <p>Item(s) total</p>
              <p>$$$</p>
            </div>
            <div className="shipping-total">
              <p>Shipping</p>
              <p>$$$</p>
            </div>
            <div className="total-cost">
              <p>Total({allCartItems.length})</p>
              <p>$$$</p>
            </div>
            <button className="checkout-button" onClick={this.handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CartItemIndex);
