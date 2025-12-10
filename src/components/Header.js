// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Lightbox from './Lightbox';
// import ProductsLightbox from './ProductsLightbox';
// import ContactLightbox from './ContactLightbox';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeModal, setActiveModal] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   // Feature flag to control lightbox behavior
//   // Set to true to show lightboxes, false to scroll to sections
//   // TO ENABLE LIGHTBOXES: Change this value to true
//   const enableLightboxes = false;

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const headerStyle = {
//     position: 'fixed',
//     top: 0,
//     width: '100%',
//     zIndex: 1000,
//     padding: '1rem 0',
//     transition: 'all 0.3s ease',
//     background: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(26, 26, 26, 0.8)',
//     // background: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 1)',/* ****** */
//     backdropFilter: 'blur(10px)',
//     boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.5)' : 'none',
//   };

//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//   };

//   const logoContainerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.0rem',
//     cursor: 'pointer',
//   };

//   const logoImageStyle = {
//     height: scrolled ? '40px' : '50px',
//     width: 'auto',
//     transition: 'all 0.3s ease',
//     objectFit: 'contain',
//     // backgroundColor: '#ffffff',
//     padding: '8px 12px',
//     borderRadius: '8px',
//   };

//   const logoTextStyle = {
//     fontSize: scrolled ? '1.4rem' : '1.6rem',
//     fontWeight: '700',
//     color: '#e5e5e5',
//     // color: '#4b4b4bff',/* ****** */
//     transition: 'all 0.3s ease',
//     whiteSpace: 'nowrap',
//   };

//   const navLinksStyle = {
//     display: 'flex',
//     listStyle: 'none',
//     gap: '2rem',
//   };

//   const linkStyle = {
//     color: '#b0b0b0',
//     // color: '#1d1c1cff',/* ****** */
//     textDecoration: 'none',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     position: 'relative',
//     padding: '0.5rem 0',
//   };

//   const mobileMenuButtonStyle = {
//     display: 'none',
//     background: 'none',
//     border: 'none',
//     color: '#e5e5e5',
//     fontSize: '1.5rem',
//     cursor: 'pointer',
//     padding: '0.5rem',
//     transition: 'all 0.3s ease',
//   };

//   const mobileMenuStyle = {
//     position: 'fixed',
//     top: scrolled ? '70px' : '82px',
//     left: 0,
//     right: 0,
//     background: 'rgba(26, 26, 26, 0.98)',
//     backdropFilter: 'blur(20px)',
//     padding: '1rem 0',
//     boxShadow: mobileMenuOpen ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none',
//     transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-120%)',
//     transition: 'transform 0.3s ease',
//     zIndex: 1001,
//     visibility: mobileMenuOpen ? 'visible' : 'hidden',
//   };

//   const mobileNavLinksStyle = {
//     listStyle: 'none',
//     padding: '0',
//     margin: '0',
//   };

//   const mobileLinkStyle = {
//     display: 'block',
//     padding: '1rem 2rem',
//     color: '#b0b0b0',
//     textDecoration: 'none',
//     fontSize: '1.1rem',
//     fontWeight: '500',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//   };

//   const handleNavClick = (section) => {
//     setMobileMenuOpen(false);
//     if (enableLightboxes && section === 'products') {
//       setActiveModal('products');
//     } else if (enableLightboxes && section === 'contact') {
//       setActiveModal('contact');
//     } else {
//       document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <motion.header 
//         style={headerStyle}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <nav style={navStyle}>
//           <div 
//             style={logoContainerStyle} 
//             onClick={() => handleNavClick('home')}
//           >
//             <img 
//               src="/Madhura-Logo-Transparent.png" 
//               alt="Madhura" 
//               style={logoImageStyle}
//             />
//             <span style={logoTextStyle}>
//               Smart Homes
//             </span>
//           </div>
//           <ul style={navLinksStyle}>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('home')}
//                 onMouseEnter={(e) => {
//                   e.target.style.color = '#e5e5e5';
//                   e.target.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = '#b0b0b0';
//                   e.target.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('features')}
//                 onMouseEnter={(e) => {
//                   e.target.style.color = '#e5e5e5';
//                   e.target.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = '#b0b0b0';
//                   e.target.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Features
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('products')}
//                 onMouseEnter={(e) => {
//                   e.target.style.color = '#e5e5e5';
//                   e.target.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = '#b0b0b0';
//                   e.target.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Products
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('contact')}
//                 onMouseEnter={(e) => {
//                   e.target.style.color = '#e5e5e5';
//                   e.target.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = '#b0b0b0';
//                   e.target.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <button 
//             style={mobileMenuButtonStyle}
//             className="mobile-menu-button"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? '\u2715' : '\u2630'}
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         <div style={mobileMenuStyle}>
//           <ul style={mobileNavLinksStyle}>
//             <li>
//               <a 
//                 style={mobileLinkStyle}
//                 onClick={() => handleNavClick('home')}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'rgba(58, 58, 58, 0.5)';
//                   e.target.style.color = '#e5e5e5';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'transparent';
//                   e.target.style.color = '#b0b0b0';
//                 }}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={mobileLinkStyle}
//                 onClick={() => handleNavClick('features')}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'rgba(58, 58, 58, 0.5)';
//                   e.target.style.color = '#e5e5e5';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'transparent';
//                   e.target.style.color = '#b0b0b0';
//                 }}
//               >
//                 Features
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={mobileLinkStyle}
//                 onClick={() => handleNavClick('products')}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'rgba(58, 58, 58, 0.5)';
//                   e.target.style.color = '#e5e5e5';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'transparent';
//                   e.target.style.color = '#b0b0b0';
//                 }}
//               >
//                 Products
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={mobileLinkStyle}
//                 onClick={() => handleNavClick('contact')}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = 'rgba(58, 58, 58, 0.5)';
//                   e.target.style.color = '#e5e5e5';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = 'transparent';
//                   e.target.style.color = '#b0b0b0';
//                 }}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </motion.header>

//       {enableLightboxes && (
//         <>
//           <Lightbox
//             isOpen={activeModal === 'products'}
//             onClose={() => setActiveModal(null)}
//             title="Smart Home Products"
//           >
//             <ProductsLightbox />
//           </Lightbox>

//           <Lightbox
//             isOpen={activeModal === 'contact'}
//             onClose={() => setActiveModal(null)}
//             title="Get In Touch With Us"
//           >
//             <ContactLightbox />
//           </Lightbox>
//         </>
//       )}
//     </>
//   );
// };

// export default Header;








import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';
import ProductsLightbox from './ProductsLightbox';
import ContactLightbox from './ContactLightbox';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const enableLightboxes = false;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ['home', 'features', 'products', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    padding: scrolled ? '0.75rem 0' : '1rem 0',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: scrolled 
      ? 'rgba(26, 26, 26, 0.98)' 
      : 'linear-gradient(180deg, rgba(26, 26, 26, 0.95) 0%, rgba(26, 26, 26, 0.8) 100%)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.6)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    zIndex: 1002,
  };

  const logoImageStyle = {
    height: scrolled ? '36px' : '44px',
    width: 'auto',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    objectFit: 'contain',
    padding: '6px 10px',
    borderRadius: '8px',
    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))',
  };

  const logoTextStyle = {
    fontSize: scrolled ? '1.0rem' : '1.25rem',
    fontWeight: '700',
    color: '#ffffff',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    whiteSpace: 'nowrap',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    letterSpacing: '-0.02em',
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2.5rem',
    alignItems: 'center',
  };

  const linkStyle = (isActive) => ({
    color: isActive ? '#ffffff' : '#b0b0b0',
    textDecoration: 'none',
    fontWeight: isActive ? '600' : '500',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    padding: '0.5rem 0',
    fontSize: '0.95rem',
    letterSpacing: '0.01em',
  });

  const activeLinkIndicator = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #ffffff, #d4d4d4)',
    borderRadius: '2px',
  };

  const mobileMenuButtonStyle = {
    display: 'none',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    fontSize: '1.3rem',
    cursor: 'pointer',
    padding: '0.6rem',
    borderRadius: '8px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1002,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  };

  const mobileMenuOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    zIndex: 999,
    opacity: mobileMenuOpen ? 1 : 0,
    visibility: mobileMenuOpen ? 'visible' : 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '280px',
    maxWidth: '85vw',
    background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.98) 0%, rgba(35, 35, 35, 0.98) 100%)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    padding: '5rem 0 2rem 0',
    boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.8)',
    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1001,
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
    overflowY: 'auto',
  };

  const mobileNavLinksStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const mobileLinkStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '1.2rem 2rem',
    color: isActive ? '#ffffff' : '#b0b0b0',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: isActive ? '600' : '500',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    borderLeft: isActive ? '3px solid #ffffff' : '3px solid transparent',
    background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
    position: 'relative',
  });

  const mobileCloseButtonStyle = {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  const handleNavClick = (section) => {
    setMobileMenuOpen(false);
    setActiveSection(section);
    
    if (enableLightboxes && section === 'products') {
      setActiveModal('products');
    } else if (enableLightboxes && section === 'contact') {
      setActiveModal('contact');
    } else {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.header 
        style={headerStyle}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <nav style={navStyle}>
          <motion.div 
            style={logoContainerStyle} 
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img 
              src="/Madhura-Logo-Transparent.png" 
              alt="Madhura" 
              style={logoImageStyle}
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.span 
              style={logoTextStyle}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Smart Homes
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul style={navLinksStyle} className="desktop-nav">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <motion.a 
                  style={linkStyle(activeSection === item.id)}
                  onClick={() => handleNavClick(item.id)}
                  whileHover={{ 
                    color: '#ffffff',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      style={activeLinkIndicator}
                      layoutId="activeLink"
                      transition={{ 
                        type: "spring", 
                        stiffness: 380, 
                        damping: 30 
                      }}
                    />
                  )}
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            style={mobileMenuButtonStyle}
            className="mobile-menu-button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            whileHover={{ 
              scale: 1.05,
              background: 'rgba(255, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </motion.div>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              style={mobileMenuOverlayStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              style={mobileMenuStyle}
              className="mobile-menu-container"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <motion.button
                style={mobileCloseButtonStyle}
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ 
                  scale: 1.1,
                  background: 'rgba(255, 255, 255, 0.1)',
                  rotate: 90
                }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <ul style={mobileNavLinksStyle}>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.1 * index,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <motion.a 
                      style={mobileLinkStyle(activeSection === item.id)}
                      onClick={() => handleNavClick(item.id)}
                      whileTap={{ scale: 0.98, x: 5 }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + (0.1 * index) }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Menu Footer */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  right: '2rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p style={{ 
                  color: '#888', 
                  fontSize: '0.85rem',
                  textAlign: 'center',
                  margin: 0
                }}>
                  © 2024 Madhura Smart Homes
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {enableLightboxes && (
        <>
          <Lightbox
            isOpen={activeModal === 'products'}
            onClose={() => setActiveModal(null)}
            title="Smart Home Products"
          >
            <ProductsLightbox />
          </Lightbox>

          <Lightbox
            isOpen={activeModal === 'contact'}
            onClose={() => setActiveModal(null)}
            title="Get In Touch With Us"
          >
            <ContactLightbox />
          </Lightbox>
        </>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
