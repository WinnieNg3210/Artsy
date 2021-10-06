import React from "react";
import { withRouter, Link } from "react-router-dom";

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="searched-product">
        <Link to={`products/${product.id}`}>
          <img src={product.imageUrl} className="searched-image" />
        </Link>
        <p className="search-title">{product.title}</p>
        <p>${product.price}</p>
        <p>Sold by: {product?.seller?.first_name}</p>
      </div>
    );
  }
}

export default withRouter(SearchIndexItem);
