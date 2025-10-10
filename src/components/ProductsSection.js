// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';
// import { productCategories, products } from '../data/products';

// const ProductsSection = ({ onProductClick }) => {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const filteredProducts = selectedCategory === 'all' 
//     ? products.slice(0, 8) // Show only 8 products on home page
//     : products.filter(product => product.category === selectedCategory).slice(0, 4);

//   const sectionStyle = {
//     padding: '100px 0',
//     background: 'rgba(0, 0, 0, 0.05)',
//   };

//   const titleStyle = {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '1rem',
//     background: 'linear-gradient(45deg, #667eea, #764ba2)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };

//   const subtitleStyle = {
//     textAlign: 'center',
//     fontSize: '1.1rem',
//     opacity: 0.8,
//     marginBottom: '3rem',
//     maxWidth: '600px',
//     margin: '0 auto 3rem auto',
//   };

//   const categoryStyle = {
//     display: 'flex',
//     gap: '1rem',
//     marginBottom: '3rem',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   };

//   const categoryButtonStyle = {
//     padding: '10px 20px',
//     borderRadius: '25px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     fontSize: '14px',
//     fontWeight: '500',
//     whiteSpace: 'nowrap',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//     gap: '2rem',
//     marginBottom: '3rem',
//   };

//   const productCardStyle = {
//     background: 'rgba(255, 255, 255, 0.1)',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     borderRadius: '16px',
//     overflow: 'hidden',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//   };

//   const productImageStyle = {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//   };

//   const productInfoStyle = {
//     padding: '1.5rem',
//   };

//   const productNameStyle = {
//     fontSize: '1.1rem',
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: '0.5rem',
//     lineHeight: '1.3',
//   };

//   const priceStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     marginBottom: '0.75rem',
//   };

//   const currentPriceStyle = {
//     fontSize: '1.2rem',
//     fontWeight: '700',
//     color: '#667eea',
//   };

//   const originalPriceStyle = {
//     fontSize: '0.9rem',
//     textDecoration: 'line-through',
//     opacity: '0.6',
//   };

//   const discountStyle = {
//     background: '#4CAF50',
//     color: 'white',
//     padding: '2px 6px',
//     borderRadius: '4px',
//     fontSize: '11px',
//     fontWeight: '600',
//   };

//   const ratingStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     marginBottom: '1rem',
//   };

//   const actionButtonsStyle = {
//     display: 'flex',
//     gap: '0.5rem',
//   };

//   const viewAllButtonStyle = {
//     display: 'block',
//     margin: '0 auto',
//     padding: '15px 30px',
//     background: 'linear-gradient(45deg, #667eea, #764ba2)',
//     border: 'none',
//     borderRadius: '25px',
//     color: 'white',
//     fontSize: '1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <FaStar
//         key={i}
//         style={{
//           color: i < Math.floor(rating) ? '#FFD700' : 'rgba(255, 255, 255, 0.3)',
//           fontSize: '12px',
//         }}
//       />
//     ));
//   };

//   const calculateDiscount = (original, current) => {
//     const originalPrice = parseInt(original.replace(/[^\d]/g, ''));
//     const currentPrice = parseInt(current.replace(/[^\d]/g, ''));
//     return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
//   };

//   return (
//     <section id="products" style={sectionStyle}>
//       <div className="container">
//         <motion.h2 
//           style={titleStyle}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Tata Power EZ Home Products
//         </motion.h2>
        
//         <motion.p 
//           style={subtitleStyle}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Discover our comprehensive range of smart home automation products designed to make your life easier and more efficient.
//         </motion.p>

//         <motion.div 
//           style={categoryStyle}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           {productCategories.map((category) => (
//             <button
//               key={category.id}
//               style={{
//                 ...categoryButtonStyle,
//                 background: selectedCategory === category.id 
//                   ? 'linear-gradient(45deg, #667eea, #764ba2)' 
//                   : 'rgba(255, 255, 255, 0.1)',
//                 color: 'white',
//               }}
//               onClick={() => setSelectedCategory(category.id)}
//               onMouseEnter={(e) => {
//                 if (selectedCategory !== category.id) {
//                   e.target.style.background = 'rgba(255, 255, 255, 0.2)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (selectedCategory !== category.id) {
//                   e.target.style.background = 'rgba(255, 255, 255, 0.1)';
//                 }
//               }}
//             >
//               {category.name}
//             </button>
//           ))}
//         </motion.div>

//         <motion.div 
//           style={gridStyle}
//           layout
//         >
//           {filteredProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               style={productCardStyle}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ 
//                 y: -8, 
//                 boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
//                 background: 'rgba(255, 255, 255, 0.15)'
//               }}
//               onClick={() => onProductClick && onProductClick(product)}
//             >
//               <img src={product.image} alt={product.name} style={productImageStyle} />
//               <div style={productInfoStyle}>
//                 <h3 style={productNameStyle}>{product.name}</h3>
//                 <div style={ratingStyle}>
//                   {renderStars(product.rating)}
//                   <span style={{ fontSize: '12px', opacity: 0.8 }}>({product.reviews})</span>
//                 </div>
//                 <div style={priceStyle}>
//                   <span style={currentPriceStyle}>{product.price}</span>
//                   <span style={originalPriceStyle}>{product.originalPrice}</span>
//                   <span style={discountStyle}>
//                     {calculateDiscount(product.originalPrice, product.price)}% OFF
//                   </span>
//                 </div>
//                 <div style={actionButtonsStyle}>
//                   <button 
//                     className="btn-primary" 
//                     style={{ 
//                       flex: 1, 
//                       fontSize: '13px', 
//                       padding: '8px 12px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       gap: '0.5rem'
//                     }}
//                   >
//                     <FaEye />
//                     View Details
//                   </button>
//                   <button 
//                     style={{
//                       background: 'rgba(255, 255, 255, 0.1)',
//                       border: '1px solid rgba(255, 255, 255, 0.3)',
//                       borderRadius: '6px',
//                       color: 'white',
//                       padding: '8px 12px',
//                       cursor: 'pointer',
//                       transition: 'all 0.3s ease',
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.background = 'rgba(255, 255, 255, 0.2)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.background = 'rgba(255, 255, 255, 0.1)';
//                     }}
//                   >
//                     <FaShoppingCart />
//                   </button>
//                 </div>
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
//             boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
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
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { productCategories, products } from '../data/products';

const ProductsSection = ({ onProductClick }) => {
  // Remove 'all' category for home page
  const homeCategories = productCategories.filter(cat => cat.id !== 'all');
  const [selectedCategory, setSelectedCategory] = useState('motion-sensors');

  const filteredProducts = products.filter(product => product.category === selectedCategory).slice(0, 4);

  const sectionStyle = {
    padding: '100px 0',
    background: 'rgba(0, 0, 0, 0.05)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    opacity: 0.8,
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  };

  const categoryStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const categoryButtonStyle = {
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  };

  const productCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const productImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const productInfoStyle = {
    padding: '1.5rem',
  };

  const productNameStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '1rem',
    lineHeight: '1.3',
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    opacity: 0.8,
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  const actionButtonsStyle = {
    display: 'flex',
    gap: '0.5rem',
  };

  const viewAllButtonStyle = {
    display: 'block',
    margin: '0 auto',
    padding: '15px 30px',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '25px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
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
          Smart Home Products
        </motion.h2>
        
        <motion.p 
          style={subtitleStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover our comprehensive range of smart home automation products designed to make your life easier and more efficient.
        </motion.p>

        <motion.div 
          style={categoryStyle}
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
                  ? 'linear-gradient(45deg, #667eea, #764ba2)' 
                  : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
              }}
              onClick={() => setSelectedCategory(category.id)}
              onMouseEnter={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category.id) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div 
          style={gridStyle}
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              style={productCardStyle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                background: 'rgba(255, 255, 255, 0.15)'
              }}
              onClick={() => onProductClick && onProductClick(product)}
            >
              <img src={product.image} alt={product.name} style={productImageStyle} />
              <div style={productInfoStyle}>
                <h3 style={productNameStyle}>{product.name}</h3>
                <p style={descriptionStyle}>{product.description}</p>
                <div style={actionButtonsStyle}>
                  <button 
                    className="btn-primary" 
                    style={{ 
                      flex: 1, 
                      fontSize: '13px', 
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <FaEye />
                    View Details
                  </button>
                  <button 
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '6px',
                      color: 'white',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <FaShoppingCart />
                  </button>
                </div>
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
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
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
