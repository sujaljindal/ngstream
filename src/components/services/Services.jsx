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
      description: "Integrates and manages content delivery for online video streaming services.",
    },
    {
      id: 2,
      img: a2,
      title: "Ingest & Transcode",
      description: "Capture and convert media files for diverse digital platforms seamlessly.",
    },
    {
      id: 3,
      img: a3,
      title: "Multi-Screen Apps",
      description: "Applications adapted for seamless use across various screen sizes/devices.",
    },
    {
      id: 4,
      img: a4,
      title: "Content Delivery Network",
      description: "Network optimizing content distribution for faster, reliable access globally.",
    },
    {
      id: 5,
      img: a5,
      title: "Security/DRM",
      description: "Protection and control mechanisms ensuring secure content distribution and usage.",
    },
    {
      id: 6,
      img: a6,
      title: "Real-Time Analytics",
      description: "Instant analysis of data for immediate insights and informed decisions.",
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
