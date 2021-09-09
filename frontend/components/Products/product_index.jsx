import React from "react";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    const allProducts = products.map((product) => {
      return <ProductIndexItem />;
    });
    return (
      <div>
        <div className="banner-text">
          <h1>Beautifully Crafted Arts</h1>
        </div>
        <div className="banner-images">
          <ul>
            <li>
              <a href="">
                <img src={window.quebec} className="banner_product_image" />
                <div className="banner_product_price">$free</div>
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="banner_product_image" />
                <div className="banner_product_price">$free</div>
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="banner_product_image" />
                <div className="banner_product_price">$free</div>
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="banner_product_image" />
                <div className="banner_product_price">$free</div>
              </a>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="banner_product_image" />
                <div className="banner_product_price">$free</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="top-picks">
          <h2>Our picks for you</h2>
          <ul>{/* there will be a list of 5 items here */}</ul>
        </div>
        <div className="">
          <h2>Things we think you'll love</h2>
          <ul>{/* List of 10 items here */}</ul>
        </div>
      </div>
    );
  }
}

export default ProductIndex;
