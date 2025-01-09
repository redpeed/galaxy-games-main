// src/App.jsx

import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalaxyGames from './components/GalaxyGames';
import Games from './components/Games';
import Home from './components/Home';
import Partners from './components/Partners';
import Roadmap from './components/Roadmap';
import Tokens from './components/Tokens';
import Web3 from './components/Web3';
import ScrollToTop from './ScrollToTop';

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'));

import AOS from 'aos';
import 'aos/dist/aos.css';

// ... (AOS initialization code remains the same)

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Common components like Header can be added here if you have one */}
      <Navbar /> {/* Nav bar will appear on all pages */}
      <ScrollToTop />

      <Suspense fallback={<span>Loading...</span>}>
        {/* Define routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Web3 />
                <Games />
                <Tokens />
                <Roadmap />
                <Partners />
                <GalaxyGames />

              </>
            }
          />

          {/* Terms and Conditions Route */}
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
