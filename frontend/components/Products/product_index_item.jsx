import React from "react";
import { withRouter, Link } from "react-router-dom";

class ProductIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <li key={product.id}>
        <Link to={`products/${product.id}`}>
          {/* <img src={product.imageUrl} /> */}
          <img src={window.quebec} className="top-picks-image" />
        </Link>
        <div className="product-price-pill">
          <p className="product-price">${product.price}</p>
        </div>
      </li>
    );
  }
}

export default ProductIndexItem;
