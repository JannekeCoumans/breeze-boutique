import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Logo from "assets/images/logo-wide_white.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <div className="nav__items">
          <Link to="/">Shop</Link>
          <Link to="/">New In</Link>
          <Link to="/">Sale</Link>
          <Link to="/">Collections</Link>
        </div>
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Breeze Boutique" />
        </Link>
        <div className="nav__icons">
          <Link to="/">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
