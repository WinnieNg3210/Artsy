import React from "react";
// import { MainBodyProduct, TopPickProduct, BannerBodyProduct } from "./body";
import MainBodyProduct from "./main_body_products";
import TopPickProduct from "./top_picks_product";
import BannerBodyProduct from "./banner_body_products";
import What from "./what";

const BodyContainer = () => {
  return (
    <div className="body-container">
      <BannerBodyProduct />
      <div className="body-product-image">
        <TopPickProduct />
        <br />
        <MainBodyProduct />
      </div>
      <What />
    </div>
  );
};

export default BodyContainer;
