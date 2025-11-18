import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const StickyContactButton = ({ onClick }) => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #d4d4d4, #a3a3a3)',
    border: '2px solid #e5e5e5',
    color: '#2d2d2d',
    fontSize: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <motion.button
      style={buttonStyle}
      onClick={onClick}
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.5)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #e5e5e5, #b0b0b0)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #d4d4d4, #a3a3a3)';
      }}
    >
      <FaEnvelope />
    </motion.button>
  );
};

export default StickyContactButton;
