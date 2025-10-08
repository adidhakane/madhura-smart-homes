import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUsers, FaAward, FaClock } from 'react-icons/fa';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    experience: 0
  });

  const finalValues = {
    projects: 500,
    clients: 1200,
    awards: 15,
    experience: 8
  };

  const stats = [
    {
      icon: <FaHome size={40} />,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: '#667eea'
    },
    {
      icon: <FaUsers size={40} />,
      value: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: '#764ba2'
    },
    {
      icon: <FaAward size={40} />,
      value: counters.awards,
      suffix: '+',
      label: 'Awards Won',
      color: '#f093fb'
    },
    {
      icon: <FaClock size={40} />,
      value: counters.experience,
      suffix: '+',
      label: 'Years Experience',
      color: '#4facfe'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key];
          clearInterval(intervals.find(interval => interval === this));
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const sectionStyle = {
    padding: '80px 0',
    background: 'rgba(0, 0, 0, 0.2)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  };

  const statCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  const iconContainerStyle = {
    marginBottom: '1rem',
  };

  const valueStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const labelStyle = {
    fontSize: '1rem',
    opacity: 0.8,
    fontWeight: '500',
  };

  return (
    <section style={sectionStyle}>
      <div className="container">
        <div style={gridStyle}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              style={statCardStyle}
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
              <div style={iconContainerStyle}>
                <div style={{ color: stat.color }}>
                  {stat.icon}
                </div>
              </div>
              <div style={valueStyle}>
                {stat.value}{stat.suffix}
              </div>
              <div style={labelStyle}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
