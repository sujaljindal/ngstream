import React from 'react'
import './Solutions.scss'
import img1 from '../../assets/solution1.png'
import img2 from '../../assets/solution2.png'
import img3 from '../../assets/solution3.png'
import img4 from '../../assets/solution4.png'

const Solutions = () => {
  return (
    <div className='Solution'>
        <div className="container">
            <div className="shape"></div>
        </div>
        <h2>Innovative solutions tailored for diverse business landscapes</h2>
        <h4>Power up ypur online business on the rock-solid foundation created by  NGStreams.</h4>
        <div className="solutionCard">
            <div className="solutioncardimg">
                <div className="img">
                    <img src={img1} alt="" />
                    <div className="imagedata">
                        <h1>Media & Broadcast</h1>
                        <p>Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement.</p>
                    </div>
                </div>
                <div className="img">
                    <img src={img2} alt="" />
                    <div className="imagedata">
                        <h1>News</h1>
                        <p>We help the News industry by ensuring swift, reliable content delivery, upholding superior quality standards, and offering real-time insights to optimize audience engagement and news dissemination.</p>
                    </div>
                </div>
                <div className="img">
                    <img src={img3} alt="" />
                    <div className="imagedata">
                        <h1>Education</h1>
                        <p>Our platform supports the Education industry by facilitating rapid, dependable content delivery, maintaining high-quality standards, and providing real-time insights to enhance student engagement and learning experiences.</p>
                    </div>
                </div>
                <div className="img">
                    <img src={img4} alt="" />
                    <div className="imagedata">
                        <h1>Sports</h1>
                        <p>Our QoE/QoS platform revolutionizes the Sports industry by guaranteeing swift content delivery, upholding superior quality standards, and providing real-time insights to optimize viewer engagement and elevate sporting event experiences.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Solutions
