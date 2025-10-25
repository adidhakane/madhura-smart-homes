// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaPlay, FaArrowRight } from 'react-icons/fa';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

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
//   };

//   const backgroundStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroSlides[currentSlide].image})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     transition: 'all 1s ease-in-out',
//   };

//   const contentStyle = {
//     position: 'relative',
//     zIndex: 2,
//     textAlign: 'center',
//     color: 'white',
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '0 20px',
//   };

//   const titleStyle = {
//     fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//     fontWeight: '800',
//     marginBottom: '1.5rem',
//     lineHeight: '1.2',
//   };

//   const subtitleStyle = {
//     fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
//     marginBottom: '3rem',
//     opacity: '0.9',
//     lineHeight: '1.6',
//   };

//   const ctaContainerStyle = {
//     display: 'flex',
//     gap: '1rem',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   };

//   const primaryButtonStyle = {
//     background: 'linear-gradient(45deg, #667eea, #764ba2)',
//     border: 'none',
//     padding: '15px 30px',
//     borderRadius: '50px',
//     color: 'white',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//   };

//   const secondaryButtonStyle = {
//     background: 'rgba(255, 255, 255, 0.1)',
//     border: '2px solid rgba(255, 255, 255, 0.3)',
//     padding: '15px 30px',
//     borderRadius: '50px',
//     color: 'white',
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     backdropFilter: 'blur(10px)',
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
//   };

//   return (
//     <section id="home" style={sectionStyle}>
//       <div style={backgroundStyle} />
      
//       <div className="container">
//         <motion.div
//           key={currentSlide}
//           style={contentStyle}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
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
//                 e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = 'none';
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
//               background: index === currentSlide ? '#667eea' : 'rgba(255, 255, 255, 0.5)',
//             }}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Transform Your Home Into a Smart Haven",
      subtitle: "Experience the Future of Living with Intelligent Automation",
      image: "/hero-image1.png",
      cta: "Explore Solutions"
    },
    {
      title: "Intelligent Lighting Solutions",
      subtitle: "Control Every Light with Voice Commands & Smart Sensors",
      image: "/hero-image2.png",
      cta: "View Lighting Products"
    },
    {
      title: "Advanced Security Systems",
      subtitle: "Protect Your Family with Smart Monitoring & Access Control",
      image: "/hero-image3.png",
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
    background: '#1a1a1a',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(26, 26, 26, 0.85)), url(${heroSlides[currentSlide].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 1s ease-in-out',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#e5e5e5',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    color: '#ffffff',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    marginBottom: '3rem',
    color: '#b0b0b0',
    lineHeight: '1.6',
  };

  const ctaContainerStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const primaryButtonStyle = {
    background: 'linear-gradient(135deg, #e5e5e5, #b8b8b8)',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '50px',
    color: '#1a1a1a',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
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
    border: '2px solid rgba(255, 255, 255, 0.4)',
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
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                e.target.style.background = 'linear-gradient(135deg, #f5f5f5, #c8c8c8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
              }}
            >
              {heroSlides[currentSlide].cta}
              <FaArrowRight />
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
              background: index === currentSlide ? '#e5e5e5' : 'transparent',
              borderColor: index === currentSlide ? '#e5e5e5' : 'rgba(255, 255, 255, 0.4)',
            }}
            onClick={() => setCurrentSlide(index)}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
