// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaHome, FaShieldAlt, FaLightbulb, FaMobile, FaLeaf, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const FeaturesSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [direction, setDirection] = useState(1);

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
//       setDirection(1);
//       setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
//     }, 24000);

//     return () => clearInterval(interval);
//   }, [isMobile]);

//   // Manual navigation functions
//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
//   };

//   // Get current features to display based on device
//   const getCurrentFeatures = () => {
//     if (isMobile) {
//       return [features[currentSlide]];
//     } else {
//       const startIndex = currentSlide * 3;
//       return features.slice(startIndex, startIndex + 3);
//     }
//   };

//   const sectionStyle = {
//     padding: '100px 0',
//     background: '#f5f5f5',
//     // background: '#343434ff'
//   };

//   const titleStyle = {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '3rem',
//     color: '#2d2d2d',
//   };

//   const slideshowContainerStyle = {
//     overflow: 'hidden',
//     marginTop: '3rem',
//     position: 'relative',
//     padding: '0 60px',
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
//     background: '#ffffff',
//     border: '1px solid #e0e0e0',
//     borderRadius: '50%',
//     width: '40px',
//     height: '40px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     color: '#2d2d2d',
//     fontSize: '1rem',
//     transition: 'all 0.3s ease',
//     zIndex: 10,
//   };

//   const leftButtonStyle = {
//     ...navigationButtonStyle,
//     left: '10px',
//   };

//   const rightButtonStyle = {
//     ...navigationButtonStyle,
//     right: '10px',
//   };

//   const cardStyle = {
//     background: '#ffffff',
//     border: '1px solid #e0e0e0',
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
//     color: '#2d2d2d',
//     margin: 0,
//   };

//   const descriptionStyle = {
//     color: '#5a5a5a',
//     lineHeight: '1.6',
//     marginBottom: '1.5rem',
//   };

//   const benefitsStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '0.5rem',
//   };

//   const benefitTagStyle = {
//     background: 'rgba(74, 158, 255, 0.15)',
//     color: '#5a5a5a',
//     padding: '0.25rem 0.75rem',
//     borderRadius: '12px',
//     fontSize: '0.85rem',
//     fontWeight: '500',
//     border: '1px solid rgba(74, 158, 255, 0.3)',
//   };

//   const dotsContainerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '0.5rem',
//     marginTop: '2rem',
//     flexWrap: 'wrap',
//   };

//   const dotStyle = {
//     width: isMobile ? '8px' : '12px',
//     height: isMobile ? '8px' : '12px',
//     borderRadius: '50%',
//     transition: 'all 0.3s ease',
//     border: '2px solid #e0e0e0',
//     cursor: 'pointer',
//   };

//   const activeDotStyle = {
//     ...dotStyle,
//     background: '#5a5a5a',
//     borderColor: '#5a5a5a',
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
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
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
//               e.target.style.background = '#e8e8e8';
//               e.target.style.transform = 'translateY(-50%) scale(1.1)';
//               e.target.style.borderColor = '#5a5a5a';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = '#ffffff';
//               e.target.style.transform = 'translateY(-50%) scale(1)';
//               e.target.style.borderColor = '#e0e0e0';
//             }}
//           >
//             <FaChevronLeft />
//           </button>

//           <button 
//             style={rightButtonStyle}
//             onClick={nextSlide}
//             onMouseEnter={(e) => {
//               e.target.style.background = '#e8e8e8';
//               e.target.style.transform = 'translateY(-50%) scale(1.1)';
//               e.target.style.borderColor = '#5a5a5a';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = '#ffffff';
//               e.target.style.transform = 'translateY(-50%) scale(1)';
//               e.target.style.borderColor = '#e0e0e0';
//             }}
//           >
//             <FaChevronRight />
//           </button>

//           <AnimatePresence initial={false} mode="sync">
//             <motion.div
//               key={currentSlide}
//               custom={direction}
//               style={{ ...gridStyle, willChange: 'transform, opacity' }}
//               initial={{ opacity: 0, x: direction > 0 ? 400 : -400 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: direction > 0 ? -400 : 400 }}
//               transition={{ 
//                 x: { type: "tween", duration: 1, ease: "easeInOut" },
//                 opacity: { duration: 1, ease: "easeInOut" }
//               }}
//             >
//               {getCurrentFeatures().map((feature, index) => (
//                 <motion.div
//                   key={`${currentSlide}-${index}`}
//                   style={{ ...cardStyle, willChange: 'transform, opacity' }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.3 + (index * 0.15), ease: "easeInOut" }}
//                   whileHover={{ 
//                     scale: 1.02,
//                     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
//                     background: '#e8e8e8',
//                     borderColor: '#5a5a5a',
//                     transition: { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }
//                   }}
//                 >
//                   <img src={feature.image} alt={feature.title} style={imageStyle} />
//                   <div style={contentStyle}>
//                     <div style={iconContainerStyle}>
//                       <div style={{ color: '#5a5a5a' }}>
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
//                 onClick={() => {
//                   setDirection(slideIndex > currentSlide ? 1 : -1);
//                   setCurrentSlide(slideIndex);
//                 }}
//                 onMouseEnter={(e) => {
//                   if (slideIndex !== currentSlide) {
//                     e.target.style.borderColor = '#5a5a5a';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (slideIndex !== currentSlide) {
//                     e.target.style.borderColor = '#e0e0e0';
//                   }
//                 }}
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
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FaHome, FaShieldAlt, FaLightbulb, FaMobile, FaLeaf, FaCog, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FeaturesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: <FaHome size={40} />,
      title: "Complete Home Automation",
      description: "Transform your entire home with integrated smart solutions that work seamlessly together.",
      image: "/features-image1.png",
      benefits: ["Centralized Control", "Scene Management", "Voice Integration"],
      color: "#4a9eff"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Advanced Security",
      description: "Protect your family with intelligent security systems and real-time monitoring.",
      image: "/features-image2.png",
      benefits: ["24/7 Monitoring", "Smart Alerts", "Remote Access"],
      color: "#f59e0b"
    },
    {
      icon: <FaLightbulb size={40} />,
      title: "Smart Lighting",
      description: "Intelligent lighting solutions that adapt to your lifestyle and save energy.",
      image: "/features-image3.png",
      benefits: ["Motion Sensors", "Dimming Control", "Color Changing"],
      color: "#10b981"
    },
    {
      icon: <FaMobile size={40} />,
      title: "Mobile Control",
      description: "Control your entire home from anywhere with our intuitive mobile application.",
      image: "/features-image4.png",
      benefits: ["Remote Access", "Real-time Status", "Push Notifications"],
      color: "#8b5cf6"
    },
    {
      icon: <FaLeaf size={40} />,
      title: "Energy Efficiency",
      description: "Reduce your carbon footprint and electricity bills with smart energy management.",
      image: "/features-image5.png",
      benefits: ["Usage Analytics", "Auto Optimization", "Cost Savings"],
      color: "#22c55e"
    },
    {
      icon: <FaCog size={40} />,
      title: "Easy Installation",
      description: "Professional installation and setup with minimal disruption to your daily routine.",
      image: "/features-image6.png",
      benefits: ["Expert Technicians", "Quick Setup", "Full Support"],
      color: "#ef4444"
    }
  ];

  const getTotalSlides = () => {
    return isMobile ? features.length : 2;
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCurrentFeatures = () => {
    if (isMobile) {
      return [features[currentSlide]];
    } else {
      const startIndex = currentSlide * 3;
      return features.slice(startIndex, startIndex + 3);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const sectionStyle = {
    padding: 'clamp(60px, 10vw, 100px) 0',
    background: '#1a1a1a',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.02em',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#b0b0b0',
    marginBottom: 'clamp(3rem, 6vw, 4rem)',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    lineHeight: '1.6',
  };

  const carouselContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    padding: '0 clamp(50px, 8vw, 80px)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: 'clamp(1rem, 3vw, 2rem)',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const navigationButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    width: 'clamp(40px, 6vw, 50px)',
    height: 'clamp(40px, 6vw, 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 10,
  };

  const cardStyle = {
    background: 'rgba(45, 45, 45, 0.5)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    height: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: 'clamp(180px, 30vw, 220px)',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: 'clamp(1.5rem, 3vw, 2rem)',
  };

  const iconContainerStyle = (color) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    background: `${color}15`,
    borderRadius: '12px',
    marginBottom: '1rem',
    color: color,
  });

  const titleCardStyle = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1rem',
    lineHeight: '1.3',
  };

  const descriptionStyle = {
    color: '#b0b0b0',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
  };

  const benefitsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const benefitTagStyle = (color) => ({
    background: `${color}15`,
    color: color,
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
    fontWeight: '500',
    border: `1px solid ${color}30`,
  });

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: 'clamp(2rem, 4vw, 3rem)',
    flexWrap: 'wrap',
  };

  const dotStyle = {
    width: 'clamp(8px, 1.5vw, 12px)',
    height: 'clamp(8px, 1.5vw, 12px)',
    borderRadius: '50%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    position: 'relative',
  };

  const activeDotStyle = {
    ...dotStyle,
    background: '#ffffff',
    borderColor: '#ffffff',
  };

  return (
    <section id="features" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Why Choose Madhura Smart Homes?
        </motion.h2>
        
        <motion.p
          style={subtitleStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          Experience the perfect blend of innovation, security, and convenience with our cutting-edge smart home solutions.
        </motion.p>
        
        <div style={carouselContainerStyle}>
          {/* Navigation Buttons */}
          <motion.button 
            style={{
              ...navigationButtonStyle,
              left: 'clamp(5px, 2vw, 15px)',
            }}
            onClick={prevSlide}
            whileHover={{ 
              scale: 1.1,
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button 
            style={{
              ...navigationButtonStyle,
              right: 'clamp(5px, 2vw, 15px)',
            }}
            onClick={nextSlide}
            whileHover={{ 
              scale: 1.1,
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaChevronRight />
          </motion.button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  mass: 0.8
                },
                opacity: { duration: 0.3 }
              }}
              style={gridStyle}
            >
              {getCurrentFeatures().map((feature, index) => (
                <motion.div
                  key={`${currentSlide}-${index}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  style={cardStyle}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <motion.img 
                    src={feature.image} 
                    alt={feature.title} 
                    style={imageStyle}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div style={contentStyle}>
                    <motion.div 
                      style={iconContainerStyle(feature.color)}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 style={titleCardStyle}>{feature.title}</h3>
                    <p style={descriptionStyle}>{feature.description}</p>
                    <div style={benefitsStyle}>
                      {feature.benefits.map((benefit, idx) => (
                        <motion.span 
                          key={idx} 
                          style={benefitTagStyle(feature.color)}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {benefit}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <motion.div 
            style={dotsContainerStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {Array.from({ length: getTotalSlides() }, (_, slideIndex) => (
              <motion.div
                key={slideIndex}
                style={slideIndex === currentSlide ? activeDotStyle : dotStyle}
                onClick={() => {
                  setDirection(slideIndex > currentSlide ? 1 : -1);
                  setCurrentSlide(slideIndex);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 10000);
                }}
                whileHover={{ 
                  scale: 1.3,
                  borderColor: '#ffffff'
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: slideIndex === currentSlide ? 1.2 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                {slideIndex === currentSlide && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: -3,
                      borderRadius: '50%',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default FeaturesSection;
