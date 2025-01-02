import React from 'react';
import why from '../../assets/Frame 41.png';
import './Why.scss'

const Why = () => {
  const data = [
    {
      id: 1,
      title: "OTT Solution Provider in India",
      description: "We aid businesses in digital engineering initiatives with dependable guidance.",
    },
    {
      id: 2,
      title: "Intuitive User Experience",
      description: "NGStreams ensures effortless access with user-friendly design and seamless navigation.",
    },
    {
      id: 3,
      title: "Personalized Content Curation",
      description: "We excel by tailoring content, enhancing satisfaction through personalized recommendations.",
    },
    {
      id: 4,
      title: "Exceptional Quality of Service",
      description: "Consistently high QoS assures smooth streaming, elevating user satisfaction.",
    },
    {
      id: 5,
      title: "Customer-First Approach",
      description: "Centered on customer feedback for continual improvement and satisfaction.",
    },
    {
      id: 6,
      title: "Responsive Customer Support",
      description: "Valuing feedback, prompt support, engaging to enhance overall user experience.",
    },
  ];

  return (
    <div className='why'>
      <div className="whycontainer">
        <div className="left">
          <img src={why} alt="Why NGStreams" />
        </div>
        <div className="right">
          <h2>Why Media Houses Love NGStreams</h2>
          <h4>Companies matter more than technical specs do</h4>
          <h5>We put companies first.</h5>
          <div className="rightcont">
            {data.map((item) => (
              <div key={item.id} className="rightdata">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
