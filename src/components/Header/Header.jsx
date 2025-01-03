import React from 'react';
import tick from '../../assets/Frame.png';
import './Header.scss';
import ng from '../../assets/nexgen.mp4';

const Header = () => {
  const cardData = [
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
  ];

  return (
    <div className="home">
      <div className="header">
        <div className="left">
          <h1>
            Unleash <span>AI</span>'s prowess to <span>Thrive</span> beyond limits!
          </h1>
          <p>
            NGStreams is a world-class end-to-end product suite that enables you to
            step into the future where user satisfaction takes center stage on Web,
            Android, iOS, and Smart TVs.
          </p>
          <ul>
            <li>
              <div className="circle">✓</div>
              <h3>Real-Time Monitoring</h3>
            </li>
            <li>
              <div className="circle">✓</div>
              <h3>Proactive Anomaly Detection</h3>
            </li>
            <li>
              <div className="circle">✓</div>
              <h3>Playback Optimization</h3>
            </li>
            <li>
              <div className="circle">✓</div>
              <h3>Data-Driven Decision-Making</h3>
            </li>
          </ul>
        </div>
        <div className="right">
          <video preload="auto" autoPlay loop src={ng}></video>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          {cardData.map((text, index) => (
            <div className="carditem" key={index} dangerouslySetInnerHTML={{ __html: text }}></div>
          ))}
        </div>
      </div>
      <div className="container">
            <div className="shape"></div>
      </div>
    </div>
  );
};

export default Header;
