import React from "react";
import { MainBodyProduct, TopPickProduct } from "./body";
import What from "./what";

const BodyContainer = () => {
  return (
    <div className="body-container">
      <div className="banner-container">
        <div className="banner-img">
          <div className="welcome-banner">Welcome back!</div>
        </div>
        <div className="banner-product header-banner-product">
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
        </div>
      </div>

      <div className="body-product-image">
        <div className="top-picks">
          <h2 className="top-picks-header">Our picks for you</h2>
          <div className="picks-row top-picks-row">
            <TopPickProduct />
            <TopPickProduct />
            <TopPickProduct />
            <TopPickProduct />
            <TopPickProduct />
          </div>
        </div>
        <br />
        <div className="main-product-row">
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
          <MainBodyProduct />
        </div>
      </div>
      <What />
    </div>
  );
};

export default BodyContainer;
