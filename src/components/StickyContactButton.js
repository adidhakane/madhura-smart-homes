import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const StickyContactButton = ({ onClick }) => {
  const containerStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 999,
  };

  const textLabelStyle = {
    background: 'rgba(45, 45, 45, 0.95)',
    color: '#e5e5e5',
    padding: '10px 16px',
    borderRadius: '25px',
    fontSize: '0.95rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.3)',
    border: '1px solid #505050',
  };

  const buttonStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #d4d4d4, #a3a3a3)',
    border: '2px solid #e5e5e5',
    color: '#2d2d2d',
    fontSize: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={textLabelStyle}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Need Help? Contact Us!
      </motion.div>
      <motion.button
        style={buttonStyle}
        onClick={onClick}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 6px 30px rgba(0, 0, 0, 0.5)',
        }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #e5e5e5, #b0b0b0)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, #d4d4d4, #a3a3a3)';
        }}
      >
        <FaEnvelope />
      </motion.button>
    </motion.div>
  );
};

export default StickyContactButton;
