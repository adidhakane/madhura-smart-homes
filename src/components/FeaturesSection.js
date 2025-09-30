import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaShieldAlt, 
  FaLightbulb, 
  FaThermometerHalf, 
  FaMobile, 
  FaLeaf 
} from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaHome size={40} />,
      title: "Complete Home Automation",
      description: "Control every aspect of your home from a single interface"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Advanced Security",
      description: "Smart locks, cameras, and monitoring systems for peace of mind"
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Smart Lighting",
      description: "Automated lighting that adapts to your lifestyle and preferences"
    },
    {
      icon: <FaThermometerHalf size={40} />,
      title: "Climate Control",
      description: "Intelligent temperature management for optimal comfort"
    },
    {
      icon: <FaMobile size={40} />,
      title: "Mobile Control",
      description: "Manage your home remotely with our intuitive mobile app"
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Energy Efficient",
      description: "Reduce energy consumption with smart monitoring and automation"
    }
  ];

  const sectionStyle = {
    padding: '100px 0',
    position: 'relative',
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '3rem',
};


  const featureCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const iconStyle = {
    color: '#667eea',
    marginBottom: '1rem',
  };

  const featureTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'white',
  };

  const featureDescStyle = {
    opacity: '0.8',
    lineHeight: '1.6',
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
              style={featureCardStyle}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                background: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div style={iconStyle}>
                {feature.icon}
              </div>
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescStyle}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
