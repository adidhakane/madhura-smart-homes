import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const sectionStyle = {
    padding: '100px 0',
    background: 'rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '3rem',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
  gap: '4rem',
  alignItems: 'start',
};


  const formStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '2rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    margin: '8px 0',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
  };

  const iconStyle = {
    color: '#667eea',
    fontSize: '1.5rem',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div style={contentStyle}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form style={formStyle} onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                Request a Quote
              </h3>
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={inputStyle}
                value={formData.name}
                onChange={handleChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                style={inputStyle}
                value={formData.phone}
                onChange={handleChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              />
              
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                style={textareaStyle}
                value={formData.message}
                onChange={handleChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
              />
              
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div 
            style={contactInfoStyle}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={contactItemStyle}>
              <FaPhone style={iconStyle} />
              <div>
                <h4>Call Us</h4>
                <p style={{ opacity: 0.8 }}>+91 75586 98796</p>
              </div>
            </div>
            
            <div style={contactItemStyle}>
              <FaEnvelope style={iconStyle} />
              <div>
                <h4>Email Us</h4>
                <p style={{ opacity: 0.8 }}>nikhil@madhura.net</p>
              </div>
            </div>
            
            <div style={contactItemStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <div>
                <h4>Visit Us</h4>
                <p style={{ opacity: 0.8 }}>A-202, ICC Trade Towers, Pune</p>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>Business Hours</h4>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday, 2nd & 4th Saturday: Closed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
