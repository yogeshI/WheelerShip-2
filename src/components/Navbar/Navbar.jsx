import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container ">
        <Link  to={'/'} className="navbar-brand" >
          PRODUCTS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active mx-2" aria-current="page" >
                HOME
              </Link>
            </li>

            <Link to={'/product'} className="nav-item">
              <a className="nav-link mx-2" >
                PRODUCTS
              </a>
            </Link>


            <li className="nav-item">
              <Link to={'/about'} className="nav-link mx-2" >
                ABOUT
              </Link>
            </li>


            <li className="nav-item">
              <Link to={'/contact-us'} className="nav-link mx-2" >
                CONTACT
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
