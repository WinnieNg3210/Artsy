import React from "react";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = ({currentUser, logout, showModal}) => {
  const sessionLinks = () => (
    <nav>
      <button onClick={() => showModal('Sign in')} className="signOutButton">Sign in</button>
      {/* &nbsp;or&nbsp;
      <button onClick={() => showModal('Sign up')}>Sign up</button> */}
    </nav>
  );
  const welcome = () => (
    <div>
      <h2>{currentUser.first_name[0]}</h2>
      <div className="signOutContainer">
        <button onClick={logout}>Sign Out</button>
        <ExitToAppIcon/>
      </div>
    </div>
  );

  const display = currentUser ? welcome(currentUser, logout) : sessionLinks()

  return (
      <div className="header">
        <div className="headerTop">
          <Link to="/"><h1 className = "headerLogo">Artsy</h1></Link>
          <div className="headerSearchBar">
              <input className = "headerSearchInput" type="text"/>
              <SearchIcon className="headerSearchIcon"/>
          </div>
          {display}
          <div className="headerCart">
                <ShoppingCartIcon/>
                <span className = "headerCartCount">0</span>
          </div>          
        </div>
        <div className="headerBottom">
            <ul className = "categoryItems">
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 4</li>
                <li>Category 5</li>
                <li>Category 6</li>
                <li>Category 7</li>
                <li>Category 8</li>
            </ul>
        </div>                
      </div>
  )
}

export default Header;