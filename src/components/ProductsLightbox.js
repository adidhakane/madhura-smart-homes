import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { productCategories, products } from '../data/products';

const ProductsLightbox = ({ selectedProduct: initialProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  // Mobile detection
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const containerStyle = {
    minHeight: '70vh',
  };

  const categoryStyle = {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '2rem',
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
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    fontWeight: '500',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  };

  const responsiveButtonStyle = {
    ...categoryButtonStyle,
    ...(isMobile && {
      fontSize: '11px',
      padding: '6px 12px',
    })
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  };

  const responsiveGridStyle = {
    ...gridStyle,
    ...(isMobile && {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.75rem',
    })
  };

  const productCardStyle = {
    background: '#2d2d2d',
    border: '1px solid #404040',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const responsiveCardStyle = {
    ...productCardStyle,
    ...(isMobile && {
      borderRadius: '12px',
    })
  };

  const productImageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'contain',
    backgroundColor: '#f5f5f5',
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
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#e5e5e5',
    marginBottom: '1rem',
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

  const actionButtonsStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  };

  const responsiveButtonsStyle = {
    ...actionButtonsStyle,
    ...(isMobile && {
      gap: '0.25rem',
    })
  };

  const ProductDetailModal = ({ product, onClose }) => {
    if (!product) return null;

    const modalStyle = {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '1.5rem' : '3rem',
      alignItems: 'start',
    };

    const imageContainerStyle = {
      position: 'relative',
    };

    const detailImageStyle = {
      width: '100%',
      height: isMobile ? '250px' : '400px',
      objectFit: 'contain',
      borderRadius: isMobile ? '8px' : '12px',
      backgroundColor: '#f5f5f5',
      padding: isMobile ? '15px' : '30px',
      border: '1px solid #404040',
    };

    const detailsStyle = {
      color: '#e5e5e5',
    };

    const featureListStyle = {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '0.5rem',
      marginTop: '1rem',
      marginBottom: '2rem',
    };

    const featureItemStyle = {
      background: '#3a3a3a',
      color: '#b0b0b0',
      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: isMobile ? '12px' : '14px',
      textAlign: 'center',
      border: '1px solid #505050',
    };

    const specsStyle = {
      background: '#3a3a3a',
      padding: isMobile ? '1rem' : '1.5rem',
      borderRadius: isMobile ? '8px' : '12px',
      marginTop: isMobile ? '1.5rem' : '2rem',
      border: '1px solid #505050',
    };

    const specItemStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: isMobile ? '0.4rem 0' : '0.5rem 0',
      borderBottom: '1px solid #505050',
      fontSize: isMobile ? '0.85rem' : '1rem',
      gap: '1rem',
    };

    return (
      <div>
        <button
          onClick={onClose}
          style={{
            background: '#2d2d2d',
            border: '1px solid #505050',
            borderRadius: '8px',
            color: '#e5e5e5',
            padding: isMobile ? '6px 12px' : '8px 16px',
            cursor: 'pointer',
            marginBottom: isMobile ? '1rem' : '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            fontSize: isMobile ? '0.9rem' : '1rem',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#3a3a3a';
            e.target.style.borderColor = '#707070';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#2d2d2d';
            e.target.style.borderColor = '#505050';
          }}
        >
          <FaArrowLeft />
          Back to Products
        </button>
        
        <div style={modalStyle}>
          <div style={imageContainerStyle}>
            <img src={product.image} alt={product.name} style={detailImageStyle} />
          </div>
          <div style={detailsStyle}>
            <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>{product.name}</h3>
            <p style={{ lineHeight: '1.6', marginBottom: isMobile ? '1.5rem' : '2rem', color: '#b0b0b0', fontSize: isMobile ? '0.9rem' : '1rem' }}>
              {product.description}
            </p>
            <h4 style={{ marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Key Features:</h4>
            <div style={featureListStyle}>
              {product.features.map((feature, index) => (
                <div key={index} style={featureItemStyle}>
                  {feature}
                </div>
              ))}
            </div>
            
            {product.specifications && (
              <div style={specsStyle}>
                <h4 style={{ marginBottom: '1rem', fontSize: isMobile ? '1.1rem' : '1.25rem' }}>Specifications:</h4>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} style={specItemStyle}>
                    <span style={{ fontWeight: '500', minWidth: isMobile ? '100px' : 'auto' }}>{key}:</span>
                    <span style={{ opacity: 0.8, textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
              </div>
            )}
            
            <button className="btn-primary" style={{ width: '100%', marginTop: isMobile ? '1.5rem' : '2rem', padding: isMobile ? '10px' : '12px', fontSize: isMobile ? '0.95rem' : '1rem' }}>
              Get Quote
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      {selectedProduct ? (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      ) : (
        <>
          <div style={responsiveCategoryStyle}>
            {productCategories.map((category) => (
              <button
                key={category.id}
                style={{
                  ...responsiveButtonStyle,
                  background: selectedCategory === category.id 
                    ? 'linear-gradient(135deg, #505050, #3a3a3a)' 
                    : '#2d2d2d',
                  color: selectedCategory === category.id ? '#e5e5e5' : '#b0b0b0',
                  border: '1px solid #505050',
                  fontWeight: selectedCategory === category.id ? '600' : '500',
                }}
                onClick={() => setSelectedCategory(category.id)}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.background = '#3a3a3a';
                    e.target.style.borderColor = '#707070';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.background = '#2d2d2d';
                    e.target.style.borderColor = '#505050';
                  }
                }}
              >
                {category.name} ({selectedCategory === category.id ? filteredProducts.length : products.filter(p => category.id === 'all' ? true : p.category === category.id).length})
              </button>
            ))}
          </div>

          <motion.div 
            style={responsiveGridStyle}
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                style={responsiveCardStyle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  borderColor: '#707070'
                }}
                onClick={() => setSelectedProduct(product)}
              >
                <img src={product.image} alt={product.name} style={responsiveImageStyle} />
                <div style={responsiveInfoStyle}>
                  <h3 style={responsiveNameStyle}>{product.name}</h3>
                  <p style={responsiveDescriptionStyle}>
                    {product.description}
                  </p>
                  <button 
                    className="btn-primary" 
                    style={{ 
                      width: '100%',
                      fontSize: isMobile ? '11px' : '14px',
                      padding: isMobile ? '8px 12px' : '10px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              color: '#b0b0b0',
            }}>
              <h3 style={{ color: '#e5e5e5', marginBottom: '1rem' }}>No products found in this category</h3>
              <p>Please select a different category to view products.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsLightbox;
