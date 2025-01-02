import React, { useState } from "react";
import ad from "../../assets/ad insertion.png";
import "./Services.scss";

const Services = () => {
  const [activeImage, setActiveImage] = useState(null);

  const services = [
    {
      id: 1,
      img: ad,
      title: "IPTV/OTT Middleware",
      description: "Reliable streaming solutions for diverse platforms.",
    },
    {
      id: 2,
      img: ad,
      title: "Monetization Tools",
      description: "Innovative tools to maximize your revenue streams.",
    },
    {
      id: 3,
      img: ad,
      title: "Content Delivery",
      description: "Efficient and seamless content delivery for viewers.",
    },
    {
      id: 4,
      img: ad,
      title: "Dynamic Ads",
      description: "Targeted ad insertion for increased engagement.",
    },
    {
      id: 5,
      img: ad,
      title: "Advanced Analytics",
      description: "Data-driven insights for optimal decision-making.",
    },
  ];

  const toggleActiveImage = (id) => {
    setActiveImage((prev) => (prev === id ? null : id));
  };

  return (
    <div className="services-container">
      <h1>Services We Offer</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${activeImage === service.id ? "active" : ""}`}
            onClick={() => toggleActiveImage(service.id)}
          >
            <img src={service.img} alt={service.title} />
            <div className={`service-content ${activeImage === service.id ? "visible" : ""}`}>
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
