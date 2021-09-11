import React from "react";
import ProductIndexItem from "./product_index_item";
import What from "./what";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, currentUser } = this.props;
    const productItems = products.map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });

    // let welcomeBanner;

    let welcomeBanner = currentUser ? (
      <h1 className="welcome-banner">
        Welcome back, {currentUser.first_name}!
      </h1>
    ) : (
      <h1 className="welcome-banner">High Quality Photography</h1>
    );

    return (
      <div className="product-index-container">
        <div className="banner">
          {/* <h1 className="welcome-banner">High Quality Photography</h1> */}
          {welcomeBanner}
        </div>
        <div className="banner-images">
          <ul>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
              <p>Street Photography</p>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
              <p>Landscape</p>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
              <p>Black & White</p>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
              <p>Modern</p>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" />
              </a>
              <p>Free Style</p>
            </li>
          </ul>
        </div>
        {/* <div className="top-picks">
          <h2>Our picks for you</h2>
          <ul></ul>
        </div> */}
        <div className="top-picks">
          <div className="top-picks-title">
            <p>Our picks for you</p>
          </div>
          <ul>{productItems}</ul>
        </div>
        <What />
      </div>
    );
  }
}

export default ProductIndex;
