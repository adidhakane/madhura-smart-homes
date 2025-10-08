//First, let's update the HeroSection.js with more images
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Transform Your Home Into a Smart Haven",
      subtitle: "Experience the Future of Living with Intelligent Automation",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop",
      cta: "Explore Solutions"
    },
    {
      title: "Intelligent Lighting Solutions",
      subtitle: "Control Every Light with Voice Commands & Smart Sensors",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
      cta: "View Lighting Products"
    },
    {
      title: "Advanced Security Systems",
      subtitle: "Protect Your Family with Smart Monitoring & Access Control",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop",
      cta: "Security Solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroSlides[currentSlide].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 1s ease-in-out',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    marginBottom: '3rem',
    opacity: '0.9',
    lineHeight: '1.6',
  };

  const ctaContainerStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '50px',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const secondaryButtonStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '15px 30px',
    borderRadius: '50px',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backdropFilter: 'blur(10px)',
  };

  const slideDots = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '1rem',
    zIndex: 3,
  };

  const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={backgroundStyle} />
      
      <div className="container">
        <motion.div
          key={currentSlide}
          style={contentStyle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={titleStyle}>
            {heroSlides[currentSlide].title}
          </h1>
          <p style={subtitleStyle}>
            {heroSlides[currentSlide].subtitle}
          </p>
          <div style={ctaContainerStyle}>
            <button
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {heroSlides[currentSlide].cta}
              <FaArrowRight />
            </button>
            <button
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <FaPlay />
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>

      <div style={slideDots}>
        {heroSlides.map((_, index) => (
          <div
            key={index}
            style={{
              ...dotStyle,
              background: index === currentSlide ? '#667eea' : 'rgba(255, 255, 255, 0.5)',
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
