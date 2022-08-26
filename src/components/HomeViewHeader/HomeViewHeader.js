import React from 'react';
import Logo from 'assets/images/logo_white.svg';
import { Link } from 'react-router-dom';

const HomeViewHeader = () => {
  return (
    <header className="homeViewHeader">
      <img src={Logo} alt="Breeze Boutique" />
      <Link to="/" className="btn btn-brown">Shop now</Link>
    </header>
  )
}

export default HomeViewHeader;