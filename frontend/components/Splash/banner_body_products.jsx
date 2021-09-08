import React from "react";
// import Quebec from "../../../app/assets/images/Quebec.jpg";

const BannerBodyProduct = ({ currentUser }) => {
  let welcome;

  if (currentUser) {
    welcome = (
      <div className="welcome-banner">
        Welcome back, {currentUser.first_name}!
      </div>
    );
  } else {
    welcome = <div className="welcome-banner">Beautifully Crafted Arts</div>;
  }

  return (
    <div className="banner-container">
      <div className="banner-img">{welcome}</div>
      <div className="banner-product header-banner-product">
        <div className="main-product-container">
          <div className="main-product-items">
            <div className="main-product">
              {/* <div className="main-product-img"></div> */}
              <img className="main-product-img" src={window.Quebec} />
              <div className="main-product-info">
                <p className="main-product-price">free</p>
              </div>
            </div>
            <div className="main-product">
              {/* <div className="main-product-img"></div> */}
              <img className="main-product-img" src={window.Quebec} />
              <div className="main-product-info">
                <p className="main-product-price">free</p>
              </div>
            </div>
            <div className="main-product">
              {/* <div className="main-product-img"></div> */}
              <img className="main-product-img" src={window.Quebec} />
              <div className="main-product-info">
                <p className="main-product-price">free</p>
              </div>
            </div>
            <div className="main-product">
              {/* <div className="main-product-img"></div> */}
              <img className="main-product-img" src={window.Quebec} />
              <div className="main-product-info">
                <p className="main-product-price">free</p>
              </div>
            </div>
            <div className="main-product">
              {/* <div className="main-product-img"></div> */}
              <img className="main-product-img" src={window.Quebec} />
              <div className="main-product-info">
                <p className="main-product-price">free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBodyProduct;
