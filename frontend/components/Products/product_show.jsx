import React from "react";
import { withRouter } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import CheckIcon from "@material-ui/icons/Check";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    const { product, currentUser } = this.props;
    let imageSrc = window.quebec;
    // let imageSrc;
    // if (product.imageUrl) {
    //   imageSrc = product.imageUrl;
    // } else {
    //   imageSrc = window.quebec;
    // }

    let buyItNow;

    if (currentUser) {
      buyItNow = <button className="buy-now-button">Buy it now</button>;
    }

    let randomNumber = Math.floor(Math.random() * 100) + 20;
    if (!product) return null; // will need this to return a page that a product does not exist
    return (
      <div className="product-page-container">
        <div className="product-left">
          <img src={imageSrc} className="product-show-image" />
          <div className="reviews-container">
            <p>WILL ADD SOME REVIEWS SOON!</p>
          </div>
        </div>
        <div className="product-right">
          {/* <p className="product-seller">PokemonLover</p> */}
          <p className="product-seller">
            Sold by: {product?.seller?.first_name}
          </p>

          {/* star ratings will appear once we get to review components */}
          <h1 className="product-title">{product.title}</h1>

          <div className="stock-price">
            <p className="product-show-price">
              <span>$</span>
              <span className="price">{product.price}</span>
              <span className="price-plus">+</span>
            </p>
            <div className="stock-container">
              <div className="stock-check">
                <CheckIcon fontSize="small" />
              </div>
              <p className="in-stock">In Stock</p>
            </div>
          </div>

          <div className="product-show-button">
            {buyItNow}
            <button className="add-item-button">Add to Cart</button>
          </div>
          <div className="cart-shipping-container">
            <div className="hot-item-container">
              <ShoppingCartOutlinedIcon
                style={{ color: "grey" }}
                fontSize="large"
                className="hot-item-cart"
              />
              <p>
                <span className="hot-item">Other people want this. </span>
                Over {randomNumber} people have this in their carts right now
              </p>
            </div>
            <div className="shipping-container">
              <LocalShippingOutlinedIcon
                style={{ color: "grey" }}
                fontSize="large"
                className="shipping-truck"
              />
              <p>
                <span>Hooray!</span> This item ships free to the US.
              </p>
            </div>
          </div>

          <div className="description-container">
            <div className="product-description-text">
              <h1>Description</h1>
              <ExpandLessIcon className="expand-arrow" fontSize="small" />
            </div>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
