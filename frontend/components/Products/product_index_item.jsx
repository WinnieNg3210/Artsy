import React from "react";
import { withRouter, Link } from "react-router-dom";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    // let imageSrc;
    // if (product.imageUrl) {
    //   imageSrc = product.imageUrl;
    // } else {
    //   imageSrc = window.quebec;
    // }

    return (
      <div key={product.id} className="top-picks-image-container">
        <Link to={`products/${product.id}`}>
          {/* <img src={product.imageUrl} /> */}
          <img src={product.imageUrl} className="top-picks-image" />
        </Link>
        <div className="product-price-pill">
          <p className="product-price">$ {product.price}</p>
        </div>
      </div>
    );
  }
}

export default ProductIndexItem;
