// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaEye, FaShoppingCart } from 'react-icons/fa';
// import { productCategories, products } from '../data/products';

// const ProductsSection = ({ onProductClick }) => {
//   // Remove 'all' category for home page
//   const homeCategories = productCategories.filter(cat => cat.id !== 'all');
//   const [selectedCategory, setSelectedCategory] = useState('security-sensors');

//   const filteredProducts = products.filter(product => product.category === selectedCategory).slice(0, 4);

//   // Mobile detection - must be declared first
//   const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

//   const sectionStyle = {
//     padding: '100px 0',
//     background: '#f5f5f5',
//     // background: '#343434ff'
//   };

//   const responsiveSectionStyle = {
//     ...sectionStyle,
//     ...(isMobile && {
//       padding: '60px 0 40px 0',
//     })
//   };

//   const titleStyle = {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '1rem',
//     color: '#2d2d2d',
//   };

//   const responsiveTitleStyle = {
//     ...titleStyle,
//     ...(isMobile && {
//       fontSize: '1.75rem',
//       marginBottom: '0.75rem',
//     })
//   };

//   const subtitleStyle = {
//     textAlign: 'center',
//     fontSize: '1.1rem',
//     color: '#b0b0b0',
//     marginBottom: '3rem',
//     maxWidth: '600px',
//     margin: '0 auto 3rem auto',
//   };

//   const responsiveSubtitleStyle = {
//     ...subtitleStyle,
//     ...(isMobile && {
//       fontSize: '0.9rem',
//       marginBottom: '2rem',
//       margin: '0 auto 2rem auto',
//     })
//   };

//   const categoryStyle = {
//     display: 'flex',
//     gap: '0.75rem',
//     marginBottom: '3rem',
//     overflowX: 'auto',
//     paddingBottom: '0.5rem',
//     scrollbarWidth: 'thin',
//     WebkitOverflowScrolling: 'touch',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//   };

//   const responsiveCategoryStyle = {
//     ...categoryStyle,
//     ...(isMobile && {
//       marginBottom: '1.5rem',
//       gap: '0.5rem',
//       justifyContent: 'flex-start',
//       flexWrap: 'nowrap',
//     })
//   };

//   const categoryButtonStyle = {
//     padding: '8px 16px',
//     borderRadius: '20px',
//     border: '1px solid #e0e0e0',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     fontSize: '13px',
//     fontWeight: '500',
//     whiteSpace: 'nowrap',
//     flexShrink: 0,
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 320px))',
//     gap: '1.5rem',
//     marginBottom: '3rem',
//     justifyContent: 'center',
//   };
  
//   const responsiveGridStyle = {
//     ...gridStyle,
//     ...(isMobile && {
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '0.75rem',
//     })
//   };

//   const productCardStyle = {
//     background: '#2d2d2d',
//     border: '1px solid #e0e0e0',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     maxWidth: '320px',
//     width: '100%',
//   };

//   const responsiveCardStyle = {
//     ...productCardStyle,
//     ...(isMobile && {
//       borderRadius: '12px',
//       maxWidth: '100%',
//     })
//   };

//   const productImageStyle = {
//     width: '100%',
//     height: '250px',
//     objectFit: 'contain',
//     backgroundColor: '#ffffff',
//     padding: '20px',
//   };

//   const responsiveImageStyle = {
//     ...productImageStyle,
//     ...(isMobile && {
//       height: '140px',
//       padding: '10px',
//     })
//   };

//   const productInfoStyle = {
//     padding: '1.5rem',
//   };

//   const responsiveInfoStyle = {
//     ...productInfoStyle,
//     ...(isMobile && {
//       padding: '0.75rem',
//     })
//   };

//   const productNameStyle = {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: '#e5e5e5',
//     marginBottom: '1rem',
//     lineHeight: '1.3',
//   };

//   const responsiveNameStyle = {
//     ...productNameStyle,
//     ...(isMobile && {
//       fontSize: '0.85rem',
//       marginBottom: '0.5rem',
//     })
//   };

//   const descriptionStyle = {
//     fontSize: '0.9rem',
//     color: '#b0b0b0',
//     lineHeight: '1.5',
//     marginBottom: '1.5rem',
//     display: '-webkit-box',
//     WebkitLineClamp: 2,
//     WebkitBoxOrient: 'vertical',
//     overflow: 'hidden',
//   };

//   const responsiveDescriptionStyle = {
//     ...descriptionStyle,
//     ...(isMobile && {
//       fontSize: '0.75rem',
//       marginBottom: '0.75rem',
//       WebkitLineClamp: 1,
//       lineHeight: '1.3',
//     })
//   };

//   const actionButtonsStyle = {
//     display: 'flex',
//     gap: '0.5rem',
//   };

//   const responsiveButtonsStyle = {
//     ...actionButtonsStyle,
//     ...(isMobile && {
//       gap: '0.25rem',
//     })
//   };

//   const viewAllButtonStyle = {
//     display: 'block',
//     margin: '0 auto',
//     padding: '15px 30px',
//     background: '#2d2d2d',
//     border: 'none',
//     borderRadius: '25px',
//     color: '#ffffff',
//     fontSize: '1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 15px rgba(74, 158, 255, 0.3)',
//   };

//   return (
//     <section id="products" style={responsiveSectionStyle}>
//       <div className="container">
//         <motion.h2 
//           style={responsiveTitleStyle}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Smart Home Products
//         </motion.h2>
        
//         <motion.p 
//           style={responsiveSubtitleStyle}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Discover our comprehensive range of smart home automation products designed to make your life easier and more efficient.
//         </motion.p>

//         <motion.div 
//           style={responsiveCategoryStyle}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           {homeCategories.map((category) => (
//             <button
//               key={category.id}
//               style={{
//                 ...categoryButtonStyle,
//                 background: selectedCategory === category.id 
//                   ? '#2d2d2d' 
//                   : '#2d2d2d',
//                 color: selectedCategory === category.id ? '#ffffff' : '#e5e5e5',
//                 borderColor: selectedCategory === category.id ? '#5a5a5a' : '#e0e0e0',
//               }}
//               onClick={() => setSelectedCategory(category.id)}
//               onMouseEnter={(e) => {
//                 if (selectedCategory !== category.id) {
//                   e.target.style.background = '#3a3a3a';
//                   e.target.style.borderColor = '#5a5a5a';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (selectedCategory !== category.id) {
//                   e.target.style.background = '#2d2d2d';
//                   e.target.style.borderColor = '#e0e0e0';
//                 }
//               }}
//             >
//               {category.name}
//             </button>
//           ))}
//         </motion.div>

//         <motion.div 
//           style={responsiveGridStyle}
//           layout
//         >
//           {filteredProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               style={responsiveCardStyle}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ 
//                 y: -8, 
//                 boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
//                 background: '#3a3a3a',
//                 borderColor: '#5a5a5a'
//               }}
//               onClick={() => onProductClick && onProductClick(product)}
//             >
//               <img src={product.image} alt={product.name} style={responsiveImageStyle} />
//               <div style={responsiveInfoStyle}>
//                 <h3 style={responsiveNameStyle}>{product.name}</h3>
//                 <p style={responsiveDescriptionStyle}>{product.description}</p>
//                 <button 
//                   className="btn-primary" 
//                   style={{ 
//                     width: '100%',
//                     fontSize: isMobile ? '10px' : '13px', 
//                     padding: isMobile ? '6px 8px' : '8px 12px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '0.3rem'
//                   }}
//                 >
//                   <FaEye />
//                   {!isMobile && 'View Details'}
//                   {isMobile && 'View'}
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.button
//           style={viewAllButtonStyle}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           whileHover={{ 
//             transform: 'translateY(-3px)',
//             boxShadow: '0 10px 30px rgba(74, 158, 255, 0.5)',
//             background: '#f5f5f5'
//           }}
//           onClick={() => onProductClick && onProductClick('viewAll')}
//         >
//           View All Products ({products.length})
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;












import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';
import { productCategories, products } from '../data/products';

const ProductsSection = ({ onProductClick }) => {
  // Remove 'all' category for home page
  const homeCategories = productCategories.filter(cat => cat.id !== 'all');
  const [selectedCategory, setSelectedCategory] = useState('security-sensors');

  const filteredProducts = products.filter(product => product.category === selectedCategory).slice(0, 4);

  // Mobile detection - must be declared first
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const sectionStyle = {
    padding: '100px 0',
    background: '#1a1a1a',
  };

  const responsiveSectionStyle = {
    ...sectionStyle,
    ...(isMobile && {
      padding: '60px 0 40px 0',
    })
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const responsiveTitleStyle = {
    ...titleStyle,
    ...(isMobile && {
      fontSize: '1.75rem',
      marginBottom: '0.75rem',
    })
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#b0b0b0',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  };

  const responsiveSubtitleStyle = {
    ...subtitleStyle,
    ...(isMobile && {
      fontSize: '0.9rem',
      marginBottom: '2rem',
      margin: '0 auto 2rem auto',
    })
  };

  const categoryStyle = {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '3rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
    scrollbarWidth: 'thin',
    WebkitOverflowScrolling: 'touch',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const responsiveCategoryStyle = {
    ...categoryStyle,
    ...(isMobile && {
      marginBottom: '1.5rem',
      gap: '0.5rem',
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
    })
  };

  const categoryButtonStyle = {
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '13px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 320px))',
    gap: '1.5rem',
    marginBottom: '3rem',
    justifyContent: 'center',
  };
  
  const responsiveGridStyle = {
    ...gridStyle,
    ...(isMobile && {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.75rem',
    })
  };

  const productCardStyle = {
    background: 'rgba(45, 45, 45, 0.5)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    maxWidth: '320px',
    width: '100%',
  };

  const responsiveCardStyle = {
    ...productCardStyle,
    ...(isMobile && {
      borderRadius: '12px',
      maxWidth: '100%',
    })
  };

  const productImageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'contain',
    backgroundColor: '#ffffff',
    padding: '20px',
  };

  const responsiveImageStyle = {
    ...productImageStyle,
    ...(isMobile && {
      height: '140px',
      padding: '10px',
    })
  };

  const productInfoStyle = {
    padding: '1.5rem',
  };

  const responsiveInfoStyle = {
    ...productInfoStyle,
    ...(isMobile && {
      padding: '0.75rem',
    })
  };

  const productNameStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1rem',
    lineHeight: '1.3',
  };

  const responsiveNameStyle = {
    ...productNameStyle,
    ...(isMobile && {
      fontSize: '0.85rem',
      marginBottom: '0.5rem',
    })
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    color: '#b0b0b0',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  const responsiveDescriptionStyle = {
    ...descriptionStyle,
    ...(isMobile && {
      fontSize: '0.75rem',
      marginBottom: '0.75rem',
      WebkitLineClamp: 1,
      lineHeight: '1.3',
    })
  };

  const viewAllButtonStyle = {
    display: 'block',
    margin: '0 auto',
    padding: '15px 30px',
    background: 'linear-gradient(135deg, #ffffff, #d4d4d4)',
    border: 'none',
    borderRadius: '25px',
    color: '#1a1a1a',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
  };

  return (
    <section id="products" style={responsiveSectionStyle}>
      <div className="container">
        <motion.h2 
          style={responsiveTitleStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Smart Home Products
        </motion.h2>
        
        <motion.p 
          style={responsiveSubtitleStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover our comprehensive range of smart home automation products designed to make your life easier and more efficient.
        </motion.p>

        <motion.div 
          style={responsiveCategoryStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {homeCategories.map((category) => (
            <button
              key={category.id}
              style={{
                ...categoryButtonStyle,
                background: selectedCategory === category.id 
                  ? 'linear-gradient(135deg, #ffffff, #d4d4d4)' 
                  : 'rgba(45, 45, 45, 0.6)',
                color: selectedCategory === category.id ? '#1a1a1a' : '#b0b0b0',
                borderColor: selectedCategory === category.id ? '#ffffff' : 'rgba(255, 255, 255, 0.1)',
              }}
              onClick={() => setSelectedCategory(category.id)}
              onMouseEnter={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.background = 'rgba(58, 58, 58, 0.7)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.background = 'rgba(45, 45, 45, 0.6)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          style={responsiveGridStyle}
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              style={responsiveCardStyle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                borderColor: 'rgba(255, 255, 255, 0.15)'
              }}
              onClick={() => onProductClick && onProductClick(product)}
            >
              <img src={product.image} alt={product.name} style={responsiveImageStyle} />
              <div style={responsiveInfoStyle}>
                <h3 style={responsiveNameStyle}>{product.name}</h3>
                <p style={responsiveDescriptionStyle}>{product.description}</p>
                <button 
                  className="btn-primary" 
                  style={{ 
                    width: '100%',
                    fontSize: isMobile ? '10px' : '13px', 
                    padding: isMobile ? '6px 8px' : '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <FaEye />
                  {!isMobile && 'View Details'}
                  {isMobile && 'View'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          style={viewAllButtonStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)'
          }}
          onClick={() => onProductClick && onProductClick('viewAll')}
        >
          View All Products ({products.length})
        </motion.button>
      </div>
    </section>
  );
};

export default ProductsSection;
