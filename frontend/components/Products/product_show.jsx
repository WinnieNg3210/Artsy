import React from "react";
import { withRouter } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import CheckIcon from "@material-ui/icons/Check";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ProtectedRoute } from "../../util/route_util";
import ReviewFormContainer from "./review_form_container";
import { ReviewLink } from "../../util/link_util";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      quantity: "1",
    };

    this.togglePanel = this.togglePanel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  togglePanel(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ quantity: e.target.value });
  }

  render() {
    const { product, productId, reviews, currentUser, userId } = this.props;
    const { open } = this.state;
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

    let expand = open ? (
      <ExpandMoreIcon className="expand-arrow" fontSize="small" />
    ) : (
      <ExpandLessIcon className="expand-arrow" fontSize="small" />
    );

    // const randomNumber = Math.floor(Math.random() * 100) + 20;
    if (!product) return null; // will need this to return a page that a product does not exist
    return (
      <div className="product-page-container">
        <div className="product-left">
          <img src={imageSrc} className="product-show-image" />
          <div className="product-reviews-container">
            <p>WILL ADD SOME REVIEWS SOON!</p>
            <ReviewLink
              component={ReviewFormContainer}
              to={`/products/${this.props.product.id}/review`}
            />
            <ProtectedRoute
              path="products/:productId/review"
              component={ReviewFormContainer}
            />
          </div>
        </div>
        <div className="product-right">
          {/* <p className="product-seller">PokemonLover</p> */}
          <div className="product-header-container">
            <p className="product-seller">
              Sold by: {product?.seller?.first_name}
            </p>

            {/* star ratings will appear once we get to review components */}
            <h1 className="product-title">{product.title}</h1>
          </div>

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
          <div className="product-quantity-container">
            <p className="quantity">Quantity</p>
            <div className="quantity-dropdown">
              <select value={this.state.quantity} onChange={this.handleChange}>
                <option value="1" defaultValue="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="product-show-button">
              {buyItNow}
              <button className="add-item-button">Add to Cart</button>
            </div>
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
                Over 20 people have this in their carts right now
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
            <div className="description-hover">
              <div
                className="product-description-text"
                onClick={(e) => this.togglePanel(e)}
              >
                <h1>Description</h1>
                {expand}
              </div>
            </div>
          </div>
          {this.state.open ? (
            <p className="product-description">{product.description}</p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
