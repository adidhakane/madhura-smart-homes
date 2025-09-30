import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Smart Light Switch",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      description: "WiFi-enabled smart switches with voice control and scheduling"
    },
    {
      id: 2,
      name: "Smart Door Lock",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      description: "Keyless entry with fingerprint and mobile app access"
    },
    {
      id: 3,
      name: "Smart Thermostat",
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=300&fit=crop",
      description: "AI-powered climate control with energy optimization"
    },
    {
      id: 4,
      name: "Security Camera",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      description: "HD wireless cameras with night vision and motion detection"
    },
    {
      id: 5,
      name: "Smart Plug",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Remote control any device with scheduling and energy monitoring"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

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

  const sliderContainerStyle = {
    position: 'relative',
    maxWidth: '900px',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '20px',
  };

  const slideStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '3rem',
    gap: '3rem',
  };

  const imageStyle = {
    width: '300px',
    height: '200px',
    borderRadius: '12px',
    objectFit: 'cover',
  };

  const contentStyle = {
    flex: 1,
  };

  const productTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'white',
  };

  const productDescStyle = {
    fontSize: '1.1rem',
    opacity: '0.8',
    lineHeight: '1.6',
  };

  const navButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(102, 126, 234, 0.8)',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10,
  };

  const dotsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  };

  const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <section id="products" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Smart Home Products
        </motion.h2>
        
        <div style={sliderContainerStyle}>
          <button 
            style={{ ...navButtonStyle, left: '20px' }}
            onClick={prevSlide}
            onMouseEnter={(e) => e.target.style.background = 'rgba(102, 126, 234, 1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(102, 126, 234, 0.8)'}
          >
            <FaChevronLeft />
          </button>
          
          <button 
            style={{ ...navButtonStyle, right: '20px' }}
            onClick={nextSlide}
            onMouseEnter={(e) => e.target.style.background = 'rgba(102, 126, 234, 1)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(102, 126, 234, 0.8)'}
          >
            <FaChevronRight />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              style={slideStyle}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={products[currentSlide].image} 
                alt={products[currentSlide].name}
                style={imageStyle}
              />
              <div style={contentStyle}>
                <h3 style={productTitleStyle}>{products[currentSlide].name}</h3>
                <p style={productDescStyle}>{products[currentSlide].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={dotsStyle}>
          {products.map((_, index) => (
            <div
              key={index}
              style={{
                ...dotStyle,
                background: index === currentSlide ? '#667eea' : 'rgba(255, 255, 255, 0.3)',
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
