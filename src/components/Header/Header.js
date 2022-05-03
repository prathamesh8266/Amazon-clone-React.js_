import React, { useEffect } from "react";
import logo from "../../img/amazon-2.svg";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Stateprovider";
import capitalize from "@mui/utils/capitalize";

function Header() {
  const [{ basket, userId }, dispatch] = useStateValue();
  let name = userId;
  const setName = () => {
    let end = 0;
    for (let i = 0; i < name.length; i++) {
      if (name[i] == "@") {
        end = i;
      }
    }
    name = name.substring(0, end);
    capitalize(name);
    console.log(name);
  };
  setName();
  return (
    <div className="header">
      <Link to="/ ">
        <img className="header_logo" src={logo} />
      </Link>
      <div className="header_search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">{name}</span>
            <span className="header__optionLineTwo login__link">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasket className="cart" />
          </Link>
          <span className="header__optionLineTwo header__basketCounnt">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
