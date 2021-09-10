import React from "react";
import { withRouter } from "react-router-dom";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    const { product } = this.props;
    if (!product) return null; // will need this to return a page that a product does not exist
    return (
      <div className="product-page-container">
        <div className="product-left">
          <img src={window.quebec} className="product-show-image" />
          <div className="reviews-container">
            <p>WILL ADD SOME REVIEWS SOON!</p>
          </div>
        </div>
        <div className="product-right">
          {/* <p className="product-seller">PokemonLover</p> */}
          <p className="product-seller">{product?.seller?.first_name}</p>

          {/* star ratings will appear once we get to review components */}
          <h1 className="product-title">{product.title}</h1>
          {/* <h1 className="product-title">
            Pikachu In Street Clothing Posing For a Nice Photo Electric Mouse
            Wearing a Hoodie and Being All Cute
          </h1> */}
          <p className="product-show-price">
            <span>$</span>
            {product.price}
            {/* 5000.0 */}
            <span>+</span>
          </p>
          <div className="product-show-button">
            <button className="buy-now-button">Buy it now</button>
            <button className="add-item-button">Add to Cart</button>
          </div>
          <div>
            <h1 className="product-show-description">Description</h1>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductShow);
