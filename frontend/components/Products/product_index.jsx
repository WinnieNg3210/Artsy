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
      <h1 className="welcome-banner">Hi, {currentUser.first_name}!</h1>
    ) : (
      <h1 className="welcome-banner">High Quality Photography</h1>
    );

    return (
      <div className="product-index-container">
        <div className="banner">{welcomeBanner}</div>
        <div className="banner-images">
          <ul>
            <li>
              <a href="">
                <img src={window.street} className="round-image" alt="" />
              </a>
              <p>Street Photography</p>
            </li>
            <li>
              <a href="">
                <img src={window.landscape} className="round-image" alt="" />
              </a>
              <p>Landscape</p>
            </li>
            <li>
              <a href="">
                <img src={window.bw} className="round-image" alt="" />
              </a>
              <p>Black & White</p>
            </li>
            <li>
              <a href="">
                <img src={window.modern} className="round-image" alt="" />
              </a>
              <p>Modern</p>
            </li>
            <li>
              <a href="">
                <img src={window.quebec} className="round-image" alt="" />
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
          <div className="top-picks-product">
            <div className="individual-pick">{productItems[22]}</div>
            <div className="individual-pick">{productItems[1]}</div>
            <div className="individual-pick">{productItems[18]}</div>
            <div className="individual-pick">{productItems[3]}</div>
            <div className="individual-pick">{productItems[12]}</div>
            <div className="individual-pick">{productItems[5]}</div>
            <div className="individual-pick">{productItems[6]}</div>
            <div className="individual-pick">{productItems[13]}</div>
            <div className="individual-pick">{productItems[8]}</div>
            <div className="individual-pick">{productItems[10]}</div>
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
            <div className="span-row-2">{productItems[19]}</div>
            <div>{productItems[12]}</div>
            <div>{productItems[2]}</div>
            <div>{productItems[0]}</div>
            <div>{productItems[20]}</div>
            <div>{productItems[21]}</div>
            <div>{productItems[23]}</div>
          </div>
        </div>
        <What />
      </div>
    );
  }
}

export default ProductIndex;
