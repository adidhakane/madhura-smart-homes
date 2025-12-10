// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//   // EmailJS credentials from environment variables
//   const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
//   const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
//   const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // Clear status message when user starts typing
//     if (submitStatus.message) {
//       setSubmitStatus({ type: '', message: '' });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     try {
//       // Send email using EmailJS
//       const result = await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         {
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         EMAILJS_PUBLIC_KEY
//       );

//       console.log('Email sent successfully:', result);
      
//       // Show success message
//       setSubmitStatus({
//         type: 'success',
//         message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
//       });

//       // Clear form
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//       });

//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setSubmitStatus({ type: '', message: '' });
//       }, 5000);

//     } catch (error) {
//       console.error('Email sending failed:', error);
      
//       // Show error message
//       setSubmitStatus({
//         type: 'error',
//         message: 'Oops! Something went wrong. Please try again or contact us directly at nikhil@madhura.net'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const sectionStyle = {
//     padding: '100px 0',
//     background: '#0d0d0d',
//   };

//   const containerStyle = {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//   };

//   const titleStyle = {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     fontWeight: '700',
//     marginBottom: '1rem',
//     background: 'linear-gradient(135deg, #e5e5e5, #a3a3a3)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };

//   const subtitleStyle = {
//     textAlign: 'center',
//     fontSize: '1.1rem',
//     color: '#b0b0b0',
//     marginBottom: '3rem',
//     maxWidth: '600px',
//     margin: '0 auto 3rem auto',
//   };

//   const contentStyle = {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '4rem',
//     alignItems: 'start',
//   };

//   const contactInfoStyle = {
//     color: '#e5e5e5',
//   };

//   const infoItemStyle = {
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '1rem',
//     marginBottom: '2rem',
//     padding: '1.5rem',
//     background: 'rgba(45, 45, 45, 0.6)',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '12px',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
//   };

//   const iconStyle = {
//     fontSize: '1.5rem',
//     color: '#a3a3a3',
//     marginTop: '0.25rem',
//     flexShrink: 0,
//   };

//   const formStyle = {
//     background: 'rgba(45, 45, 45, 0.6)',
//     backdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '16px',
//     padding: '2rem',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
//   };

//   const formGroupStyle = {
//     marginBottom: '1.5rem',
//   };

//   const labelStyle = {
//     display: 'block',
//     marginBottom: '0.5rem',
//     color: '#e5e5e5',
//     fontWeight: '500',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '12px 16px',
//     background: 'rgba(26, 26, 26, 0.8)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '8px',
//     color: '#e5e5e5',
//     fontSize: '14px',
//     transition: 'all 0.3s ease',
//   };

//   const textareaStyle = {
//     ...inputStyle,
//     minHeight: '120px',
//     resize: 'vertical',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '15px',
//     background: isSubmitting 
//       ? 'linear-gradient(135deg, #b8b8b8, #8a8a8a)' 
//       : 'linear-gradient(135deg, #e5e5e5, #b8b8b8)',
//     border: 'none',
//     borderRadius: '8px',
//     color: '#1a1a1a',
//     fontSize: '16px',
//     fontWeight: '600',
//     cursor: isSubmitting ? 'not-allowed' : 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
//     opacity: isSubmitting ? 0.7 : 1,
//   };

//   const statusMessageStyle = {
//     padding: '12px 16px',
//     borderRadius: '8px',
//     marginBottom: '1.5rem',
//     fontSize: '14px',
//     fontWeight: '500',
//     textAlign: 'center',
//     animation: 'slideDown 0.3s ease',
//   };

//   const successMessageStyle = {
//     ...statusMessageStyle,
//     background: 'rgba(34, 197, 94, 0.1)',
//     border: '1px solid rgba(34, 197, 94, 0.3)',
//     color: '#4ade80',
//   };

//   const errorMessageStyle = {
//     ...statusMessageStyle,
//     background: 'rgba(239, 68, 68, 0.1)',
//     border: '1px solid rgba(239, 68, 68, 0.3)',
//     color: '#f87171',
//   };

//   const socialLinksStyle = {
//     display: 'flex',
//     gap: '1rem',
//     marginTop: '2rem',
//   };

//   const socialLinkStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50px',
//     height: '50px',
//     background: 'rgba(45, 45, 45, 0.6)',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//     borderRadius: '50%',
//     color: '#b0b0b0',
//     fontSize: '1.2rem',
//     textDecoration: 'none',
//     transition: 'all 0.3s ease',
//   };

//   // Responsive styles
//   const responsiveStyles = `
//     @keyframes slideDown {
//       from {
//         opacity: 0;
//         transform: translateY(-10px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     @media (max-width: 768px) {
//       .contact-content {
//         grid-template-columns: 1fr !important;
//         gap: 2rem !important;
//       }
      
//       .contact-title {
//         font-size: 2rem !important;
//       }
      
//       .contact-subtitle {
//         font-size: 1rem !important;
//         padding: 0 10px !important;
//       }
      
//       .contact-form {
//         padding: 1.5rem !important;
//       }
      
//       .info-item {
//         padding: 1rem !important;
//         margin-bottom: 1.5rem !important;
//         flex-direction: column !important;
//         text-align: center !important;
//         align-items: center !important;
//       }
      
//       .info-item > div {
//         text-align: center !important;
//       }
      
//       .info-item h4,
//       .info-item p {
//         text-align: center !important;
//       }
      
//       .info-icon {
//         align-self: center !important;
//         margin-top: 0 !important;
//       }
      
//       .social-links {
//         justify-content: center !important;
//       }
//     }
    
//     @media (max-width: 480px) {
//       .contact-section {
//         padding: 60px 0 !important;
//       }
      
//       .contact-container {
//         padding: 0 15px !important;
//       }
      
//       .contact-title {
//         font-size: 1.8rem !important;
//       }
      
//       .contact-form {
//         padding: 1rem !important;
//       }
      
//       .form-input, .form-textarea {
//         padding: 10px 12px !important;
//         font-size: 14px !important;
//       }
      
//       .form-button {
//         padding: 12px !important;
//         font-size: 14px !important;
//       }
      
//       .info-item {
//         padding: 1rem !important;
//         flex-direction: column !important;
//         text-align: center !important;
//         align-items: center !important;
//         gap: 0.5rem !important;
//       }
      
//       .info-item > div {
//         text-align: center !important;
//       }
      
//       .info-item h4,
//       .info-item p {
//         text-align: center !important;
//       }
      
//       .info-icon {
//         align-self: center !important;
//         margin-top: 0 !important;
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{responsiveStyles}</style>
//       <section id="contact" style={sectionStyle} className="contact-section">
//         <div style={containerStyle} className="contact-container">
//           <motion.h2 
//             style={titleStyle}
//             className="contact-title"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Get In Touch
//           </motion.h2>
          
//           <motion.p 
//             style={subtitleStyle}
//             className="contact-subtitle"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Ready to transform your home with smart automation? Contact us today for a consultation and personalized quote.
//           </motion.p>

//           <motion.div 
//             style={contentStyle}
//             className="contact-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <div style={contactInfoStyle}>
//               <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#e5e5e5' }}>Contact Information</h3>
              
//               <div 
//                 style={infoItemStyle} 
//                 className="info-item"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'rgba(58, 58, 58, 0.7)';
//                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'rgba(45, 45, 45, 0.6)';
//                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                   e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
//                 }}
//               >
//                 <FaPhone style={iconStyle} className="info-icon" />
//                 <div>
//                   <h4 style={{ marginBottom: '0.5rem', color: '#e5e5e5' }}>Phone</h4>
//                   <p style={{ color: '#b0b0b0', margin: 0 }}>+91 75586 98796</p>
//                 </div>
//               </div>

//               <div 
//                 style={infoItemStyle} 
//                 className="info-item"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'rgba(58, 58, 58, 0.7)';
//                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'rgba(45, 45, 45, 0.6)';
//                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                   e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
//                 }}
//               >
//                 <FaEnvelope style={iconStyle} className="info-icon" />
//                 <div>
//                   <h4 style={{ marginBottom: '0.5rem', color: '#e5e5e5' }}>Email</h4>
//                   <p style={{ color: '#b0b0b0', margin: 0 }}>nikhil@madhura.net</p>
//                 </div>
//               </div>

//               <div 
//                 style={infoItemStyle} 
//                 className="info-item"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'rgba(58, 58, 58, 0.7)';
//                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'rgba(45, 45, 45, 0.6)';
//                   e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                   e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
//                 }}
//               >
//                 <FaMapMarkerAlt style={iconStyle} className="info-icon" />
//                 <div>
//                   <h4 style={{ marginBottom: '0.5rem', color: '#e5e5e5' }}>Address</h4>
//                   <p style={{ color: '#b0b0b0', margin: 0, lineHeight: '1.5' }}>
//                     A-202, ICC Trade Towers<br />
//                     Senapati Bapat Road,<br />
//                     Pune, Maharashtra 411016
//                   </p>
//                 </div>
//               </div>

//               <div style={socialLinksStyle} className="social-links">
//                 <a 
//                   href="https://www.linkedin.com/company/madhura-power-technologies-pvt-ltd-global/" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={socialLinkStyle}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
//                     e.target.style.color = '#1a1a1a';
//                     e.target.style.transform = 'translateY(-3px)';
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'rgba(45, 45, 45, 0.6)';
//                     e.target.style.color = '#b0b0b0';
//                     e.target.style.transform = 'translateY(0)';
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                   }}
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a 
//                   href="https://www.instagram.com/madhura.ev/" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={socialLinkStyle}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
//                     e.target.style.color = '#1a1a1a';
//                     e.target.style.transform = 'translateY(-3px)';
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'rgba(45, 45, 45, 0.6)';
//                     e.target.style.color = '#b0b0b0';
//                     e.target.style.transform = 'translateY(0)';
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                   }}
//                 >
//                   <FaInstagram />
//                 </a>
//               </div>
//             </div>

//             <form style={formStyle} className="contact-form" onSubmit={handleSubmit}>
//               <h3 style={{ color: '#e5e5e5', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send us a Message</h3>
              
//               {/* Status Messages */}
//               {submitStatus.message && (
//                 <div style={submitStatus.type === 'success' ? successMessageStyle : errorMessageStyle}>
//                   {submitStatus.message}
//                 </div>
//               )}
              
//               <div style={formGroupStyle}>
//                 <label style={labelStyle} htmlFor="name">Full Name *</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   style={inputStyle}
//                   className="form-input"
//                   required
//                   disabled={isSubmitting}
//                   placeholder="Enter your full name"
//                   onFocus={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>

//               <div style={formGroupStyle}>
//                 <label style={labelStyle} htmlFor="email">Email Address *</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   style={inputStyle}
//                   className="form-input"
//                   required
//                   disabled={isSubmitting}
//                   placeholder="Enter your email address"
//                   onFocus={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>

//               <div style={formGroupStyle}>
//                 <label style={labelStyle} htmlFor="phone">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   style={inputStyle}
//                   className="form-input"
//                   disabled={isSubmitting}
//                   placeholder="Enter your phone number"
//                   onFocus={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>

//               <div style={formGroupStyle}>
//                 <label style={labelStyle} htmlFor="subject">Subject *</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   style={inputStyle}
//                   className="form-input"
//                   required
//                   disabled={isSubmitting}
//                   placeholder="What's this about?"
//                   onFocus={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>

//               <div style={formGroupStyle}>
//                 <label style={labelStyle} htmlFor="message">Message *</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   style={textareaStyle}
//                   className="form-textarea"
//                   required
//                   disabled={isSubmitting}
//                   placeholder="Tell us about your smart home requirements..."
//                   onFocus={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
//                     e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
//                     e.target.style.boxShadow = 'none';
//                   }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 style={buttonStyle}
//                 className="form-button"
//                 disabled={isSubmitting}
//                 onMouseEnter={(e) => {
//                   if (!isSubmitting) {
//                     e.target.style.transform = 'translateY(-2px)';
//                     e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
//                     e.target.style.background = 'linear-gradient(135deg, #f5f5f5, #c8c8c8)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSubmitting) {
//                     e.target.style.transform = 'translateY(0)';
//                     e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
//                     e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
//                   }
//                 }}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactForm;








import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  // EmailJS Configuration
  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (formStatus.error) {
      setFormStatus({ loading: false, success: false, error: false, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fill in all required fields'
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'nikhil@madhura.net', // Your email
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Message sent successfully! We\'ll get back to you soon.'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ loading: false, success: false, error: false, message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    }
  };

  const sectionStyle = {
    padding: 'clamp(60px, 10vw, 100px) 0',
    background: '#1a1a1a',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.02em',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#b0b0b0',
    marginBottom: 'clamp(3rem, 6vw, 4rem)',
    maxWidth: '700px',
    margin: '0 auto 3rem auto',
    lineHeight: '1.6',
    padding: '0 20px',
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(2rem, 5vw, 4rem)',
    alignItems: 'start',
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: 'clamp(1rem, 3vw, 1.5rem)',
    background: 'rgba(45, 45, 45, 0.5)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const iconStyle = {
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    color: '#ffffff',
    marginTop: '0.25rem',
    flexShrink: 0,
  };

  const formStyle = {
    background: 'rgba(45, 45, 45, 0.5)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
  };

  const formGroupStyle = {
    marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#e5e5e5',
    fontWeight: '500',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
  };

  const inputStyle = {
    width: '100%',
    padding: 'clamp(12px, 3vw, 14px) clamp(14px, 3vw, 16px)',
    background: 'rgba(26, 26, 26, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: '#e5e5e5',
    fontSize: 'clamp(14px, 2vw, 16px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    minHeight: '48px',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: 'clamp(120px, 20vw, 150px)',
    resize: 'vertical',
    fontFamily: 'inherit',
  };

  const buttonStyle = {
    width: '100%',
    padding: 'clamp(14px, 3vw, 16px)',
    background: formStatus.loading 
      ? 'rgba(255, 255, 255, 0.5)' 
      : 'linear-gradient(135deg, #ffffff, #d4d4d4)',
    border: 'none',
    borderRadius: '12px',
    color: '#1a1a1a',
    fontSize: 'clamp(15px, 2vw, 16px)',
    fontWeight: '600',
    cursor: formStatus.loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    minHeight: '52px',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'clamp(45px, 8vw, 52px)',
    height: 'clamp(45px, 8vw, 52px)',
    background: 'rgba(45, 45, 45, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    color: '#e5e5e5',
    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const statusMessageStyle = {
    padding: '1rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.95rem',
    fontWeight: '500',
  };

  const successMessageStyle = {
    ...statusMessageStyle,
    background: 'rgba(34, 197, 94, 0.15)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    color: '#22c55e',
  };

  const errorMessageStyle = {
    ...statusMessageStyle,
    background: 'rgba(239, 68, 68, 0.15)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#ef4444',
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={titleStyle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          style={subtitleStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          Ready to transform your home with smart automation? Contact us today for a consultation and personalized quote.
        </motion.p>

        <motion.div 
          style={contentStyle}
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Contact Information */}
          <div>
            <motion.h3 
              style={{ 
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', 
                marginBottom: '2rem', 
                color: '#ffffff',
                fontWeight: '600'
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Contact Information
            </motion.h3>
            
            <motion.div 
              style={infoItemStyle}
              whileHover={{ 
                background: 'rgba(58, 58, 58, 0.6)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                x: 5
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <FaPhone style={iconStyle} />
              <div>
                <h4 style={{ marginBottom: '0.5rem', color: '#ffffff', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>Phone</h4>
                <a 
                  href="tel:+917558698796"
                  style={{ 
                    color: '#b0b0b0', 
                    textDecoration: 'none',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                  }}
                >
                  +91 75586 98796
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={infoItemStyle}
              whileHover={{ 
                background: 'rgba(58, 58, 58, 0.6)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                x: 5
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <FaEnvelope style={iconStyle} />
              <div>
                <h4 style={{ marginBottom: '0.5rem', color: '#ffffff', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>Email</h4>
                <a 
                  href="mailto:nikhil@madhura.net"
                  style={{ 
                    color: '#b0b0b0', 
                    textDecoration: 'none',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    wordBreak: 'break-word'
                  }}
                >
                  nikhil@madhura.net
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={infoItemStyle}
              whileHover={{ 
                background: 'rgba(58, 58, 58, 0.6)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                x: 5
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <FaMapMarkerAlt style={iconStyle} />
              <div>
                <h4 style={{ marginBottom: '0.5rem', color: '#ffffff', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>Address</h4>
                <p style={{ color: '#b0b0b0', margin: 0, lineHeight: '1.6', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                  A-202, ICC Trade Towers<br />
                  Senapati Bapat Road,<br />
                  Pune, Maharashtra 411016
                </p>
              </div>
            </motion.div>

            <motion.div 
              style={socialLinksStyle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="https://www.linkedin.com/company/madhura-power-technologies-pvt-ltd-global/" 
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
                whileHover={{ 
                  background: 'linear-gradient(135deg, #ffffff, #d4d4d4)',
                  color: '#1a1a1a',
                  y: -3,
                  borderColor: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/madhura.ev/" 
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle}
                whileHover={{ 
                  background: 'linear-gradient(135deg, #ffffff, #d4d4d4)',
                  color: '#1a1a1a',
                  y: -3,
                  borderColor: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form 
            style={formStyle}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 style={{ 
              color: '#ffffff', 
              marginBottom: '1.5rem', 
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: '600'
            }}>
              Send us a Message
            </h3>

            {/* Status Messages */}
            <AnimatePresence>
              {formStatus.success && (
                <motion.div
                  style={successMessageStyle}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FaCheckCircle />
                  {formStatus.message}
                </motion.div>
              )}
              
              {formStatus.error && (
                <motion.div
                  style={errorMessageStyle}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FaExclamationCircle />
                  {formStatus.message}
                </motion.div>
              )}
            </AnimatePresence>
            
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
                placeholder="Enter your full name"
                disabled={formStatus.loading}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
                placeholder="Enter your email address"
                disabled={formStatus.loading}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Enter your phone number"
                disabled={formStatus.loading}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={inputStyle}
                required
                placeholder="What's this about?"
                disabled={formStatus.loading}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={textareaStyle}
                required
                placeholder="Tell us about your smart home requirements..."
                disabled={formStatus.loading}
              />
            </div>

            <motion.button
              type="submit"
              style={buttonStyle}
              disabled={formStatus.loading}
              whileHover={!formStatus.loading ? { 
                scale: 1.02,
                boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)'
              } : {}}
              whileTap={!formStatus.loading ? { scale: 0.98 } : {}}
            >
              {formStatus.loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #1a1a1a',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                    }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <style jsx>{`
        input:focus,
        textarea:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(26, 26, 26, 0.8);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        input::placeholder,
        textarea::placeholder {
          color: #6b7280;
          opacity: 1;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }

        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;