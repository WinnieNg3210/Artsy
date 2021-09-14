import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    };

    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(e) {
    e.preventDefault();
    this.setState({ dropdown: !this.state.dropdown });
  }

  render() {
    const { currentUser, logout, showModal, cartItems } = this.props;
    const { dropdown } = this.state;

    const signinLink = () => (
      <nav className="sign-in-container">
        <button onClick={() => showModal("Sign in")} className="signInButton">
          Sign in
        </button>
      </nav>
    );

    let dropDownMenu;

    if (dropdown && currentUser) {
      dropDownMenu = (
        <div className="dropDownContainer">
          <div className="dropDownName">
            <div className="drop-down-circle">
              <h3 className="dropDownBtn">{currentUser.first_name[0]}</h3>
            </div>
            <h3 className="dropDownBtn full-name">{currentUser.first_name}</h3>
          </div>
          <div className="signoutIcon">
            <ExitToAppIcon className="exit-app-icon" />
            <button onClick={logout} className="signOutButton">
              Sign Out
            </button>
          </div>
        </div>
      );
    }

    let dropDownIcon;
    if (currentUser) {
      dropDownIcon = (
        <ArrowDropDownIcon
          className="drop-down-arrow"
          onClick={this.handleDropDown}
        />
      );
    }

    const welcome = () => (
      <div>
        <div className="hover-drop-down">
          <div className="name-drop-arrow">
            <div className="orange-circle">
              <h2 className="dropDownClick" onClick={this.handleDropDown}>
                {currentUser.first_name[0]}
              </h2>
            </div>
            {dropDownIcon}
          </div>
          {dropDownMenu}
        </div>
      </div>
    );

    const display = currentUser ? welcome(currentUser, logout) : signinLink();

    return (
      <div className="header">
        <div className="header-top">
          <Link to="/">
            <h1 className="header-logo">Artsy</h1>
          </Link>
          <div className="header-search-bar">
            <input
              className="header-search-input"
              type="text"
              placeholder="Search for anything"
            />
            <SearchIcon className="header-search-icon" />
          </div>
          {display}
          <Link to="/checkout">
            <div className="header-cart">
              <ShoppingCartIcon />
              <span className="header-cart-count">{cartItems.length}</span>
            </div>
          </Link>
        </div>
        <div className="header-bottom">
          <ul className="category-items">
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 2</a>
            </li>
            <li>
              <a href="#">Category 3</a>
            </li>
            <li>
              <a href="#">Category 4</a>
            </li>
            <li>
              <a href="#">Category 5</a>
            </li>
            <li>
              <a href="#">Category 6</a>
            </li>
            <li>
              <a href="#">Category 7</a>
            </li>
            <li>
              <a href="#">Category 8</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
