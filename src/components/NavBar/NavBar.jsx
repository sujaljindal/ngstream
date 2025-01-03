import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.scss';
import logo from '../../assets/logo.png';
import nglogo from '../../assets/nglogo.png';
import hamburger from '../../assets/hamburger.png';

const NavBar = () => {
  const [activeList, setActiveList] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleToggle = (list) => {
    setActiveList(activeList === list ? null : list);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav>
      <div className='navbar'>
        <div className="navbarleft">
          <img src={logo} alt="Logo" />
          {/* <img src={hamburger} alt="" /> */}
          
          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? "open" : ""}>☰</span>
          </div>

          <ul className={menuOpen ? "open" : ""}>
            <li onClick={() => handleToggle('products')}>
              Products <span>▼</span>
              {activeList === 'products' && (
                <div className="dropdown">
                  <Link to="/product1"><p>Product 1</p></Link>
                  <Link to="/product2"><p>Product 2</p></Link>
                  <Link to="/product3"><p>Product 3</p></Link>
                </div>
              )}
            </li>
            <li onClick={() => handleToggle('services')}>
              Services
            </li>
            <li onClick={() => handleToggle('company')}>
              Company <span>▼</span>
              {activeList === 'company' && (
                <div className="dropdown">
                  <Link to="/about-us"><p>About Us</p></Link>
                  <Link to="/careers"><p>Careers</p></Link>
                  <Link to="/contact"><p>Contact</p></Link>
                </div>
              )}
            </li>
          </ul>
        </div>
        
        <div className="navbarright">
          <img src={nglogo} alt="NG Logo" />
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
