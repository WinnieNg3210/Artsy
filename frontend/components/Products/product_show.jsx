import React from "react";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-page-container">
        <div className="product-image">
          <img src={window.quebec} />
          <div className="reviews-container">
            <p>WILL ADD SOME REVIEWS SOON!</p>
          </div>
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductShow;
