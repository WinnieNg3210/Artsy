import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-col">
        <h1>Projects</h1>
        <div className="footer-list-container">
          <a href="https://winnieng3210.github.io/Moon_Power/" target="_blank">
            Moon Power
          </a>
          <a href="https://homesweetwoof.herokuapp.com/#/" target="_blank">
            Home Sweet Woof
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h1>Language</h1>
        <div className="footer-list-container">
          <p>Ruby</p>
          <p>JavaScript</p>
        </div>
      </div>
      <div className="footer-col">
        <h1>Technology</h1>
        <div className="footer-list-container">
          <p>React & Redux</p>
          <p>HTML/CSS</p>
          <p>Ruby on Rails</p>
          <p>AWS</p>
          <p>SQL</p>
          <p>MERN</p>
          <p>Socket.io</p>
        </div>
      </div>
      <div className="footer-col">
        <div className="help-container">
          <h1>Social</h1>
          <div className="footer-list-container">
            <a href="https://github.com/winnieNg3210" target="_blank">
              Github
            </a>
            <a href="https://www.linkedin.com/in/cwingng/" target="_blank">
              LinkedIn
            </a>
            <a href="https://angel.co/winnie-ng-2" target="_blank">
              AngelList
            </a>
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
          <div className="social-links">
            <a href="https://github.com/winnieNg3210" target="_blank">
              <img
                src="https://img.icons8.com/nolan/64/github.png"
                alt="Github"
              />
            </a>
            <a href="https://www.linkedin.com/in/cwingng/" target="_blank">
              <img
                src="https://img.icons8.com/nolan/64/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://angel.co/winnie-ng-2" target="_blank">
              <img
                src="https://img.icons8.com/nolan/64/angelist.png"
                alt="AngelList"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
