// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaHome, FaShieldAlt, FaLightbulb, FaMobile, FaLeaf, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const FeaturesSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Get total number of slides based on device
//   const getTotalSlides = () => {
//     return isMobile ? features.length : 2; // Mobile: 6 slides (1 card each), Desktop: 2 slides (3 cards each)
//   };
//   const features = [
//     {
//       icon: <FaHome size={40} />,
//       title: "Complete Home Automation",
//       description: "Transform your entire home with integrated smart solutions that work seamlessly together.",
//       image: "/features-image1.png",
//       benefits: ["Centralized Control", "Scene Management", "Voice Integration"]
//     },
//     {
//       icon: <FaShieldAlt size={40} />,
//       title: "Advanced Security",
//       description: "Protect your family with intelligent security systems and real-time monitoring.",
//       image: "/features-image2.png",
//       benefits: ["24/7 Monitoring", "Smart Alerts", "Remote Access"]
//     },
//     {
//       icon: <FaLightbulb size={40} />,
//       title: "Smart Lighting",
//       description: "Intelligent lighting solutions that adapt to your lifestyle and save energy.",
//       image: "/features-image3.png",
//       benefits: ["Motion Sensors", "Dimming Control", "Color Changing"]
//     },
//     {
//       icon: <FaMobile size={40} />,
//       title: "Mobile Control",
//       description: "Control your entire home from anywhere with our intuitive mobile application.",
//       image: "/features-image4.png",
//       benefits: ["Remote Access", "Real-time Status", "Push Notifications"]
//     },
//     {
//       icon: <FaLeaf size={40} />,
//       title: "Energy Efficiency",
//       description: "Reduce your carbon footprint and electricity bills with smart energy management.",
//       image: "/features-image5.png",
//       benefits: ["Usage Analytics", "Auto Optimization", "Cost Savings"]
//     },
//     {
//       icon: <FaCog size={40} />,
//       title: "Easy Installation",
//       description: "Professional installation and setup with minimal disruption to your daily routine.",
//       image: "/features-image6.png",
//       benefits: ["Expert Technicians", "Quick Setup", "Full Support"]
//     }
//   ];

//   // Auto-advance slideshow
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
//     }, 8000); // Changed to 8 seconds for more reading time

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   // Manual navigation functions
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
//   };

//   // Get current features to display based on device
//   const getCurrentFeatures = () => {
//     if (isMobile) {
//       // Mobile: show 1 feature at a time
//       return [features[currentSlide]];
//     } else {
//       // Desktop: show 3 features at a time
//       const startIndex = currentSlide * 3;
//       return features.slice(startIndex, startIndex + 3);
//     }
//   };

//   const sectionStyle = {
//     padding: '100px 0',
//     background: 'rgba(0, 0, 0, 0.1)',
//   };

//   const titleStyle = {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '3rem',
//     background: 'linear-gradient(45deg, #667eea, #764ba2)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };

//   const slideshowContainerStyle = {
//     overflow: 'hidden',
//     marginTop: '3rem',
//     position: 'relative',
//     padding: '0 60px', // Add padding to make space for buttons outside
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
//     gap: '2rem',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   };

//   const navigationButtonStyle = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     background: 'rgba(255, 255, 255, 0.15)',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.3)',
//     borderRadius: '50%',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     color: 'white',
//     fontSize: '1rem',
//     transition: 'all 0.3s ease',
//     zIndex: 10,
//   };

//   const leftButtonStyle = {
//     ...navigationButtonStyle,
//     left: '10px', // Positioned within the padding area
//   };

//   const rightButtonStyle = {
//     ...navigationButtonStyle,
//     right: '10px', // Positioned within the padding area
//   };

//   const cardStyle = {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     transition: 'all 0.3s ease',
//   };

//   const imageStyle = {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//   };

//   const contentStyle = {
//     padding: '2rem',
//   };

//   const iconContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     marginBottom: '1rem',
//   };

//   const titleCardStyle = {
//     fontSize: '1.3rem',
//     fontWeight: '600',
//     color: 'white',
//     margin: 0,
//   };

//   const descriptionStyle = {
//     opacity: '0.8',
//     lineHeight: '1.6',
//     marginBottom: '1.5rem',
//   };

//   const benefitsStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '0.5rem',
//   };

//   const benefitTagStyle = {
//     background: 'rgba(102, 126, 234, 0.2)',
//     color: '#667eea',
//     padding: '0.25rem 0.75rem',
//     borderRadius: '12px',
//     fontSize: '0.85rem',
//     fontWeight: '500',
//   };

//   const dotsContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '0.5rem',
//     marginTop: '2rem',
//     flexWrap: 'wrap', // Allow wrapping on mobile if needed
//   };

//   const dotStyle = {
//     width: isMobile ? '8px' : '12px', // Smaller dots on mobile
//     height: isMobile ? '8px' : '12px',
//     borderRadius: '50%',
//     transition: 'all 0.3s ease',
//     border: '2px solid rgba(255, 255, 255, 0.5)',
//   };

//   const activeDotStyle = {
//     ...dotStyle,
//     background: '#667eea',
//     borderColor: '#667eea',
//   };

//   const inactiveDotStyle = {
//     ...dotStyle,
//     background: 'transparent',
//   };

//   return (
//     <section id="features" style={sectionStyle}>
//       <div className="container">
//         <motion.h2 
//           style={titleStyle}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Why Choose Madhura Smart Homes?
//         </motion.h2>
        
//         <div style={slideshowContainerStyle}>
//           {/* Navigation Buttons */}
//           <button 
//             style={leftButtonStyle}
//             onClick={prevSlide}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.25)';
//               e.target.style.transform = 'translateY(-50%) scale(1.1)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.15)';
//               e.target.style.transform = 'translateY(-50%) scale(1)';
//             }}
//           >
//             <FaChevronLeft />
//           </button>

//           <button 
//             style={rightButtonStyle}
//             onClick={nextSlide}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.25)';
//               e.target.style.transform = 'translateY(-50%) scale(1.1)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255, 255, 255, 0.15)';
//               e.target.style.transform = 'translateY(-50%) scale(1)';
//             }}
//           >
//             <FaChevronRight />
//           </button>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               style={gridStyle}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//             >
//               {getCurrentFeatures().map((feature, index) => (
//                 <motion.div
//                   key={`${currentSlide}-${index}`}
//                   style={cardStyle}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   whileHover={{ 
//                     y: -10,
//                     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
//                     background: 'rgba(255, 255, 255, 0.15)'
//                   }}
//                 >
//                   <img src={feature.image} alt={feature.title} style={imageStyle} />
//                   <div style={contentStyle}>
//                     <div style={iconContainerStyle}>
//                       <div style={{ color: '#667eea' }}>
//                         {feature.icon}
//                       </div>
//                       <h3 style={titleCardStyle}>{feature.title}</h3>
//                     </div>
//                     <p style={descriptionStyle}>{feature.description}</p>
//                     <div style={benefitsStyle}>
//                       {feature.benefits.map((benefit, idx) => (
//                         <span key={idx} style={benefitTagStyle}>
//                           {benefit}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {/* Dots Navigation */}
//           <div style={dotsContainerStyle}>
//             {Array.from({ length: getTotalSlides() }, (_, slideIndex) => (
//               <div
//                 key={slideIndex}
//                 style={slideIndex === currentSlide ? activeDotStyle : inactiveDotStyle}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaShieldAlt, FaLightbulb, FaMobile, FaLeaf, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get total number of slides based on device
  const getTotalSlides = () => {
    return isMobile ? features.length : 2; // Mobile: 6 slides (1 card each), Desktop: 2 slides (3 cards each)
  };
  
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

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
    }, 8000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Manual navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
  };

  // Get current features to display based on device
  const getCurrentFeatures = () => {
    if (isMobile) {
      return [features[currentSlide]];
    } else {
      const startIndex = currentSlide * 3;
      return features.slice(startIndex, startIndex + 3);
    }
  };

  const sectionStyle = {
    padding: '100px 0',
    background: '#f5f5f5',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '3rem',
    color: '#2d2d2d',
  };

  const slideshowContainerStyle = {
    overflow: 'hidden',
    marginTop: '3rem',
    position: 'relative',
    padding: '0 60px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const navigationButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#2d2d2d',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    zIndex: 10,
  };

  const leftButtonStyle = {
    ...navigationButtonStyle,
    left: '10px',
  };

  const rightButtonStyle = {
    ...navigationButtonStyle,
    right: '10px',
  };

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e0e0e0',
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
    color: '#2d2d2d',
    margin: 0,
  };

  const descriptionStyle = {
    color: '#5a5a5a',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  };

  const benefitsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const benefitTagStyle = {
    background: 'rgba(74, 158, 255, 0.15)',
    color: '#5a5a5a',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: '500',
    border: '1px solid rgba(74, 158, 255, 0.3)',
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  };

  const dotStyle = {
    width: isMobile ? '8px' : '12px',
    height: isMobile ? '8px' : '12px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    border: '2px solid #e0e0e0',
    cursor: 'pointer',
  };

  const activeDotStyle = {
    ...dotStyle,
    background: '#5a5a5a',
    borderColor: '#5a5a5a',
  };

  const inactiveDotStyle = {
    ...dotStyle,
    background: 'transparent',
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
        
        <div style={slideshowContainerStyle}>
          {/* Navigation Buttons */}
          <button 
            style={leftButtonStyle}
            onClick={prevSlide}
            onMouseEnter={(e) => {
              e.target.style.background = '#e8e8e8';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
              e.target.style.borderColor = '#5a5a5a';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ffffff';
              e.target.style.transform = 'translateY(-50%) scale(1)';
              e.target.style.borderColor = '#e0e0e0';
            }}
          >
            <FaChevronLeft />
          </button>

          <button 
            style={rightButtonStyle}
            onClick={nextSlide}
            onMouseEnter={(e) => {
              e.target.style.background = '#e8e8e8';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
              e.target.style.borderColor = '#5a5a5a';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ffffff';
              e.target.style.transform = 'translateY(-50%) scale(1)';
              e.target.style.borderColor = '#e0e0e0';
            }}
          >
            <FaChevronRight />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              style={gridStyle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {getCurrentFeatures().map((feature, index) => (
                <motion.div
                  key={`${currentSlide}-${index}`}
                  style={cardStyle}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                    background: '#e8e8e8',
                    borderColor: '#5a5a5a'
                  }}
                >
                  <img src={feature.image} alt={feature.title} style={imageStyle} />
                  <div style={contentStyle}>
                    <div style={iconContainerStyle}>
                      <div style={{ color: '#5a5a5a' }}>
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
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div style={dotsContainerStyle}>
            {Array.from({ length: getTotalSlides() }, (_, slideIndex) => (
              <div
                key={slideIndex}
                style={slideIndex === currentSlide ? activeDotStyle : inactiveDotStyle}
                onClick={() => setCurrentSlide(slideIndex)}
                onMouseEnter={(e) => {
                  if (slideIndex !== currentSlide) {
                    e.target.style.borderColor = '#5a5a5a';
                  }
                }}
                onMouseLeave={(e) => {
                  if (slideIndex !== currentSlide) {
                    e.target.style.borderColor = '#e0e0e0';
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
