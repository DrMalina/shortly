import React from 'react';
import { CTA } from './components/CTA';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ScreenReaderLink } from './components/ScreenReaderLink';
import { Shortener } from './components/Shortener';

const App = () => {
  return (
    <>
      <ScreenReaderLink skipTo="main" message="Skip to main content" />
      <Header />
      <main id="main">
        <HeroBanner />
        <Shortener />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
