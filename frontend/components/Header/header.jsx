import React from "react";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Header = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <div className="showName">{currentUser.first_name[0].toUpperCase()}</div>
            <div className="signOutContainer">
                <div className="">
                    <button onClick={logout} className="signOutButton">Sign out</button>
                    <ExitToAppIcon />
                </div>
            </div>

            {/* <div className="showName">
                {currentUser.first_name[0]}
                <div className="signOutDropDown">
                    <div className="showFullName">{currentUser.first_name}</div>
                    <div className="signOutContainer">
                        <button onClick={logout} className="signOutButton">Sign out</button>
                        <ExitToAppIcon />
                    </div>
                </div>                
            </div> */}
        </div>
        
    ) : (
        <div>
            {/* <Link to="/signup">Sign Up</Link> */}
            {/* <br/> */}
            {/* <button className="headerSignIn">Sign in</button> */}
            <Link to="/login" className="headerSignIn">Sign in</Link>
        </div>
    );

    return (
        <div className = "header">
            <div className="headerTop">
                <h1 className="headerLogo">Artsy</h1>
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