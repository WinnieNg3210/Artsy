import React from "react";
import { NavLink } from "react-router-dom";
// import Quebec from "../../../app/assets/images/Quebec.jpg";

class BannerBodyProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.fetchProducts();
  }

  mapBannerItems(arr = []) {
    // debugger;
    return arr.map((item) => {
      <div className="main-product">
        <Link to={`/products/${item.id}`}>
          <img className="main-product-img" src={window.quebec} />
        </Link>
        <div className="main-product-info">
          <p className="main-product-price">{item.price}</p>
        </div>
      </div>;
    });
  }

  render() {
    return (
      <div className="banner-container">
        <div className="banner-img">
          <div className="welcome-banner">Beautifully Crafted Arts</div>
        </div>
        <div className="banner-product header-banner-product">
          <div className="main-product-container">
            <div className="main-product-items">
              {this.mapBannerItems(this.props.products)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerBodyProduct;
