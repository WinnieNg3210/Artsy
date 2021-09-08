import React from "react";
import Quebec from "../../../app/assets/images/Quebec.jpg";

export const MainBodyProduct = () => {
  return (
    <div className="main-product">
      <img className="main-product-img" src={Quebec} />
      <div className="main-product-info">
        <p className="main-product-price">free</p>
      </div>
    </div>
  );
};

export const TopPickProduct = () => {
  return (
    <div className="top-product">
      <img className="top-picks-img" src={Quebec} />
      <div className="top-product-info">
        <p className="top-pick-title">Top Pick Title</p>
      </div>
    </div>
  );
};

// export default MainBodyProduct;
