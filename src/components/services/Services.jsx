import React from "react";
import "./Services.scss";
import a1 from "../../assets/Front.png";
import a2 from "../../assets/2.svg";
import a3 from "../../assets/front3.png";
import a4 from "../../assets/front4.svg";
import a5 from "../../assets/front5.png";
import a6 from "../../assets/front6.png";

const Services = () => {
  const services = [
    {
      id: 1,
      img: a1,
      title: "IPTV/OTT Middleware",
      description: "Reliable streaming solutions for diverse platforms.",
    },
    {
      id: 2,
      img: a2,
      title: "Monetization Tools",
      description: "Innovative tools to maximize your revenue streams.",
    },
    {
      id: 3,
      img: a3,
      title: "Content Delivery",
      description: "Efficient and seamless content delivery for viewers.",
    },
    {
      id: 4,
      img: a4,
      title: "Dynamic Ads",
      description: "Targeted ad insertion for increased engagement.",
    },
    {
      id: 5,
      img: a5,
      title: "Advanced Analytics",
      description: "Data-driven insights for optimal decision-making.",
    },
    {
      id: 6,
      img: a6,
      title: "Cloud Storage",
      description: "Secure and scalable storage for your content.",
    },
  ];

  return (
    <div className="services-container">
      <h1>Robust Hosting, Monetization, and Broadcasting Capabilities</h1>
      <h4>Solid infrastructure for content delivery, revenue generation, and seamless broadcasting.</h4>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.img} alt={`Service - ${service.title}`} />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
