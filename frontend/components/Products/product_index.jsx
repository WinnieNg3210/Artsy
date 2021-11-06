import React from "react";
import ProductIndexItem from "./product_index_item";
import What from "./what";
import { Link } from "react-router-dom";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, currentUser } = this.props;
    // console.log(this.props.products);
    const productItems = products.map((product) => {
      return <ProductIndexItem key={product.id} product={product} />;
    });

    // let welcomeBanner;

    let welcomeBanner = currentUser ? (
      <h1 className="welcome-banner">Hi, {currentUser.first_name}!</h1>
    ) : (
      <h1 className="welcome-banner">Capture the moment on the wall!</h1>
    );

    return (
      <div className="product-index-container">
        <div className="banner">
          {welcomeBanner}
          <div className="banner-images">
            <ul>
              <li>
                <Link to="/products?search=street">
                  <img src={window.street} className="round-image" alt="" />
                </Link>

                <p>Street Photography</p>
              </li>
              <li>
                <Link to="/products?search=landscape">
                  <img src={window.landscape} className="round-image" alt="" />
                </Link>
                <p>Landscape</p>
              </li>
              <li>
                <Link to="/products?search=black%20and%20white">
                  <img src={window.bw} className="round-image" alt="" />
                </Link>
                <p>Black & White</p>
              </li>
              <li>
                <Link to="/products?search=modern">
                  <img src={window.modern} className="round-image" alt="" />
                </Link>
                <p>Modern</p>
              </li>
              <li>
                <Link to="/products?search=pokemon">
                  <img src={window.quebec} className="round-image" alt="" />
                </Link>
                <p>Free Style</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="top-picks">
          <div className="top-picks-title">
            <p>Our picks for you</p>
          </div>
          <div className="top-picks-products">
            <div className="individual-pick">{productItems[19]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[35]}</div>
            <div className="individual-pick">{productItems[37]}</div>
            <div className="individual-pick">{productItems[10]}</div>
            <div className="individual-pick">{productItems[6]}</div>
            <div className="individual-pick">{productItems[8]}</div>
            <div className="individual-pick">{productItems[13]}</div>
            <div className="individual-pick">{productItems[18]}</div>
            <div className="individual-pick">{productItems[14]}</div>
          </div>
        </div>
        <div className="nature-photography">
          <div className="nature-category">
            <div className="nature-text">
              <p className="nature-landscape">
                Nature <span>&</span> <span>Landscape</span>
              </p>
              <p className="zen">
                Pick your <span>zen moment</span>
              </p>
            </div>

            <div className="nature-products">
              <div>{productItems[4]}</div>
              <div>{productItems[7]}</div>
              <div>{productItems[9]}</div>
              <div>{productItems[11]}</div>
              <div>{productItems[17]}</div>
              <div>{productItems[15]}</div>
            </div>
          </div>
        </div>
        <div className="editors-pick-container">
          <p className="editor">Shop Editor's Pick</p>
          <div className="editor-pick">
            <div className="span-row-2">{productItems[22]}</div>
            <div>{productItems[12]}</div>
            <div>{productItems[2]}</div>
            <div>{productItems[0]}</div>
            <div>{productItems[34]}</div>
            <div>{productItems[36]}</div>
            <div>{productItems[23]}</div>
          </div>
        </div>
        <What />
      </div>
    );
  }
}

export default ProductIndex;
