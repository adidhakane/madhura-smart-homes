// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
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
//     background: 'linear-gradient(135deg, #e5e5e5, #b8b8b8)',
//     border: 'none',
//     borderRadius: '8px',
//     color: '#1a1a1a',
//     fontSize: '16px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
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
//         flex-direction: column !important;
//         text-align: center !important;
//         gap: 0.5rem !important;
//       }
      
//       .info-icon {
//         align-self: center !important;
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
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'translateY(-2px)';
//                   e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
//                   e.target.style.background = 'linear-gradient(135deg, #f5f5f5, #c8c8c8)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
//                   e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
//                 }}
//               >
//                 Send Message
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
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // EmailJS credentials from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      // Show success message
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
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
        setSubmitStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Show error message
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us directly at nikhil@madhura.net'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionStyle = {
    padding: '100px 0',
    background: '#0d0d0d',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #e5e5e5, #a3a3a3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#b0b0b0',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start',
  };

  const contactInfoStyle = {
    color: '#e5e5e5',
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '2rem',
    padding: '1.5rem',
    background: 'rgba(45, 45, 45, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: '#a3a3a3',
    marginTop: '0.25rem',
    flexShrink: 0,
  };

  const formStyle = {
    background: 'rgba(45, 45, 45, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  };

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#e5e5e5',
    fontWeight: '500',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(26, 26, 26, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: '#e5e5e5',
    fontSize: '14px',
    transition: 'all 0.3s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    background: isSubmitting 
      ? 'linear-gradient(135deg, #b8b8b8, #8a8a8a)' 
      : 'linear-gradient(135deg, #e5e5e5, #b8b8b8)',
    border: 'none',
    borderRadius: '8px',
    color: '#1a1a1a',
    fontSize: '16px',
    fontWeight: '600',
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    opacity: isSubmitting ? 0.7 : 1,
  };

  const statusMessageStyle = {
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'center',
    animation: 'slideDown 0.3s ease',
  };

  const successMessageStyle = {
    ...statusMessageStyle,
    background: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    color: '#4ade80',
  };

  const errorMessageStyle = {
    ...statusMessageStyle,
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#f87171',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    background: 'rgba(45, 45, 45, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    color: '#b0b0b0',
    fontSize: '1.2rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  // Responsive styles
  const responsiveStyles = `
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      
      .contact-title {
        font-size: 2rem !important;
      }
      
      .contact-subtitle {
        font-size: 1rem !important;
        padding: 0 10px !important;
      }
      
      .contact-form {
        padding: 1.5rem !important;
      }
      
      .info-item {
        padding: 1rem !important;
        margin-bottom: 1.5rem !important;
        flex-direction: column !important;
        text-align: center !important;
        align-items: center !important;
      }
      
      .info-item > div {
        text-align: center !important;
      }
      
      .info-item h4,
      .info-item p {
        text-align: center !important;
      }
      
      .info-icon {
        align-self: center !important;
        margin-top: 0 !important;
      }
      
      .social-links {
        justify-content: center !important;
      }
    }
    
    @media (max-width: 480px) {
      .contact-section {
        padding: 60px 0 !important;
      }
      
      .contact-container {
        padding: 0 15px !important;
      }
      
      .contact-title {
        font-size: 1.8rem !important;
      }
      
      .contact-form {
        padding: 1rem !important;
      }
      
      .form-input, .form-textarea {
        padding: 10px 12px !important;
        font-size: 14px !important;
      }
      
      .form-button {
        padding: 12px !important;
        font-size: 14px !important;
      }
      
      .info-item {
        padding: 1rem !important;
        flex-direction: column !important;
        text-align: center !important;
        align-items: center !important;
        gap: 0.5rem !important;
      }
      
      .info-item > div {
        text-align: center !important;
      }
      
      .info-item h4,
      .info-item p {
        text-align: center !important;
      }
      
      .info-icon {
        align-self: center !important;
        margin-top: 0 !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <section id="contact" style={sectionStyle} className="contact-section">
        <div style={containerStyle} className="contact-container">
          <motion.h2 
            style={titleStyle}
            className="contact-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            style={subtitleStyle}
            className="contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to transform your home with smart automation? Contact us today for a consultation and personalized quote.
          </motion.p>

          <motion.div 
            style={contentStyle}
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div style={contactInfoStyle}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#e5e5e5' }}>Contact Information</h3>
              
              <div 
                style={infoItemStyle} 
                className="info-item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(58, 58, 58, 0.7)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(45, 45, 45, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                }}
              >
                <FaPhone style={iconStyle} className="info-icon" />
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#e5e5e5' }}>Phone</h4>
                  <p style={{ color: '#b0b0b0', margin: 0 }}>+91 84320 23486</p>
                </div>
              </div>

              <div 
                style={infoItemStyle} 
                className="info-item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(58, 58, 58, 0.7)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(45, 45, 45, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                }}
              >
                <FaEnvelope style={iconStyle} className="info-icon" />
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#e5e5e5' }}>Email</h4>
                  <p style={{ color: '#b0b0b0', margin: 0 }}>nikhil@madhura.net</p>
                </div>
              </div>

              <div 
                style={infoItemStyle} 
                className="info-item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(58, 58, 58, 0.7)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(45, 45, 45, 0.6)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                }}
              >
                <FaMapMarkerAlt style={iconStyle} className="info-icon" />
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#e5e5e5' }}>Address</h4>
                  <p style={{ color: '#b0b0b0', margin: 0, lineHeight: '1.5' }}>
                    A-202, ICC Trade Towers<br />
                    Senapati Bapat Road,<br />
                    Pune, Maharashtra 411016
                  </p>
                </div>
              </div>

              <div style={socialLinksStyle} className="social-links">
                <a 
                  href="https://www.linkedin.com/company/madhura-power-technologies-pvt-ltd-global/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
                    e.target.style.color = '#1a1a1a';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(45, 45, 45, 0.6)';
                    e.target.style.color = '#b0b0b0';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://www.instagram.com/madhura.ev/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
                    e.target.style.color = '#1a1a1a';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(45, 45, 45, 0.6)';
                    e.target.style.color = '#b0b0b0';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <form style={formStyle} className="contact-form" onSubmit={handleSubmit}>
              <h3 style={{ color: '#e5e5e5', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send us a Message</h3>
              
              {/* Status Messages */}
              {submitStatus.message && (
                <div style={submitStatus.type === 'success' ? successMessageStyle : errorMessageStyle}>
                  {submitStatus.message}
                </div>
              )}
              
              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  className="form-input"
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your full name"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
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
                  className="form-input"
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your email address"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
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
                  className="form-input"
                  disabled={isSubmitting}
                  placeholder="Enter your phone number"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
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
                  className="form-input"
                  required
                  disabled={isSubmitting}
                  placeholder="What's this about?"
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
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
                  className="form-textarea"
                  required
                  disabled={isSubmitting}
                  placeholder="Tell us about your smart home requirements..."
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 0 0 2px rgba(163, 163, 163, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                style={buttonStyle}
                className="form-button"
                disabled={isSubmitting}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                    e.target.style.background = 'linear-gradient(135deg, #f5f5f5, #c8c8c8)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                    e.target.style.background = 'linear-gradient(135deg, #e5e5e5, #b8b8b8)';
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
