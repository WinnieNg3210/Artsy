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
    this.props
      .deleteCartItem(this.props.cartItem)
      .then(this.props.getCartItems);
  }

  handleQuantity(e) {
    e.preventDefault();

    let nextCartItemState = Object.assign({}, this.state, {
      product_id: this.state.productId,
      quantity: e.currentTarget.value,
    });

    this.setState({ ...nextCartItemState });
    this.props.updateCartItem(nextCartItemState);

    // this.setState({ quantity: e.currentTarget.value });
    // this.props.changeQuantity(this.state.quantity);
  }

  render() {
    const { product_id, quantity, price, title } = this.state;

    let totalPrice = price * this.state.quantity;
    const { imageUrl } = this.state;

    // will need to have window.quebec to imageUrl once we test with aws
    // debugger;
    // console.log(this.props.cartItem);
    return (
      <div className="cart-item-container">
        <Link className="cart-item" to={`/products/${product_id}`}>
          <img className="cart-item-img" src={imageUrl} />
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
          <select value={quantity} onChange={this.handleQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div className="cart-item-total-price">${totalPrice.toFixed(2)}</div>
      </div>
    );
  }
}

export default CartIndexItem;
