import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaClock, FaSync, FaUserCog, FaHome } from 'react-icons/fa';

const LifestyleSection = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const benefits = [
    {
      icon: <FaMobileAlt size={isMobile ? 24 : 28} />,
      title: "Control from Anywhere",
      description: "Easy control and management of home devices from anywhere, anytime, using a smartphone or voice commands."
    },
    {
      icon: <FaClock size={isMobile ? 24 : 28} />,
      title: "Smart Scheduling",
      description: "Set routines and schedules for devices to perform specific tasks or actions at predetermined times or in response to triggers."
    },
    {
      icon: <FaSync size={isMobile ? 24 : 28} />,
      title: "Seamless Integration",
      description: "Devices interact and synchronise with each other, enabling coordinated actions for a more integrated and efficient home environment."
    },
    // {
    //   icon: <FaUserCog size={isMobile ? 24 : 28} />,
    //   title: "Personalised Experience",
    //   description: "Tailor automation settings based on individual preferences and lifestyle for a personalised smart home experience."
    // },
    // {
    //   icon: <FaHome size={isMobile ? 24 : 28} />,
    //   title: "Effortless Automation",
    //   description: "Effortless control of your home environment through smart automation and AI integration for maximum comfort and convenience."
    // }
  ];

  const sectionStyle = {
    padding: isMobile ? '40px 0' : '80px 0',
    background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '2rem' : '3rem',
  };

  const titleStyle = {
    fontSize: isMobile ? '1.75rem' : '2.75rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#e5e5e5',
    letterSpacing: '-0.5px',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1.1rem' : '1.4rem',
    fontWeight: '600',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #d4d4d4, #a3a3a3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const descriptionStyle = {
    fontSize: isMobile ? '0.9rem' : '1.05rem',
    color: '#b0b0b0',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7',
  };

  const contentWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '45% 55%',
    gap: isMobile ? '2rem' : '3rem',
    alignItems: 'start',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
    border: '1px solid #2d2d2d',
  };

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
    pointerEvents: 'none',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
  };

  const benefitsGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: isMobile ? '1rem' : '1.5rem',
  };

  const cardStyle = {
    background: 'linear-gradient(135deg, #2d2d2d 0%, #252525 100%)',
    border: '1px solid #3a3a3a',
    borderRadius: '16px',
    padding: isMobile ? '1.25rem' : '1.5rem',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  };

  const cardGlowStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 0%, rgba(212, 212, 212, 0.05) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none',
  };

  const cardContentStyle = {
    display: 'flex',
    gap: isMobile ? '1rem' : '1.25rem',
    alignItems: 'flex-start',
    position: 'relative',
    zIndex: 1,
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isMobile ? '48px' : '56px',
    height: isMobile ? '48px' : '56px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #3a3a3a, #2d2d2d)',
    border: '1px solid #505050',
    color: '#e5e5e5',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  };

  const textContainerStyle = {
    flex: 1,
  };

  const cardTitleStyle = {
    fontSize: isMobile ? '1rem' : '1.15rem',
    fontWeight: '600',
    color: '#e5e5e5',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease',
  };

  const cardDescriptionStyle = {
    fontSize: isMobile ? '0.85rem' : '0.92rem',
    color: '#b0b0b0',
    lineHeight: '1.6',
    transition: 'color 0.3s ease',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <motion.div
          style={headerStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={titleStyle}>One Solution to Meet Multiple Needs</h2>
          <h3 style={subtitleStyle}>Comfort and Convenience</h3>
          <p style={descriptionStyle}>
            Experience the future of living where technology seamlessly integrates into your daily life, 
            making everything simpler, smarter, and more efficient.
          </p>
        </motion.div>

        <div style={contentWrapperStyle}>
          <motion.div
            style={imageContainerStyle}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={imageOverlayStyle} />
            <img 
              src="/comfort-and-convenience.jpg" 
              alt="Comfort and Convenience" 
              style={imageStyle}
            />
          </motion.div>

          <div style={benefitsGridStyle}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                style={cardStyle}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: '#5a5a5a',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                }}
                onMouseEnter={(e) => {
                  const glow = e.currentTarget.querySelector('[data-glow]');
                  if (glow) glow.style.opacity = '1';
                  const icon = e.currentTarget.querySelector('[data-icon]');
                  if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(5deg)';
                    icon.style.borderColor = '#707070';
                  }
                }}
                onMouseLeave={(e) => {
                  const glow = e.currentTarget.querySelector('[data-glow]');
                  if (glow) glow.style.opacity = '0';
                  const icon = e.currentTarget.querySelector('[data-icon]');
                  if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    icon.style.borderColor = '#505050';
                  }
                }}
              >
                <div style={cardGlowStyle} data-glow />
                <div style={cardContentStyle}>
                  <div style={iconContainerStyle} data-icon>
                    {benefit.icon}
                  </div>
                  <div style={textContainerStyle}>
                    <h3 style={cardTitleStyle}>{benefit.title}</h3>
                    <p style={cardDescriptionStyle}>{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
