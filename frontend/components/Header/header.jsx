import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
    const { currentUser, logout, showModal } = this.props;
    const { dropdown } = this.state;

    const signinLink = () => (
      <nav>
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
            <h3 className="dropDownBtn">{currentUser.first_name}</h3>
          </div>
          <div className="signoutIcon">
            <button onClick={logout} className="signOutButton">
              Sign Out
            </button>

            <ExitToAppIcon className="exit-app-icon" />
          </div>
        </div>
      );
    }

    const welcome = () => (
      <div>
        <h2 className="dropDownClick" onClick={this.handleDropDown}>
          {currentUser.first_name[0]}
        </h2>
        {dropDownMenu}
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
          <div className="header-cart">
            <ShoppingCartIcon />
            <span className="header-cart-count">0</span>
          </div>
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
