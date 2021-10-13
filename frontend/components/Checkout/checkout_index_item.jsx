import React from "react";
import { Link } from "react-router-dom";

class CheckoutIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product_id, quantity, price, title, imageUrl } =
      this.props.cartItem;

    let totalPrice = price * quantity;
    return (
      <div className="checkout-item-container">
        <Link to={`/products/${product_id}`}>
          <img className="checkout-img" src={imageUrl} />
        </Link>
        <div className="checkout-item-info">
          <p className="checkout-title">{title}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
    );
  }
}

export default CheckoutIndexItem;
