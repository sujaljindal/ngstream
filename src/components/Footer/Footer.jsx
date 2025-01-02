import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.png'
import twitter from '../../assets/1.png'
import insta from '../../assets/2.png'
import youtube from '../../assets/3.png'
import linkedin from '../../assets/4.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footercontent">
        <div className="footercontentleft">
            <img className='logo' src={logo} alt="" />
            <p>We help startups and enterprises to drive digital engineering initiatives by helping them provide a rich, seamless experience to their customers across digital channels resulting in higher engagement, efficiency, and profitability.</p>
            <div className="leftimage">
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
                <img src={youtube} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <p>Copyright 2023 © NGStreams. All right reserved.</p>
        </div>
        <div className="leftcontentright">
            <div className="footercontentmiddle">
                <ul>
                    <h1>Products</h1>
                    <li>QoE/QoS</li>
                    <li>Trnascoding</li>
                    <li>Content Enrichment</li>
                    <li>Social Analytics</li>
                    <li>Set Top Box</li>
                    <li>Traffic Management</li>
                </ul>
            </div>
            <div className="footercontentmiddle">
                <h1>Services</h1>
                <ul>
                    <li>IPTV/OTT Platform</li>
                </ul>
            </div>
            <div className="footercontentmiddle">
                <h1>Company</h1>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Cookies</li>
                </ul>
            </div>
            <div className="footercontentmiddle">
                <h1>Other Links</h1>
                <ul>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Cookies</li>
                    <li>Help Center</li>
                </ul>
            </div>
            <div className="footercontentmiddle">
                <h1>Other Links</h1>
                <ul>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Cookies</li>
                    <li>Help Center</li>
                </ul>
            </div>
            <div className="footercontentright">
            <h1>Quick Connect</h1>
            <div className="call">
                <h1>Call us</h1>
                <p>+91 0000000000</p>
            </div>
            <div className="mail">
                <h1>Email Us</h1>
                <p>sales@ngstreams.com</p>
                <p>support@ngstreams.com</p>
            </div>

        </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default Footer
