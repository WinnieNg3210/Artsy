import React from "react";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    const productItems = products.map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });
    return (
      <div>
        <div className="banner">
          <h1 className="welcome-banner">Beautifully Crafted Arts</h1>
        </div>
        <div className="banner-images">
          <ul>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="top-picks">
          <h2>Our picks for you</h2>
          <ul></ul>
        </div> */}
        <div className="top-picks">
          <h2>Our picks for you</h2>
          <ul>{productItems}</ul>
        </div>
      </div>
    );
  }
}

export default ProductIndex;
