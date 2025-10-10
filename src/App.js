// // Updated version of src/App.js with all sections included (lighbox`s for products)
// import React, { useState } from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import ProductsSection from './components/ProductsSection';
// import StatsSection from './components/StatsSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import ContactForm from './components/ContactForm';
// import Lightbox from './components/Lightbox';
// import ProductsLightbox from './components/ProductsLightbox';
// import './styles/globals.css';

// function App() {
//   const [showProductsModal, setShowProductsModal] = useState(false);

//   const handleProductClick = (product) => {
//     if (product === 'viewAll' || product) {
//       setShowProductsModal(true);
//     }
//   };

//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <HeroSection />
//         <FeaturesSection />
//         <ProductsSection onProductClick={handleProductClick} />
//         {/* <StatsSection /> */}
//         <TestimonialsSection />
//         <ContactForm />
//       </main>

//       <Lightbox
//         isOpen={showProductsModal}
//         onClose={() => setShowProductsModal(false)}
//         title="Complete Product Catalog"
//       >
//         <ProductsLightbox />
//       </Lightbox>
//     </div>
//   );
// }

// export default App;

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
  
  // Feature flag to control product lightbox behavior
  // Set to true to enable product lightboxes, false to disable
  // TO ENABLE PRODUCT LIGHTBOXES: Change this value to true
  const enableProductLightboxes = false;

  const handleProductClick = (product) => {
    if (enableProductLightboxes && (product === 'viewAll' || product)) {
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
        <TestimonialsSection />
        <ContactForm />
      </main>

      {enableProductLightboxes && (
        <Lightbox
          isOpen={showProductsModal}
          onClose={() => setShowProductsModal(false)}
          title="Complete Product Catalog"
        >
          <ProductsLightbox />
        </Lightbox>
      )}
    </div>
  );
}

export default App;