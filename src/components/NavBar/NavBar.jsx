import React, { useState } from 'react';
import './NavBar.scss';
import logo from '../../assets/logo.png';
import nglogo from '../../assets/nglogo.png';

const NavBar = () => {
  const [activeList, setActiveList] = useState(null);

  const handleToggle = (list) => {
    // Toggles the active state for dropdown menus
    setActiveList(activeList === list ? null : list);
  };

  return (
    <nav>
      <div className='navbar'>
        <div className="navbarleft">
          <img src={logo} alt="Logo" />
          <ul>
            <li onClick={() => handleToggle('products')}>
              Products <span>▼</span>
              {activeList === 'products' && (
                <div className="dropdown">
                  <p>Product 1</p>
                  <p>Product 2</p>
                  <p>Product 3</p>
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
                  <p>About Us</p>
                  <p>Careers</p>
                  <p>Contact</p>
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
