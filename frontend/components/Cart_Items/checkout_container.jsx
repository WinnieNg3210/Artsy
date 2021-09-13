import React from "react";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>How you'll pay</h1>
        <div className="payment-method">
          <label>
            {/* inputs are images instead */}
            {/* <input type="radio">Credit Card</input>
            <input type="radio">Paypal</input>
            <input type="radio">Installment Plan</input> */}
          </label>
        </div>
        <div className="checkout-cost">
          <div className="subtotal">
            <h1>Item(s) total</h1>
            <p>
              <span>$</span>0
            </p>
          </div>
          <div className="shipping-cost">
            <h1>Shipping</h1>
            <p>
              <span>$</span>0
            </p>
          </div>
        </div>
        <div className="total-cost">
          <strong>Total (# items)</strong>
          <strong>$0</strong>
        </div>
        <button>Proceed to checkout</button>
      </div>
    );
  }
}

export default Checkout;
