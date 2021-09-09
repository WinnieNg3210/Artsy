import React from "react";

const What = () => {
  return (
    <div className="what-container">
      <h1>What is Artsy?</h1>
      <div className="what-reasons">
        <div className="what">
          <h2 className="what-header">A community doing good</h2>
          <p className="what-text">
            Artsy is a global online marketplace where people come together to
            create, sell, and buy art
          </p>
        </div>
        <div className="what">
          <h2 className="what-header">Support independent creators</h2>
          <p className="what-text">
            There are no warehouses - just millions of people selling the things
            they love. The entire process is easy, helping you connect directly
            with the creators to find something amazing
          </p>
        </div>
        <div className="what">
          <h2 className="what-header">Peace of mind</h2>
          <p className="what-text">
            Your privacy is very important to us. And if you ever need help,
            we're just an email away
          </p>
        </div>
      </div>
    </div>
  );
};

export default What;
