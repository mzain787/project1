import React, { useState } from 'react';
import logo from "../../../images/rlogo.png";
import UserOptions from "./UserOptions";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.css';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuOptionClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='container-fluid m-0 p-4 pt-0 pb-0 position-fixed fixed-top'>
      <nav>
        <div className='nav-options'>
          <div className='hamburger mobile-navbar-btn' onClick={toggleMenu}>
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} name="menu-icon"></i>
          </div>
          <div className='header-logo'>
            <img src={logo} alt='image' />
          </div>
          <div className='user-options'>
            {isAuthenticated && <UserOptions user={user} />}
          </div>
        </div>
        <ul className={isMenuOpen ? 'm-header-list' : 'header-list'}>
          <li><NavLink exact to="/" activeClassName="active" onClick={handleMenuOptionClick}><span className='home-icon'><i class="fa-solid fa-house"></i></span>Home</NavLink></li>
          <li><NavLink exact to="/services" activeClassName="active" onClick={handleMenuOptionClick}>Services</NavLink></li>
          <li><NavLink exact to="/projects" activeClassName="active" onClick={handleMenuOptionClick}>Portfolio</NavLink></li>
          <li><NavLink exact to="/products" activeClassName="active" onClick={handleMenuOptionClick}>Shop</NavLink></li>
          <li><NavLink exact to="/custom-order" activeClassName="active" onClick={handleMenuOptionClick}>Custom Order</NavLink></li>
          <li><NavLink exact to="/contact" activeClassName="active" onClick={handleMenuOptionClick}>Contact</NavLink></li>
          <li><NavLink exact to="/about" activeClassName="active" onClick={handleMenuOptionClick}>About</NavLink></li>
          <li><NavLink exact to="/login" activeClassName="active" onClick={handleMenuOptionClick}>Login/Register</NavLink></li>
          <li className='cart-option'><NavLink exact to="/cart" activeClassName="active" onClick={handleMenuOptionClick}><i class="fa-solid fa-cart-shopping"></i></NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
