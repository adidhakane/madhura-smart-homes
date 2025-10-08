//updated products lightbox component
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaShoppingCart, FaHeart, FaShare, FaArrowLeft } from 'react-icons/fa';
import { productCategories, products } from '../data/products';

const ProductsLightbox = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '0.5rem',
  };

  const priceStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const currentPriceStyle = {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#667eea',
  };

  const originalPriceStyle = {
    fontSize: '1rem',
    textDecoration: 'line-through',
    opacity: '0.6',
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const actionButtonsStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        style={{
          color: i < Math.floor(rating) ? '#FFD700' : 'rgba(255, 255, 255, 0.3)',
          fontSize: '14px',
        }}
      />
    ));
  };

  const calculateDiscount = (original, current) => {
    const originalPrice = parseInt(original.replace(/[^\d]/g, ''));
    const currentPrice = parseInt(current.replace(/[^\d]/g, ''));
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
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
      objectFit: 'cover',
      borderRadius: '12px',
    };

    const detailsStyle = {
      color: 'white',
    };

    const featureListStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '0.5rem',
      marginTop: '1rem',
      marginBottom: '2rem',
    };

    const featureItemStyle = {
      background: 'rgba(102, 126, 234, 0.2)',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '14px',
      textAlign: 'center',
    };

    const specsStyle = {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '1.5rem',
      borderRadius: '12px',
      marginTop: '2rem',
    };

    const specItemStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.5rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    };

    return (
      <div>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            color: 'white',
            padding: '8px 16px',
            cursor: 'pointer',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
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
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h3>
            <div style={ratingStyle}>
              {renderStars(product.rating)}
              <span style={{ opacity: 0.8 }}>({product.reviews} reviews)</span>
            </div>
            <div style={priceStyle}>
              <span style={currentPriceStyle}>{product.price}</span>
              <span style={originalPriceStyle}>{product.originalPrice}</span>
              <span style={{ 
                background: '#4CAF50', 
                color: 'white', 
                padding: '2px 8px', 
                borderRadius: '4px', 
                fontSize: '12px' 
              }}>
                SAVE {calculateDiscount(product.originalPrice, product.price)}%
              </span>
            </div>
            <p style={{ lineHeight: '1.6', marginBottom: '2rem', opacity: 0.9 }}>
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
                Add to Cart
              </button>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                color: 'white',
                padding: '12px',
                cursor: 'pointer',
              }}>
                <FaHeart />
              </button>
              <button style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                color: 'white',
                padding: '12px',
                cursor: 'pointer',
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
                  background: 'rgba(255, 255, 255, 0.15)'
                }}
                onClick={() => setSelectedProduct(product)}
              >
                <div style={{ position: 'relative' }}>
                  <img src={product.image} alt={product.name} style={productImageStyle} />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: '#4CAF50',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}>
                    {calculateDiscount(product.originalPrice, product.price)}% OFF
                  </div>
                </div>
                <div style={productInfoStyle}>
                  <h3 style={productNameStyle}>{product.name}</h3>
                  <div style={ratingStyle}>
                    {renderStars(product.rating)}
                    <span style={{ fontSize: '14px', opacity: 0.8 }}>({product.reviews})</span>
                  </div>
                  <div style={priceStyle}>
                    <span style={currentPriceStyle}>{product.price}</span>
                    <span style={originalPriceStyle}>{product.originalPrice}</span>
                  </div>
                  <p style={{ 
                    fontSize: '14px', 
                    opacity: 0.8, 
                    marginBottom: '1rem',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
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
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px',
                        color: 'white',
                        padding: '10px 16px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart functionality
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

          {filteredProducts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              opacity: 0.7,
            }}>
              <h3>No products found in this category</h3>
              <p>Please select a different category to view products.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsLightbox;