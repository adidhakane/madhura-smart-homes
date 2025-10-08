// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';

// // const Header = () => {
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const headerStyle = {
// //     position: 'fixed',
// //     top: 0,
// //     width: '100%',
// //     zIndex: 1000,
// //     padding: '1rem 0',
// //     transition: 'all 0.3s ease',
// //     background: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
// //     backdropFilter: scrolled ? 'blur(10px)' : 'none',
// //     borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
// //   };

// //   const navStyle = {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     padding: '0 20px',
// //   };

// //   const logoStyle = {
// //     fontSize: '1.8rem',
// //     fontWeight: '700',
// //     background: 'linear-gradient(45deg, #667eea, #764ba2)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //   };

// //   const navLinksStyle = {
// //     display: 'flex',
// //     listStyle: 'none',
// //     gap: '2rem',
// //   };

// //   const linkStyle = {
// //     color: 'white',
// //     textDecoration: 'none',
// //     fontWeight: '500',
// //     transition: 'color 0.3s ease',
// //     cursor: 'pointer',
// //   };

// //   return (
// //     <motion.header 
// //       style={headerStyle}
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ duration: 0.6 }}
// //     >
// //       <nav style={navStyle}>
// //         <div style={logoStyle}>Madhura Smart Homes</div>
// //         <ul style={navLinksStyle}>
// //           <li><a href="#home" style={linkStyle}>Home</a></li>
// //           <li><a href="#features" style={linkStyle}>Features</a></li>
// //           <li><a href="#products" style={linkStyle}>Products</a></li>
// //           <li><a href="#contact" style={linkStyle}>Contact</a></li>
// //         </ul>
// //       </nav>
// //     </motion.header>
// //   );
// // };

// // export default Header;



// //Update src/components/Header.js to include lightbox functionality
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Lightbox from './LightBox';
// import ProductsLightbox from './ProductsLightbox';
// import ContactLightbox from './ContactLightbox';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeModal, setActiveModal] = useState(null);

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
//     background: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
//     backdropFilter: scrolled ? 'blur(10px)' : 'none',
//     borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
//   };

//   const navStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//   };

//   const logoStyle = {
//     fontSize: '1.8rem',
//     fontWeight: '700',
//     background: 'linear-gradient(45deg, #667eea, #764ba2)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     cursor: 'pointer',
//   };

//   const navLinksStyle = {
//     display: 'flex',
//     listStyle: 'none',
//     gap: '2rem',
//   };

//   const linkStyle = {
//     color: 'white',
//     textDecoration: 'none',
//     fontWeight: '500',
//     transition: 'color 0.3s ease',
//     cursor: 'pointer',
//   };

//   const handleNavClick = (section) => {
//     if (section === 'products') {
//       setActiveModal('products');
//     } else if (section === 'contact') {
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
//           <div style={logoStyle} onClick={() => handleNavClick('home')}>
//             Madhura Smart Homes
//           </div>
//           <ul style={navLinksStyle}>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('home')}
//                 onMouseEnter={(e) => e.target.style.color = '#667eea'}
//                 onMouseLeave={(e) => e.target.style.color = 'white'}
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('features')}
//                 onMouseEnter={(e) => e.target.style.color = '#667eea'}
//                 onMouseLeave={(e) => e.target.style.color = 'white'}
//               >
//                 Features
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('products')}
//                 onMouseEnter={(e) => e.target.style.color = '#667eea'}
//                 onMouseLeave={(e) => e.target.style.color = 'white'}
//               >
//                 Products
//               </a>
//             </li>
//             <li>
//               <a 
//                 style={linkStyle} 
//                 onClick={() => handleNavClick('contact')}
//                 onMouseEnter={(e) => e.target.style.color = '#667eea'}
//                 onMouseLeave={(e) => e.target.style.color = 'white'}
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </motion.header>

//       <Lightbox
//         isOpen={activeModal === 'products'}
//         onClose={() => setActiveModal(null)}
//         title="Our Smart Home Products"
//       >
//         <ProductsLightbox />
//       </Lightbox>

//       <Lightbox
//         isOpen={activeModal === 'contact'}
//         onClose={() => setActiveModal(null)}
//         title="Get In Touch With Us"
//       >
//         <ContactLightbox />
//       </Lightbox>
//     </>
//   );
// };

// export default Header;
// //Included lightbox functionality

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';
import ProductsLightbox from './ProductsLightbox';
import ContactLightbox from './ContactLightbox';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

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
    background: scrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer',
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const handleNavClick = (section) => {
    if (section === 'products') {
      setActiveModal('products');
    } else if (section === 'contact') {
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
          <div style={logoStyle} onClick={() => handleNavClick('home')}>
            Madhura Smart Homes
          </div>
          <ul style={navLinksStyle}>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('home')}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('features')}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('products')}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                style={linkStyle} 
                onClick={() => handleNavClick('contact')}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </motion.header>

      <Lightbox
        isOpen={activeModal === 'products'}
        onClose={() => setActiveModal(null)}
        title="Tata Power EZ Home Products"
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
  );
};

export default Header;
