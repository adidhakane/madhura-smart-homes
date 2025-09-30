import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductsSlider from './components/ProductsSlider';
import ContactForm from './components/ContactForm';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSlider />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
