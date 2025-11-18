import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';
import ProductsLightbox from './ProductsLightbox';
import ContactLightbox from './ContactLightbox';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Feature flag to control lightbox behavior
  // Set to true to show lightboxes, false to scroll to sections
  // TO ENABLE LIGHTBOXES: Change this value to true
  const enableLightboxes = false;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    padding: '1rem 0',
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(26, 26, 26, 0.8)',
    // background: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 1)',/* ****** */
    backdropFilter: 'blur(10px)',
    boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.5)' : 'none',
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
    gap: '1rem',
    cursor: 'pointer',
  };

  const logoImageStyle = {
    height: scrolled ? '40px' : '50px',
    width: 'auto',
    transition: 'all 0.3s ease',
    objectFit: 'contain',
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    borderRadius: '8px',
  };

  const logoTextStyle = {
    fontSize: scrolled ? '1.4rem' : '1.6rem',
    fontWeight: '700',
    color: '#e5e5e5',
    // color: '#4b4b4bff',/* ****** */
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
  };

  const linkStyle = {
    color: '#b0b0b0',
    // color: '#1d1c1cff',/* ****** */
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    padding: '0.5rem 0',
  };

  const mobileMenuButtonStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#e5e5e5',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    transition: 'all 0.3s ease',
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: scrolled ? '70px' : '82px',
    left: 0,
    right: 0,
    background: 'rgba(26, 26, 26, 0.98)',
    backdropFilter: 'blur(20px)',
    padding: '1rem 0',
    boxShadow: mobileMenuOpen ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none',
    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-120%)',
    transition: 'transform 0.3s ease',
    zIndex: 1001,
    visibility: mobileMenuOpen ? 'visible' : 'hidden',
  };

  const mobileNavLinksStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const mobileLinkStyle = {
    display: 'block',
    padding: '1rem 2rem',
    color: '#b0b0b0',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const handleNavClick = (section) => {
    setMobileMenuOpen(false);
    if (enableLightboxes && section === 'products') {
      setActiveModal('products');
    } else if (enableLightboxes && section === 'contact') {
      setActiveModal('contact');
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header 
        style={headerStyle}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav style={navStyle}>
          <div 
            style={logoContainerStyle} 
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="/logo.jpg" 
              alt="Madhura" 
              style={logoImageStyle}
            />
            <span style={logoTextStyle}>
              Smart Homes
            </span>
          </div>
          <ul style={navLinksStyle}>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('home')}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e5e5e5';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#b0b0b0';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('features')}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e5e5e5';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#b0b0b0';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('products')}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e5e5e5';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#b0b0b0';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('contact')}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e5e5e5';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#b0b0b0';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <button 
            style={mobileMenuButtonStyle}
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '\u2715' : '\u2630'}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle}>
          <ul style={mobileNavLinksStyle}>
            <li>
              <a 
                style={mobileLinkStyle}
                onClick={() => handleNavClick('home')}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(58, 58, 58, 0.5)';
                  e.target.style.color = '#e5e5e5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#b0b0b0';
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                style={mobileLinkStyle}
                onClick={() => handleNavClick('features')}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(58, 58, 58, 0.5)';
                  e.target.style.color = '#e5e5e5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#b0b0b0';
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                style={mobileLinkStyle}
                onClick={() => handleNavClick('products')}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(58, 58, 58, 0.5)';
                  e.target.style.color = '#e5e5e5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#b0b0b0';
                }}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                style={mobileLinkStyle}
                onClick={() => handleNavClick('contact')}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(58, 58, 58, 0.5)';
                  e.target.style.color = '#e5e5e5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#b0b0b0';
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </motion.header>

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
    </>
  );
};

export default Header;
