// // import React from 'react';
// // import Header from './components/Header';
// // import HeroSection from './components/HeroSection';
// // import FeaturesSection from './components/FeaturesSection';
// // import ProductsSlider from './components/ProductsSlider';
// // import ContactForm from './components/ContactForm';
// // import './styles/globals.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Header />
// //       <main>
// //         <HeroSection />
// //         <FeaturesSection />
// //         <ProductsSlider />
// //         <ContactForm />
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;



// //Update src/App.js to include new sections
// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import ProductsSlider from './components/ProductsSlider';
// import StatsSection from './components/StatsSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import ContactForm from './components/ContactForm';
// import './styles/globals.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <HeroSection />
//         <FeaturesSection />
//         <ProductsSlider />
//         <StatsSection />
//         <TestimonialsSection />
//         <ContactForm />
//       </main>
//     </div>
//   );
// }

// export default App;



// Updated version of src/App.js with all sections included
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

  const handleProductClick = (product) => {
    if (product === 'viewAll' || product) {
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
        <StatsSection />
        <TestimonialsSection />
        <ContactForm />
      </main>

      <Lightbox
        isOpen={showProductsModal}
        onClose={() => setShowProductsModal(false)}
        title="Complete Product Catalog"
      >
        <ProductsLightbox />
      </Lightbox>
    </div>
  );
}

export default App;