//Updated features section
import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaLightbulb, FaMobile, FaLeaf, FaCog } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaHome size={40} />,
      title: "Complete Home Automation",
      description: "Transform your entire home with integrated smart solutions that work seamlessly together.",
      image: "/features-image1.png",
      benefits: ["Centralized Control", "Scene Management", "Voice Integration"]
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Advanced Security",
      description: "Protect your family with intelligent security systems and real-time monitoring.",
      image: "/features-image2.png",
      benefits: ["24/7 Monitoring", "Smart Alerts", "Remote Access"]
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Smart Lighting",
      description: "Intelligent lighting solutions that adapt to your lifestyle and save energy.",
      image: "/features-image3.png",
      benefits: ["Motion Sensors", "Dimming Control", "Color Changing"]
    },
    {
      icon: <FaMobile size={40} />,
      title: "Mobile Control",
      description: "Control your entire home from anywhere with our intuitive mobile application.",
      image: "/features-image4.png",
      benefits: ["Remote Access", "Real-time Status", "Push Notifications"]
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Energy Efficiency",
      description: "Reduce your carbon footprint and electricity bills with smart energy management.",
      image: "/features-image5.png",
      benefits: ["Usage Analytics", "Auto Optimization", "Cost Savings"]
    },
    {
      icon: <FaCog size={40} />,
      title: "Easy Installation",
      description: "Professional installation and setup with minimal disruption to your daily routine.",
      image: "/features-image6.png",
      benefits: ["Expert Technicians", "Quick Setup", "Full Support"]
    }
  ];

  const sectionStyle = {
    padding: '100px 0',
    background: 'rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '3rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '2rem',
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  };

  const titleCardStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'white',
    margin: 0,
  };

  const descriptionStyle = {
    opacity: '0.8',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  };

  const benefitsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const benefitTagStyle = {
    background: 'rgba(102, 126, 234, 0.2)',
    color: '#667eea',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: '500',
  };

  return (
    <section id="features" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Madhura Smart Homes?
        </motion.h2>
        
        <div style={gridStyle}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              style={cardStyle}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                background: 'rgba(255, 255, 255, 0.15)'
              }}
            >
              <img src={feature.image} alt={feature.title} style={imageStyle} />
              <div style={contentStyle}>
                <div style={iconContainerStyle}>
                  <div style={{ color: '#667eea' }}>
                    {feature.icon}
                  </div>
                  <h3 style={titleCardStyle}>{feature.title}</h3>
                </div>
                <p style={descriptionStyle}>{feature.description}</p>
                <div style={benefitsStyle}>
                  {feature.benefits.map((benefit, idx) => (
                    <span key={idx} style={benefitTagStyle}>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;