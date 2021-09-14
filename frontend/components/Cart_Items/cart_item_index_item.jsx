import React from "react";
import { Link } from "react-router-dom";

class CartItemIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      // imageUrl
      product_id,
      quantity,
      price,
    } = this.props.cartItem;

    // will need to have window.quebec to imageUrl

    return (
      <div>
        <div>
          <Link className="cart-item" to={`/products/${product_id}`}>
            <img className="cart-item-img" src={window.quebec} />
          </Link>
        </div>
        <div className="cart-item-quantity-container">
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    );
  }
}

export default CartItemIndexItem;
