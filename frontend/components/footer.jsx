import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-col">
        <h1>Shop</h1>
        <a href="#">Gift cards</a>
        <a href="#">Artsy blog</a>
      </div>
      <div className="footer-col">
        <h1>Sell</h1>
        <a href="#">Sell on Artsy</a>
        <a href="#">Teams</a>
        <a href="#">Forums</a>
        <a href="#">Affiliates</a>
      </div>
      <div className="footer-col">
        <h1>About</h1>
        <a href="#">Artsy, Inc.</a>
        <a href="#">Policies</a>
        <a href="#">Investors</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Impact</a>
      </div>
      <div className="footer-col">
        <div className="help-container">
          <h1>Help</h1>
          <a href="#">Help Center</a>
          <a href="#">Trust and safety</a>
          <a href="#">Privacy settings</a>
        </div>
        <div className="social">
          <div className="download-container">
            {/* <div className="downloads"> */}
            <div className="download-logo">
              <p>A</p>
            </div>
            <div className="download-app">Download the Artsy App</div>
            {/* </div> */}
          </div>
          <div className="socialLinks">
            <a href="https://github.com/winnieNg3210">
              <img
                src="https://img.icons8.com/nolan/64/github.png"
                alt="Github"
              />
            </a>
            <a href="https://www.linkedin.com/in/cwingng/">
              <img
                src="https://img.icons8.com/nolan/64/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
