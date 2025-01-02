import React from 'react'
import './Solutions.scss'
import img1 from '../../assets/solution1.png'
import img2 from '../../assets/solution2.png'
import img3 from '../../assets/solution3.png'
import img4 from '../../assets/solution4.png'

const Solutions = () => {
  return (
    <div className='Solution'>
        <h2>Innovative solutions tailored for diverse business landscapes</h2>
        <h4>Power up ypur online business on the rock-solid foundation created by  NGStreams.</h4>
        <div className="solutionCard">
            <div className="solutioncardimg">
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="img">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Solutions
