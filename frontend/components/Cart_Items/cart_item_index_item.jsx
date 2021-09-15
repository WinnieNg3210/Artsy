import React from "react";
import { Link } from "react-router-dom";

class CartItemIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleDeleteItem(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.cartItem);
    location.reload();
  }

  render() {
    const {
      // imageUrl
      product_id,

      quantity,
      price,
      title,
    } = this.props.cartItem;

    // const { imageUrl } = this.props;

    // will need to have window.quebec to imageUrl
    // debugger;
    // console.log(this.props.cartItem);
    return (
      <div className="cart-item-container">
        <Link className="cart-item" to={`/products/${product_id}`}>
          <img className="cart-item-img" src={window.quebec} />
        </Link>
        <div className="cart-item-info">
          <h1 className="cart-item-title">{title}</h1>
          <button
            type="submit"
            className="remove-cart-item"
            onClick={this.handleDeleteItem}
          >
            Remove
          </button>
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
        <div>${price}</div>
      </div>
    );
  }
}

export default CartItemIndexItem;
