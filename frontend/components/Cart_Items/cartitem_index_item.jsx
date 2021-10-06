import React from "react";
import { Link } from "react-router-dom";

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cartItem;
    // this.state = {
    //   productId: this.props.cartItem.product_id,
    //   quantity: this.props.cartItem.quantity,
    //   // quantity: this.props.quantity,
    // };
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleDeleteItem(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.cartItem);
    // .then(this.props.getCartItems());
    // location.reload();
  }

  handleQuantity(e) {
    e.preventDefault();
    // this.props.changeQuantity(e.currentTarget.value);

    let nextCartItemState = Object.assign({}, this.state, {
      product_id: this.state.productId,
      quantity: e.currentTarget.value,
      // imageUrl: this.state.productId.imageUrl,
    });

    this.setState({ ...nextCartItemState });
    this.props.updateCartItem(nextCartItemState);

    location.reload();
  }

  render() {
    const { product_id, quantity, price, title } = this.props.cartItem;

    let totalPrice = price * this.state.quantity;

    return (
      <div className="cart-item-container">
        <Link className="cart-item" to={`/products/${product_id}`}>
          <img className="cart-item-img" src={this.props.cartItem.imageUrl} />
        </Link>
        <div className="cart-item-info">
          <h1 className="cart-item-title">{title}</h1>
          <button
            type="submit"
            className="remove-cart-item"
            onClick={this.handleDeleteItem}
          >
            {/* Remove */}
            <p>Remove</p>
          </button>
        </div>
        <div className="cart-item-quantity-container">
          <select
            value={quantity}
            name="quantity"
            onChange={this.handleQuantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="cart-item-total-price">${totalPrice.toFixed(2)}</div>
      </div>
    );
  }
}

export default CartIndexItem;
