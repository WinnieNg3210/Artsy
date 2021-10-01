import React from "react";
import { withRouter } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import CheckIcon from "@material-ui/icons/Check";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReviewFormContainer from "../Review/create_review_form_container";
import ReviewIndexContainer from "../Review/review_index_container";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      quantity: 1,
      addingReview: false,
      editingReview: false,
    };

    this.togglePanel = this.togglePanel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.navigateToCart = this.navigateToCart.bind(this);
    this.addReview = this.addReview.bind(this);
    this.editReview = this.editReview.bind(this);
    // this.handleAddReview = this.handleAddReview.bind(this);
  }

  handleAddToCart(e) {
    e.preventDefault();

    if (!this.props.user) {
      this.props.showModal("Sign in");
    } else {
      const productId = this.props.product.id;
      const cartItems = this.props.cartItems;
      let items = {};
      for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i];
        items[item["product_id"]] = true;
      }
      const cartItem = Object.assign({}, this.state, {
        product_id: productId,
        user_id: this.props.user,
      });

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
  }

  editReview(e) {
    e.preventDefault();
    this.setState({ editingReview: !this.state.editingReview });
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

  handleChange(e) {
    e.preventDefault();
    this.setState({ quantity: e.target.value });
  }

  render() {
    // debugger;
    const { product, currentUser, reviews, cartItems } = this.props;
    // console.log(cartItems);
    const { open } = this.state;
    // let buyItNow;
    let addReview;
    if (currentUser) {
      // buyItNow = <button className="buy-now-button">Buy it now</button>;
      addReview = <ReviewFormContainer product={product} />;
    }

    let expand = open ? (
      <ExpandMoreIcon className="expand-arrow" fontSize="small" />
    ) : (
      <ExpandLessIcon className="expand-arrow" fontSize="small" />
    );

    if (!product) return null; // will need this to return a page that a product does not exist

    return (
      <div className="product-page-container">
        <div className="product-left">
          <img src={product.imageUrl} className="product-show-image" />
          <div className="product-reviews-container">
            <ReviewIndexContainer productId={this.props.product.id} />
            {addReview}
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
                <option value="5">5</option>
              </select>
            </div>
            <div className="product-show-button">
              {/* {buyItNow} */}
              <button
                onClick={this.handleAddToCart}
                className="add-item-button"
              >
                Add to Cart
              </button>
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
            <div className="product-description">
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
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
