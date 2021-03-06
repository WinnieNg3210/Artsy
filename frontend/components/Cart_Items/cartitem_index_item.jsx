import React from "react";
import { Link } from "react-router-dom";

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cartItem;
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleDeleteItem(e) {
    e.preventDefault();
    this.props.deleteCartItem(this.props.cartItem);
    // .then(this.props.getCartItems());
  }

  handleQuantity(e) {
    e.preventDefault();
    let nextCartItemState = Object.assign({}, this.state, {
      product_id: this.state.productId,
      quantity: e.currentTarget.value,
    });
    this.setState({ ...nextCartItemState });
    this.props.updateCartItem(nextCartItemState);
    // location.reload();
  }

  render() {
    const { product_id, quantity, price, title, imageUrl } =
      this.props.cartItem;

    let totalPrice = price * this.state.quantity;

    // console.log(this.props.cartItem);
    // if (!imageUrl) return null;
    return (
      <div className="cart-item-container">
        <Link className="cart-item" to={`/products/${product_id}`}>
          <img className="cart-item-img" src={imageUrl} />
        </Link>
        <div className="cart-item-container-right">
          <h1 className="cart-item-title">{title}</h1>
          <button
            type="submit"
            className="remove-cart-item"
            onClick={this.handleDeleteItem}
          >
            {/* Remove */}
            <p>Remove</p>
          </button>
          <div className="cart-item-flex">
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
            <div className="cart-item-total-price">
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartIndexItem;
