import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-items">
      <div className="logo">
        <img src="https://raw.githubusercontent.com/Seliun/Shoo-Store-E-commerce-Website/94ab994c4ba7ea64a5a180788304cd5dfe06c0d8/img/air.png" 
        className="website-logo" alt="website logo"/>
        <h3 className="website-title">Shoo <span className="title-sub-name">Mart</span></h3>
      </div>
      <div className="search-bar">
        <input type="text" 
        placeholder="Search products..."
         className="search-input" />
       <div className="icon-search-icon">
       <FaSearch className="search-icon" />
       </div>
      </div>
      <div className="icons">
        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
      </div>
      </div>
    </header>
  );
};

export default Header;
