import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaShare, FaArrowLeft } from 'react-icons/fa';
import { productCategories, products } from '../data/products';

const ProductsLightbox = ({ selectedProduct: initialProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const containerStyle = {
    minHeight: '70vh',
  };

  const categoryStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  };

  const categoryButtonStyle = {
    padding: '8px 16px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    fontWeight: '500',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  };

  const productCardStyle = {
    background: '#2d2d2d',
    border: '1px solid #404040',
    borderRadius: '16px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const productImageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'contain',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  };

  const productInfoStyle = {
    padding: '1.5rem',
  };

  const productNameStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#e5e5e5',
    marginBottom: '1rem',
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

  const actionButtonsStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  };

  const ProductDetailModal = ({ product, onClose }) => {
    if (!product) return null;

    const modalStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start',
    };

    const imageContainerStyle = {
      position: 'relative',
    };

    const detailImageStyle = {
      width: '100%',
      height: '400px',
      objectFit: 'contain',
      borderRadius: '12px',
      backgroundColor: '#f5f5f5',
      padding: '30px',
      border: '1px solid #404040',
    };

    const detailsStyle = {
      color: '#e5e5e5',
    };

    const featureListStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '0.5rem',
      marginTop: '1rem',
      marginBottom: '2rem',
    };

    const featureItemStyle = {
      background: '#3a3a3a',
      color: '#b0b0b0',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '14px',
      textAlign: 'center',
      border: '1px solid #505050',
    };

    const specsStyle = {
      background: '#3a3a3a',
      padding: '1.5rem',
      borderRadius: '12px',
      marginTop: '2rem',
      border: '1px solid #505050',
    };

    const specItemStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem 0',
      borderBottom: '1px solid #505050',
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
            padding: '8px 16px',
            cursor: 'pointer',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
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
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{product.name}</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '2rem', color: '#b0b0b0' }}>
              {product.description}
            </p>
            <h4 style={{ marginBottom: '1rem' }}>Key Features:</h4>
            <div style={featureListStyle}>
              {product.features.map((feature, index) => (
                <div key={index} style={featureItemStyle}>
                  {feature}
                </div>
              ))}
            </div>
            
            {product.specifications && (
              <div style={specsStyle}>
                <h4 style={{ marginBottom: '1rem' }}>Specifications:</h4>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} style={specItemStyle}>
                    <span style={{ fontWeight: '500' }}>{key}:</span>
                    <span style={{ opacity: 0.8 }}>{value}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button className="btn-primary" style={{ flex: 1 }}>
                <FaShoppingCart style={{ marginRight: '0.5rem' }} />
                Get Quote
              </button>
              <button style={{
                background: '#2d2d2d',
                border: '1px solid #505050',
                borderRadius: '8px',
                color: '#e5e5e5',
                padding: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#3a3a3a';
                e.target.style.borderColor = '#707070';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#2d2d2d';
                e.target.style.borderColor = '#505050';
              }}>
                <FaHeart />
              </button>
              <button style={{
                background: '#2d2d2d',
                border: '1px solid #505050',
                borderRadius: '8px',
                color: '#e5e5e5',
                padding: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#3a3a3a';
                e.target.style.borderColor = '#707070';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#2d2d2d';
                e.target.style.borderColor = '#505050';
              }}>
                <FaShare />
              </button>
            </div>
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
          <div style={categoryStyle}>
            {productCategories.map((category) => (
              <button
                key={category.id}
                style={{
                  ...categoryButtonStyle,
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
            style={gridStyle}
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                style={productCardStyle}
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
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <div style={productInfoStyle}>
                  <h3 style={productNameStyle}>{product.name}</h3>
                  <p style={descriptionStyle}>
                    {product.description}
                  </p>
                  <div style={actionButtonsStyle}>
                    <button 
                      className="btn-primary" 
                      style={{ 
                        flex: 1, 
                        fontSize: '14px', 
                        padding: '10px 16px',
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
                    <button 
                      style={{
                        background: '#2d2d2d',
                        border: '1px solid #505050',
                        borderRadius: '8px',
                        color: '#e5e5e5',
                        padding: '10px 16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Get quote functionality
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
                      <FaShoppingCart />
                    </button>
                  </div>
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
