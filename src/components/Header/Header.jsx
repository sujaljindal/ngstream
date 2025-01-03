import React, { useEffect ,useState} from 'react';
import tick from '../../assets/Frame.png';
import './Header.scss';
import ng from '../../assets/nexgen.mp4';

const Header = () => {
  const cardData = [
    "Increased viewing sessions up to <span>72%</span> and managing over <span>75 million+</span> streaming sessions annually",
    "Transcoded more than <span>5 million+</span> hours of media content in multiple formats in <span>HDR10</span>",
    "Enriched <span>20 million+</span> metadata entires resulting in fantastic user engagement up to <span>93%</span>",
    "Enables seamless streaming for <span>10 million+</span> households with <span> 45%</span> increase in user satisfaction",
    "Analyzed over <span>17 million+</span> social interactions, contributing to a <span>96%</span> efficeincy in platform strategies",
    "Handled over <span>5 billion+</span> concurrent sessions, ensuring <span>88%</span> less zaptime during peak loads",
    "Delivering <span>10 million+</span> global users, providing a <span>58%</span> increase in content consumpiton" 

  ];
  const [currentHead, setCurrentHead] = useState(0);

  const head=["Thrive","Boost","Stream"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHead((prevIndex) => (prevIndex + 1) % head.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="header">
        <div className="left">
          <h1>
            Unleash <span>AI</span>'s prowess to <span>{head[currentHead]}</span> beyond limits!
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
