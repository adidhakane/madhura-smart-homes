import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Madhura Smart Homes transformed our house into a futuristic living space. The automation system is incredibly intuitive and has made our daily routines so much easier.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      project: "Complete Home Automation"
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Pune",
      rating: 5,
      text: "The smart security system gives us complete peace of mind. We can monitor our home from anywhere, and the installation team was professional and efficient.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      project: "Security System Installation"
    },
    {
      id: 3,
      name: "Amit Kumar",
      location: "Delhi",
      rating: 5,
      text: "Energy savings have been remarkable since installing the smart lighting and climate control. The ROI is better than expected, and the convenience is unmatched.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      project: "Smart Lighting & Climate Control"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Bangalore",
      rating: 5,
      text: "The team's expertise and attention to detail impressed us. They customized the solution perfectly for our needs and provided excellent after-sales support.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      project: "Custom Smart Home Solution"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const sectionStyle = {
    padding: '100px 0',
    background: 'rgba(0, 0, 0, 0.1)',
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

  const testimonialContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    minHeight: '300px',
  };

  const testimonialCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '3rem',
    textAlign: 'center',
    position: 'relative',
  };

  const quoteIconStyle = {
    fontSize: '3rem',
    color: '#667eea',
    opacity: 0.3,
    position: 'absolute',
    top: '1rem',
    left: '2rem',
  };

  const testimonialTextStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '2rem',
    fontStyle: 'italic',
    opacity: 0.9,
  };

  const authorInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  };

  const avatarStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgba(102, 126, 234, 0.5)',
  };

  const authorDetailsStyle = {
    textAlign: 'left',
  };

  const authorNameStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.25rem',
  };

  const authorLocationStyle = {
    fontSize: '0.9rem',
    opacity: 0.7,
    marginBottom: '0.5rem',
  };

  const ratingStyle = {
    display: 'flex',
    gap: '0.25rem',
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        style={{
          color: i < rating ? '#FFD700' : 'rgba(255, 255, 255, 0.3)',
          fontSize: '14px',
        }}
      />
    ));
  };

  return (
    <section style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        
        <div style={testimonialContainerStyle}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              style={testimonialCardStyle}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <FaQuoteLeft style={quoteIconStyle} />
              
              <p style={testimonialTextStyle}>
                {testimonials[currentTestimonial].text}
              </p>
              
              <div style={authorInfoStyle}>
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  style={avatarStyle}
                />
                <div style={authorDetailsStyle}>
                  <div style={authorNameStyle}>
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div style={authorLocationStyle}>
                    {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].project}
                  </div>
                  <div style={ratingStyle}>
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={dotsStyle}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              style={{
                ...dotStyle,
                background: index === currentTestimonial ? '#667eea' : 'rgba(255, 255, 255, 0.3)',
              }}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
