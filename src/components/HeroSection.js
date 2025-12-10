// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaPlay, FaArrowRight } from 'react-icons/fa';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const heroSlides = [
//     {
//       title: "Transform Your Home Into a Smart Haven",
//       subtitle: "Experience the Future of Living with Intelligent Automation",
//       image: "/hero-image1.png",
//       cta: "Explore Solutions"
//     },
//     {
//       title: "Intelligent Lighting Solutions",
//       subtitle: "Control Every Light with Voice Commands & Smart Sensors",
//       image: "/hero-image2.png",
//       cta: "View Lighting Products"
//     },
//     {
//       title: "Advanced Security Systems",
//       subtitle: "Protect Your Family with Smart Monitoring & Access Control",
//       image: "/hero-image3.png",
//       cta: "Security Solutions"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const sectionStyle = {
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     position: 'relative',
//     overflow: 'hidden',
//     background: '#1a1a1a',
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 800 : -800,
//       opacity: 0
//     }),
//     center: {
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 800 : -800,
//       opacity: 0
//     })
//   };

//   const contentStyle = {
//     position: 'relative',
//     zIndex: 2,
//     textAlign: 'center',
//     color: '#e5e5e5',
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '0 20px',
//   };

//   const titleStyle = {
//     fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//     fontWeight: '800',
//     marginBottom: '1.5rem',
//     lineHeight: '1.2',
//     color: '#ffffff',
//   };

//   const subtitleStyle = {
//     fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
//     marginBottom: '3rem',
//     color: '#b0b0b0',
//     lineHeight: '1.6',
//   };

//   const ctaContainerStyle = {
//     display: 'flex',
//     gap: '1rem',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   };

//   const primaryButtonStyle = {
//     background: 'linear-gradient(135deg, #e5e5e5, #b8b8b8)',
//     border: 'none',
//     padding: '15px 30px',
//     borderRadius: '50px',
//     color: '#1a1a1a',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
//   };

//   const slideDots = {
//     position: 'absolute',
//     bottom: '2rem',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     display: 'flex',
//     gap: '1rem',
//     zIndex: 3,
//   };

//   const dotStyle = {
//     width: '12px',
//     height: '12px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     border: '2px solid rgba(255, 255, 255, 0.4)',
//   };

//   return (
//     <section id="home" style={sectionStyle}>
//       <AnimatePresence initial={false} mode="sync">
//         <motion.div
//           key={currentSlide}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "tween", duration: 1.2, ease: "easeInOut" },
//             opacity: { duration: 1.2, ease: "easeInOut" }
//           }}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.85)), url(${heroSlides[currentSlide].image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             willChange: 'transform, opacity',
//           }}
//         />
//       </AnimatePresence>
      
//       <div className="container" style={{ position: 'relative', zIndex: 2 }}>
//         <motion.div
//           key={`content-${currentSlide}`}
//           style={contentStyle}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
//         >
//           <h1 style={titleStyle}>
//             {heroSlides[currentSlide].title}
//           </h1>
//           <p style={subtitleStyle}>
//             {heroSlides[currentSlide].subtitle}
//           </p>
//           <div style={ctaContainerStyle}>
//             <button
//               style={primaryButtonStyle}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-3px)';
//                 e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
//                 e.target.style.background = 'linear-gradient(135deg, #f5f5f5, #c8c8c8)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
//                 e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
//               }}
//             >
//               {heroSlides[currentSlide].cta}
//               <FaArrowRight />
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       <div style={slideDots}>
//         {heroSlides.map((_, index) => (
//           <div
//             key={index}
//             style={{
//               ...dotStyle,
//               background: index === currentSlide ? '#e5e5e5' : 'transparent',
//               borderColor: index === currentSlide ? '#e5e5e5' : 'rgba(255, 255, 255, 0.4)',
//             }}
//             onClick={() => {
//               setDirection(index > currentSlide ? 1 : -1);
//               setCurrentSlide(index);
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'scale(1.2)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'scale(1)';
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "Transform Your Home Into a Smart Haven",
      subtitle: "Experience the Future of Living with Intelligent Automation",
      image: "/hero-image1.png",
      cta: "Explore Solutions",
      gradient: "linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(45, 45, 45, 0.8) 100%)"
    },
    {
      title: "Intelligent Lighting Solutions",
      subtitle: "Control Every Light with Voice Commands & Smart Sensors",
      image: "/hero-image2.png",
      cta: "View Lighting Products",
      gradient: "linear-gradient(135deg, rgba(26, 26, 26, 0.75) 0%, rgba(40, 40, 40, 0.85) 100%)"
    },
    {
      title: "Advanced Security Systems",
      subtitle: "Protect Your Family with Smart Monitoring & Access Control",
      image: "/hero-image3.png",
      cta: "Security Solutions",
      gradient: "linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(35, 35, 35, 0.8) 100%)"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.15,
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const handleSlideChange = (newIndex) => {
    setDirection(newIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: '#0a0a0a',
  };

  const slideContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  };

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#ffffff',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 6vw, 4.5rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    marginBottom: '3rem',
    color: '#e0e0e0',
    lineHeight: '1.6',
    fontWeight: '400',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
  };

  const navigationButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: '1.2rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 10,
  };

  const dotsContainerStyle = {
    position: 'absolute',
    bottom: '3rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '1rem',
    zIndex: 3,
    alignItems: 'center',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    position: 'relative',
  };

  const activeDotStyle = {
    ...dotStyle,
    background: '#ffffff',
    borderColor: '#ffffff',
    width: '12px',
    height: '12px',
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={slideContainerStyle}>
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
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <motion.div
              style={{
                ...backgroundImageStyle,
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
            />
            <div 
              style={{
                ...overlayStyle,
                background: heroSlides[currentSlide].gradient
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            style={contentStyle}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.h1 
              style={titleStyle}
              variants={itemVariants}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              style={subtitleStyle}
              variants={itemVariants}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <motion.button
                className="btn-primary"
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                {heroSlides[currentSlide].cta}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button 
        style={{
          ...navigationButtonStyle,
          left: 'clamp(10px, 3vw, 30px)',
        }}
        onClick={prevSlide}
        whileHover={{ 
          scale: 1.1,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <FaChevronLeft />
      </motion.button>

      <motion.button 
        style={{
          ...navigationButtonStyle,
          right: 'clamp(10px, 3vw, 30px)',
        }}
        onClick={nextSlide}
        whileHover={{ 
          scale: 1.1,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <FaChevronRight />
      </motion.button>

      {/* Slide Indicators */}
      <motion.div 
        style={dotsContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {heroSlides.map((_, index) => (
          <motion.div
            key={index}
            style={index === currentSlide ? activeDotStyle : dotStyle}
            onClick={() => handleSlideChange(index)}
            whileHover={{ 
              scale: 1.3,
              borderColor: '#ffffff'
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentSlide ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            {index === currentSlide && (
              <motion.div
                style={{
                  position: 'absolute',
                  inset: -2,
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
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

      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          background: 'rgba(255, 255, 255, 0.3)',
          zIndex: 3,
          display: 'none',
        }}
        initial={{ width: '0%' }}
        animate={{ width: isAutoPlaying ? '100%' : '0%' }}
        transition={{ 
          duration: 6, 
          ease: "linear",
          repeat: isAutoPlaying ? Infinity : 0
        }}
        key={currentSlide}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          .btn-primary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
      <style>{`
        @media (max-width: 768px) {
          section#home > button {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;