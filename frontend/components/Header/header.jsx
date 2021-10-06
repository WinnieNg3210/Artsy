import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchBar from "../Search/searchBar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false,
    };

    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this.props.getCartItems();
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
        <button onClick={() => showModal("Sign in")} className="sign-in-button">
          Sign in
        </button>
      </nav>
    );

    let dropDownMenu;

    if (dropdown && currentUser) {
      dropDownMenu = (
        <div className="drop-down-container">
          <div className="drop-down-name">
            <div className="drop-down-circle">
              <h3 className="drop-down-btn">{currentUser.first_name[0]}</h3>
            </div>
            <h3 className="drop-down-btn full-name">
              {currentUser.first_name}
            </h3>
          </div>
          <div className="sign-out-icon">
            <ExitToAppIcon className="exit-app-icon" />
            <button onClick={logout} className="sign-out-button">
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
              <h2 className="drop-down-click" onClick={this.handleDropDown}>
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
          <SearchBar fetchSearchProducts={this.props.fetchSearchProducts} />
          {display}
          <Link to="/cart">
            <div className="header-cart">
              <ShoppingCartIcon style={{ color: "black" }} />
              <span className="header-cart-count">{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
