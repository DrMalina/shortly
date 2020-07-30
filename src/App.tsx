import React from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ScreenReaderLink } from './components/ScreenReaderLink';

const App = () => {
  return (
    <>
      <ScreenReaderLink skipTo="main" message="Skip to main content" />
      <Header />
      <main id="main">
        <HeroBanner />
      </main>
    </>
  );
};

export default App;
