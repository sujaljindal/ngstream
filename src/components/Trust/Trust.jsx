import React from 'react'
import './Trust.scss'
import image1 from '../../assets/Client Card1.png'
import image2 from '../../assets/Client Card2.png'
import image3 from '../../assets/Client Card3.png'
import image4 from '../../assets/Client Card4.png'
import image5 from '../../assets/Client Card5.png'

const Trust = () => {
    const clients=[image1,image2,image3,image4,image5]
  return (
    <div className='trust'>
        <div className="trustContainer">
            <h1>Trusted by</h1>
            <marquee behavior direction="left" scrollamount="5" className="trustimagecontainer">
                {clients.map((image,index)=>(
                    <img key={index} src={image} alt={`Client ${index + 1}`} />
                ))}
            </marquee>
        </div>     
    </div>
  )
}

export default Trust
