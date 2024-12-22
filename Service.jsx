// import React from 'react'
import './Main.css'; // Ensure your styles are included

const Service = () => {
  // Simple array of services
  const services = [
    { id: 1, title: "Web Development", description: "Building responsive and functional websites." },
    { id: 2, title: "Smart License", description: "It is easy to avoid the accidents" },
    { id: 3, title: "UI/UX Design", description: "Designing user-friendly interfaces and experiences." },
    { id: 4, title: "EY NEXT GENZ", description: "Agricultural Services" },
  ];

  return (
    <div className="service-list">
      <h2 className="service-list-title">Our Services</h2>
      <ul className="service-list-items">
        {services.map((service) => (
          <li key={service.id} className="service-item">
            <h3 className="service-item-title">{service.title}</h3>
            <p className="service-item-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
