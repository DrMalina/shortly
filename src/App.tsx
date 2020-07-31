import React from 'react';
import { Features } from './components/Features';
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
      </main>
    </>
  );
};

export default App;
