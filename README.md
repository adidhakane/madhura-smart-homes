# 🏠 Madhura Smart Homes

> Transform your home into an intelligent, automated haven with cutting-edge smart home solutions.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Product Categories](#product-categories)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Madhura Smart Homes is a modern, responsive web application showcasing an extensive range of smart home automation products and solutions. Built with React and featuring smooth animations powered by Framer Motion, the website provides an immersive user experience for exploring intelligent home solutions.

**Live Demo:** [Coming Soon]

### Key Highlights

- 🎨 **Modern Design**: Clean, professional interface with smooth transitions
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance**: Optimized bundle size and lazy loading
- 🔐 **Secure**: Environment variables for sensitive data
- 📧 **Contact Integration**: EmailJS integration for seamless communication
- 🎭 **Smooth Animations**: Framer Motion for fluid transitions and interactions

## ✨ Features

### 🏡 Hero Section
- **Automatic Slideshow**: 3 rotating hero slides with smooth horizontal transitions
- **Spring Physics Animations**: Natural, bouncy slide transitions
- **Responsive Images**: High-quality hero images optimized for all devices
- **Call-to-Action Buttons**: Interactive CTAs with hover effects

### 🎯 Features Showcase
- **6 Core Features**: Complete home automation, security, lighting, mobile control, energy efficiency, and installation
- **Sliding Cards**: Smooth horizontal transitions between feature cards
- **Icon Integration**: React Icons for visual appeal
- **Benefit Tags**: Quick-glance feature benefits
- **Auto-advancing Carousel**: 8-second intervals with manual navigation

### 🛍️ Products Section
- **7 Product Categories**:
  - Security Sensors
  - Environmental Sensors
  - Smart Controls
  - Smart Lighting
  - Smart Plugs & Relays
  - Emergency Devices
  - Motion Sensors
- **Consistent Card Layout**: Uniform height/width across all devices
- **Product Details**: Name, description, and pricing information
- **Hover Effects**: Interactive cards with smooth transitions
- **Category Filtering**: Easy navigation between product categories

### 📊 Statistics Section
- **Key Metrics Display**: Products, customers, and experience stats
- **Animated Counters**: Numbers that animate on scroll
- **Professional Layout**: Clean, grid-based design

### 💬 Testimonials
- **Customer Reviews**: Authentic feedback from satisfied customers
- **Rating System**: 5-star rating display
- **Carousel Layout**: Smooth transitions between testimonials

### 📧 Contact Form
- **EmailJS Integration**: Functional contact form with email delivery
- **Form Validation**: Client-side validation for all fields
- **Contact Information**: Phone, email, and address details
- **Social Media Links**: Direct links to social platforms
- **Interactive Cards**: Hover effects and glass-morphism design

## 🛠️ Tech Stack

### Core Technologies
- **React 18.x**: Modern React with hooks and functional components
- **Framer Motion**: Advanced animation library for smooth transitions
- **React Icons**: Comprehensive icon library (Font Awesome)

### Styling
- **CSS3**: Custom styling with modern features
- **Flexbox & Grid**: Responsive layouts
- **Glass-morphism**: Modern UI design pattern with backdrop filters

### Communication
- **EmailJS**: Email service integration for contact forms
- **Environment Variables**: Secure credential management

### Build Tools
- **Create React App**: Zero-config build setup
- **Webpack**: Module bundler (via CRA)
- **Babel**: JavaScript transpiler (via CRA)

### Development Tools
- **ESLint**: Code linting
- **React DevTools**: Debugging and profiling
- **Git**: Version control

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v14.x or higher
- **npm**: v6.x or higher (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adidhakane/madhura-smart-homes.git
   cd madhura-smart-homes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Add Madhura logo**
   
   Place your logo file at:
   ```
   /public/madhura-logo.png
   ```

5. **Start the development server**
   ```bash
   npm start
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
madhura-smart-homes/
├── public/
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   ├── madhura-logo.png        # Company logo
│   ├── hero-image1.png         # Hero section images
│   ├── features-image1.png     # Feature images
│   └── jio-*.png               # Product images
├── src/
│   ├── components/
│   │   ├── Header.js           # Navigation header with logo
│   │   ├── HeroSection.js      # Hero slideshow with smooth transitions
│   │   ├── FeaturesSection.js  # Features carousel with animations
│   │   ├── ProductsSection.js  # Product showcase with categories
│   │   ├── StatsSection.js     # Statistics display
│   │   ├── TestimonialsSection.js  # Customer testimonials
│   │   ├── ContactForm.js      # Contact form with EmailJS
│   │   ├── Lightbox.js         # Modal lightbox component
│   │   ├── ProductsLightbox.js # Product details modal
│   │   └── ContactLightbox.js  # Contact modal
│   ├── data/
│   │   └── products.js         # Product data and categories
│   ├── styles/
│   │   └── globals.css         # Global styles and utilities
│   ├── App.js                  # Main application component
│   ├── App.css                 # App-specific styles
│   └── index.js                # Application entry point
├── .env                        # Environment variables (not in git)
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🔐 Environment Variables

This project uses environment variables to secure sensitive credentials. 

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service identifier | `service_xxxxxxx` |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template identifier | `template_xxxxxxx` |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public API key | `xxxxxxxxxxxxxxxxx` |

### Setup Instructions

1. **Get EmailJS Credentials**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new email service
   - Create an email template
   - Copy your Service ID, Template ID, and Public Key

2. **Configure Environment**:
   - Copy `.env.example` to `.env`
   - Replace placeholder values with your actual credentials
   - Never commit `.env` to version control

3. **Restart Development Server**:
   - After updating `.env`, restart `npm start`

## 📜 Available Scripts

### Development

```bash
# Start development server
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- Hot reloading enabled
- Lint errors shown in console

### Testing

```bash
# Run test suite
npm test
```
Launches the test runner in interactive watch mode.

### Production Build

```bash
# Create optimized production build
npm run build
```
Builds the app for production to the `build` folder:
- Minified and optimized code
- Hashed filenames for cache busting
- Ready for deployment

### Code Quality

```bash
# Eject from Create React App (one-way operation)
npm run eject
```
⚠️ **Warning**: This is irreversible. Only use if you need full control over configuration.

## 🛒 Product Categories

### 1. Security Sensors
- Door/Window Sensors
- Motion Sensors
- Smart Sirens
- Panic Buttons

### 2. Environmental Sensors
- Temperature & Humidity Sensors
- Gas Leak Detectors
- Smoke Sensors
- Water Leak Sensors

### 3. Smart Controls
- IR Remote Controllers
- Voice Control Integration
- Mobile App Control

### 4. Smart Lighting
- Smart Bulbs
- Smart Dimmers
- Color-changing Lights
- Motion-activated Lighting

### 5. Smart Plugs & Relays
- Wi-Fi Smart Plugs
- Smart Relays
- Energy Monitoring Plugs

### 6. Emergency Devices
- Panic Buttons
- Emergency Sirens
- Alert Systems

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

#### 1. **Netlify** (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### 2. **Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### 3. **GitHub Pages**
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/madhura-smart-homes"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy scripts to package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

#### 4. **Firebase Hosting**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

### Environment Variables in Production

Make sure to set environment variables in your hosting platform:
- Netlify: Site Settings → Build & Deploy → Environment
- Vercel: Settings → Environment Variables
- GitHub Pages: Use GitHub Secrets

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Keep components modular and reusable

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Madhura Power Tech**
- Website: [Coming Soon]
- Email: contact@madhurapowertech.com
- Phone: +91 XXXXXXXXXX

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon Library
- [EmailJS](https://www.emailjs.com/) - Email Service
- [Create React App](https://create-react-app.dev/) - Build Tool

## 📞 Support

For support, email contact@madhurapowertech.com or open an issue in the GitHub repository.

---

**Made with ❤️ by Madhura Power Tech**
