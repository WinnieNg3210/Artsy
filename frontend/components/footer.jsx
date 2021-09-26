import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-col">
        <h1>Projects</h1>
        <div className="footer-list-container">
          <a href="https://winnieng3210.github.io/Moon_Power/">Moon Power</a>
          <a href="#">Another Project Coming Soon</a>
        </div>
      </div>
      <div className="footer-col">
        <h1>Sell</h1>
        <div className="footer-list-container">
          <a href="#">Sell on Artsy</a>
          <a href="#">Teams</a>
          <a href="#">Forums</a>
          <a href="#">Affiliates</a>
        </div>
      </div>
      <div className="footer-col">
        <h1>Technology</h1>
        <div className="footer-list-container">
          <a href="#">Ruby on Rails</a>
          <a href="#">React & Redux</a>
          <a href="#">SQL</a>
          <a href="#">JavaScript</a>
          <a href="#">AWS</a>
          <a href="#">Heroku</a>
          <a href="#">HTML/CSS</a>
        </div>
      </div>
      <div className="footer-col">
        <div className="help-container">
          <h1>Help</h1>
          <div className="footer-list-container">
            <a href="#">Help Center</a>
            <a href="#">Trust and safety</a>
            <a href="#">Privacy settings</a>
          </div>
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
