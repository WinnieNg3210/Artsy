import React from "react";
import { withRouter } from "react-router";
import CartIndexItem from "./cartitem_index_item";
import { Link } from "react-router-dom";

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };

    this.handleCheckout = this.handleCheckout.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  componentDidMount() {
    this.props.getCartItems();
  }

  changeQuantity(cartItem) {
    this.props.updateCartItem(cartItem);
  }

  handleCheckout(e) {
    e.preventDefault();
    this.props.cartItems.forEach((item) => {
      this.props.deleteCartItem(item);
    });
    this.props.history.push("/");
  }

  render() {
    if (!this.props.cartItems) return null;
    const { deleteCartItem, getCartItems, updateCartItem } = this.props;

    const allCartItems = this.props.cartItems.map((cartItem) => {
      return (
        <CartIndexItem
          key={cartItem.id}
          cartItem={cartItem}
          deleteCartItem={deleteCartItem}
          getCartItems={getCartItems}
          updateCartItem={updateCartItem}
          imageUrl={cartItem.imageUrl}
          changeQuantity={this.changeQuantity}
          // quantity={cartItem.quantity}
          // product_id={cartItem.product.id}
        />
      );
    });

    let subTotal = 0;
    this.props.cartItems.forEach((cartItem) => {
      subTotal += cartItem.quantity * cartItem.price;
    });

    let shipping = subTotal * 0.05;
    let totalItemsCost =
      allCartItems.length > 1 ? (
        <p>Total ({allCartItems.length} items)</p>
      ) : (
        <p>Total ({allCartItems.length} item)</p>
      );

    let showCartItems = this.props.user ? <div>{allCartItems}</div> : null;

    return (
      <div className="cart-container">
        <h1 className="cart-item-header">
          <p>{allCartItems.length} item(s) in your cart</p>
          <Link to="/" className="continue-shop">
            Keep Shopping
          </Link>
        </h1>

        <div className="cart-item-info-container">
          <div className="cart-item-left">{showCartItems}</div>
          <div className="cart-item-right">
            <div className="payment-container">
              <h1>How you'll pay</h1>
              <div className="payment-method">
                <label className="payment-type">
                  <input type="radio" name="payment" />
                  <div className="credit-card-type">
                    <img
                      src={window.master}
                      alt="mastercard"
                      className="credit-card"
                    />
                    <img src={window.visa} alt="visa" className="credit-card" />
                    <img src={window.amex} alt="amex" className="credit-card" />
                    <img
                      src={window.discover}
                      alt="discover"
                      className="credit-card"
                    />
                  </div>
                </label>
                <label className="payment-type">
                  <input type="radio" name="payment" />
                  <p>PayPal</p>
                </label>
              </div>

              <div className="subtotal">
                <p>Item(s) total</p>
                <p className="subtotal-inc">${subTotal.toFixed(2)}</p>
              </div>
              <div className="shipping-total">
                <p>Shipping</p>
                <p className="subtotal-inc">${shipping.toFixed(2)}</p>
              </div>
              <div className="total-cost">
                {/* <p>Total ({allCartItems.length} item)</p> */}
                {totalItemsCost}
                <p className="subtotal-inc">
                  ${(subTotal + shipping).toFixed(2)}
                </p>
              </div>
              <button className="checkout-button" onClick={this.handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CartItemIndex);
