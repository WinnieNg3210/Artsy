import React from "react";
import { withRouter } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import CheckIcon from "@material-ui/icons/Check";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReviewFormContainer from "../Review/create_review_form_container";
import ReviewIndexContainer from "../Review/review_index_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      showAll: false,
      quantity: 1,
      addingReview: false,
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.navigateToCart = this.navigateToCart.bind(this);
    this.addReview = this.addReview.bind(this);
    // this.handleAddReview = this.handleAddReview.bind(this);
  }

  handleAddToCart(e) {
    e.preventDefault();

    if (!this.props.user) {
      this.props.showModal("Sign in");
    } else {
      const productId = this.props.product.id;
      const cartItems = this.props.cartItems;

      const cartItem = Object.assign({}, this.state, {
        product_id: productId,
        user_id: this.props.user,
      });
      let items = {};
      for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        items[item["product_id"]] = true;
      }

      if (items.hasOwnProperty(productId)) {
        this.navigateToCart();
      } else {
        this.props.createCartItem(cartItem).then(this.navigateToCart);
      }
    }
  }

  addReview(e) {
    e.preventDefault();
    this.setState({ addingReview: !this.state.addingReview });
    // console.log(this.state.addingReview);
  }

  navigateToCart() {
    const url = "/cart";
    this.props.history.push(url);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    // this.props.fetchProduct(this.props.product.id);
  }

  togglePanel(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  toggleShow(e) {
    e.preventDefault();
    this.setState({ showAll: !this.state.showAll });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ quantity: e.target.value });
  }

  render() {
    const { product, currentUser } = this.props;
    const { open, showAll, addingReview } = this.state;

    let createReview;
    if (currentUser && addingReview) {
      // debugger;
      createReview = (
        // <div className={addingReview ? "show-review-form" : ""}>
        <ReviewFormContainer
          product={product}
          addReview={this.addReview}
          addingReview={this.state.addingReview}
        />
        // </div>
      );
    }

    let addReviewBtn;
    if (currentUser && !addingReview) {
      // button disappears when add review is clicked to show review form

      addReviewBtn = (
        <button className="add-review-btn" onClick={this.addReview}>
          Add Review
        </button>
      );
    }

    let expand = open ? (
      <ExpandMoreIcon className="expand-arrow" fontSize="small" />
    ) : (
      <ExpandLessIcon className="expand-arrow" fontSize="small" />
    );

    let showOption = showAll ? (
      <p className="show-desc less">Less</p>
    ) : (
      <p className="show-desc more">Learn more about this item</p>
    );

    if (!product) return null; // will need this to return a page that a product does not exist

    return (
      <div className="product-page-container">
        <div className="product-left">
          <img src={product.imageUrl} className="product-show-image" />
          <div className="product-reviews-container">
            <ReviewIndexContainer productId={this.props.product.id} />
            <div className="add-btn-container">{addReviewBtn}</div>
            {createReview}
          </div>
        </div>
        <div className="product-right">
          {/* <p className="product-seller">PokemonLover</p> */}
          <div className="product-header-container">
            <p className="product-seller margin-bottom">
              Sold by: {product?.seller?.first_name}
            </p>

            {/* star ratings will appear once we get to review components */}
            <h1 className="product-title margin-bottom">{product.title}</h1>
          </div>

          <div className="stock-price margin-bottom">
            <p className="product-show-price">
              <span>$</span>
              <span className="price">{product.price}</span>
              <span className="price-plus">+</span>
            </p>
            <div className="stock-container">
              <div className="stock-check">
                <CheckIcon fontSize="small" className="check-icon" />
              </div>
              <p className="in-stock">In Stock</p>
            </div>
          </div>
          <div className="product-quantity-container margin-bottom">
            <p className="quantity">Quantity</p>
            <div className="quantity-dropdown margin-bottom">
              <select value={this.state.quantity} onChange={this.handleChange}>
                <option value="1" defaultValue="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="product-show-button">
              <button
                onClick={this.handleAddToCart}
                className="add-item-button"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="cart-shipping-container margin-bottom">
            <div className="hot-item-container">
              <ShoppingCartOutlinedIcon
                style={{ color: "grey" }}
                fontSize="large"
                className="hot-item-cart"
              />
              <p>
                Other people want this. Over 20 people have this in their carts
                right now
              </p>
            </div>
            <div className="shipping-container">
              <LocalShippingOutlinedIcon
                style={{ color: "grey" }}
                fontSize="large"
                className="shipping-truck"
              />
              <p>Hooray! This item ships free to the US.</p>
            </div>
          </div>

          <div className="description-container">
            <div
              className="product-description-text"
              onClick={(e) => this.togglePanel(e)}
            >
              <h1>Description</h1>
              {expand}
            </div>
          </div>
          {this.state.open ? (
            <div className="description">
              {/* <div className="product-description"> */}
              <div className={showAll ? "show-all" : "product-description"}>
                <p>{product.description}</p>
                <br />
                <h2>FINE ART PHOTOGRAPHY PRINT</h2>
                <ul>
                  <li>Unframed Print</li>
                  <li>Borderless Print</li>
                </ul>
                <br />
                <h2>PRINT DETAILS</h2>
                <ul>
                  <li>Premium Acid-Free Photo Paper</li>
                  <li>
                    Vibrant, Fade Resistant Inks guaranteed to last a lifetime
                  </li>
                  <li>
                    Luster (non-glossy) finish protects against fingerprints and
                    UV exposure
                  </li>
                </ul>
                <br />
                <h2>MATTE PRINT OPTION</h2>
                <ul>
                  <li>White, 100% cottan-rag, conservation matting</li>
                </ul>
              </div>
              <div
                className={
                  showAll
                    ? "show-option-container less"
                    : "show-option-container more"
                }
              >
                <div
                  className="show-option-button"
                  onClick={(e) => this.toggleShow(e)}
                >
                  {showOption}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
