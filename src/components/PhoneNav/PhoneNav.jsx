import React from 'react'
import "./PhoneNav.scss"
import home from "../../assets/icon1.png"
import product from "../../assets/icon2.png"
import company from  "../../assets/icon3.png"
import services from "../../assets/icon4.png"
import freedemo from "../../assets/icon5.png"
export const PhoneNav = () => {
  return (
    <div className='phone'>
        <div className="navContainer">
            <div className="section">
                <img src={home} alt="" />
                <a href="">Home</a>
            </div>
            <div className="section">
                <img src={product} alt="" />
                <a href="">Products</a>
            </div>
            <div className="section">
                <img src={company} alt="" />
                <a href="">Company</a>
            </div>
            <div className="section">
                <img src={services} alt="" />
                <a href="">Services</a>
            </div>
            <div className="section">
                <img src={freedemo} alt="" />
                <a href="">Free Demo</a>
            </div>
        </div>
    </div>
  )
}
export default PhoneNav;