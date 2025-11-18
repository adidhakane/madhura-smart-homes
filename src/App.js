import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductsSection from './components/ProductsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Lightbox from './components/Lightbox';
import ProductsLightbox from './components/ProductsLightbox';
import './styles/globals.css';

function App() {
  const [showProductsModal, setShowProductsModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const enableProductLightboxes = true;

  const handleProductClick = (product) => {
    if (enableProductLightboxes) {
      if (product === 'viewAll') {
        setSelectedProduct(null);
      } else {
        setSelectedProduct(product);
      }
      setShowProductsModal(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection onProductClick={handleProductClick} />
        {/* <StatsSection /> */}
        {/* <TestimonialsSection /> */}
        <ContactForm />
      </main>

      {enableProductLightboxes && (
        <Lightbox
          isOpen={showProductsModal}
          onClose={() => {
            setShowProductsModal(false);
            setSelectedProduct(null);
          }}
          title="Complete Product Catalog"
        >
          <ProductsLightbox selectedProduct={selectedProduct} />
        </Lightbox>
      )}
    </div>
  );
}

export default App;