import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';

const ContactLightbox = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    preferredTime: ''
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
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const tabs = [
    { id: 'contact', name: 'Contact Form' },
    { id: 'info', name: 'Contact Info' },
    { id: 'locations', name: 'Our Locations' }
  ];

  const services = [
    'Complete Home Automation',
    'Smart Lighting Installation',
    'Security System Setup',
    'Climate Control',
    'Entertainment System',
    'Consultation Only'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000 - ₹5,00,000',
    'Above ₹5,00,000'
  ];

  const locations = [
    {
      name: 'Mumbai Headquarters',
      address: '123 Smart Home Plaza, Bandra West, Mumbai 400050',
      phone: '+91 98765 43210',
      email: 'mumbai@madhurasmarthomes.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      name: 'Pune Branch',
      address: '456 Tech Park, Hinjewadi, Pune 411057',
      phone: '+91 98765 43211',
      email: 'pune@madhurasmarthomes.com',
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM'
    },
    {
      name: 'Delhi Branch',
      address: '789 Cyber Hub, Gurgaon, Delhi NCR 122002',
      phone: '+91 98765 43212',
      email: 'delhi@madhurasmarthomes.com',
      hours: 'Mon-Sat: 9:30 AM - 6:30 PM'
    }
  ];

  const containerStyle = {
    minHeight: '70vh',
  };

  const tabsStyle = {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const tabButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    padding: '1rem 1.5rem',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    fontWeight: '500',
  };

  const formStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
    gridColumn: '1 / -1',
  };

  const contactInfoStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  };

  const infoCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '2rem',
    textAlign: 'center',
  };

  const iconStyle = {
    fontSize: '2rem',
    color: '#667eea',
    marginBottom: '1rem',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  };

  const socialIconStyle = {
    fontSize: '1.5rem',
    color: 'white',
    padding: '12px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const locationsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  };

  const locationCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: '2rem',
  };

  const renderContactForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'white' }}>
        Get a Free Consultation
      </h3>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            style={inputStyle}
            value={formData.name}
            onChange={handleChange}
            required
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            style={inputStyle}
            value={formData.email}
            onChange={handleChange}
            required
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            style={inputStyle}
            value={formData.phone}
            onChange={handleChange}
            required
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
            Service Required
          </label>
          <select
            name="service"
            style={selectStyle}
            value={formData.service}
            onChange={handleChange}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service} style={{ background: '#1a1a2e', color: 'white' }}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
            Budget Range
          </label>
          <select
            name="budget"
            style={selectStyle}
            value={formData.budget}
            onChange={handleChange}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range, index) => (
              <option key={index} value={range} style={{ background: '#1a1a2e', color: 'white' }}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
            Preferred Contact Time
          </label>
          <select
            name="preferredTime"
            style={selectStyle}
            value={formData.preferredTime}
            onChange={handleChange}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          >
            <option value="">Select preferred time</option>
            <option value="morning" style={{ background: '#1a1a2e', color: 'white' }}>Morning (9 AM - 12 PM)</option>
            <option value="afternoon" style={{ background: '#1a1a2e', color: 'white' }}>Afternoon (12 PM - 5 PM)</option>
            <option value="evening" style={{ background: '#1a1a2e', color: 'white' }}>Evening (5 PM - 8 PM)</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>
            Project Details
          </label>
          <textarea
            name="message"
            style={textareaStyle}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your smart home requirements..."
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          />
        </div>

        <button type="submit" className="btn-primary" style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
          Send Inquiry
        </button>
      </form>
    </motion.div>
  );

  const renderContactInfo = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div style={contactInfoStyle}>
        <div style={infoCardStyle}>
          <FaPhone style={iconStyle} />
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Call Us</h4>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>+91 98765 43210</p>
                    <p style={{ opacity: 0.8, marginBottom: '1rem' }}>+91 98765 43211</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>24/7 Emergency Support</p>
        </div>

        <div style={infoCardStyle}>
          <FaEnvelope style={iconStyle} />
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Email Us</h4>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>info@madhurasmarthomes.com</p>
          <p style={{ opacity: 0.8, marginBottom: '1rem' }}>support@madhurasmarthomes.com</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>Response within 2 hours</p>
        </div>

        <div style={infoCardStyle}>
          <FaWhatsapp style={iconStyle} />
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>WhatsApp</h4>
          <p style={{ opacity: 0.8, marginBottom: '1rem' }}>+91 98765 43210</p>
          <p style={{ fontSize: '14px', opacity: 0.7 }}>Quick support & quotes</p>
        </div>

        <div style={infoCardStyle}>
          <FaClock style={iconStyle} />
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Business Hours</h4>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Mon - Fri: 9:00 AM - 7:00 PM</p>
          <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Saturday: 10:00 AM - 5:00 PM</p>
          <p style={{ opacity: 0.8 }}>Sunday: Closed</p>
        </div>
      </div>

      <div style={socialLinksStyle}>
        <FaFacebook 
          style={socialIconStyle}
          onMouseEnter={(e) => e.target.style.background = '#1877f2'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
        />
        <FaInstagram 
          style={socialIconStyle}
          onMouseEnter={(e) => e.target.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
        />
        <FaLinkedin 
          style={socialIconStyle}
          onMouseEnter={(e) => e.target.style.background = '#0077b5'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
        />
        <FaWhatsapp 
          style={socialIconStyle}
          onMouseEnter={(e) => e.target.style.background = '#25d366'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
        />
      </div>
    </motion.div>
  );

  const renderLocations = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div style={locationsGridStyle}>
        {locations.map((location, index) => (
          <div key={index} style={locationCardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <FaMapMarkerAlt style={{ color: '#667eea', marginRight: '0.5rem' }} />
              <h4 style={{ color: 'white', margin: 0 }}>{location.name}</h4>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1rem', lineHeight: '1.5' }}>
              {location.address}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <FaPhone style={{ color: '#667eea', marginRight: '0.5rem', fontSize: '14px' }} />
              <span style={{ opacity: 0.8 }}>{location.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <FaEnvelope style={{ color: '#667eea', marginRight: '0.5rem', fontSize: '14px' }} />
              <span style={{ opacity: 0.8 }}>{location.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaClock style={{ color: '#667eea', marginRight: '0.5rem', fontSize: '14px' }} />
              <span style={{ opacity: 0.8 }}>{location.hours}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div style={containerStyle}>
      <div style={tabsStyle}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            style={{
              ...tabButtonStyle,
              borderBottomColor: activeTab === tab.id ? '#667eea' : 'transparent',
              opacity: activeTab === tab.id ? 1 : 0.7,
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {activeTab === 'contact' && renderContactForm()}
      {activeTab === 'info' && renderContactInfo()}
      {activeTab === 'locations' && renderLocations()}
    </div>
  );
};

export default ContactLightbox;