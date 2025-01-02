import React from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'
import nglogo from '../../assets/nglogo.png'

const NavBar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className="navbarleft">
            <img src={logo} alt="" />
            <ul>
                <li>Products</li>
                <li>Services</li>
                <li>Company</li>
            </ul>
        </div>   
        <div className="navbarright">
          <img src={nglogo} alt="" />
        </div>
      </div>
    </nav>
    
  )
}

export default NavBar
