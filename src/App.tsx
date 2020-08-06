import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CTA } from './components/CTA';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ScreenReaderLink } from './components/ScreenReaderLink';
import { Shortener } from './components/Shortener';
import { theme } from './theme/mainTheme';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScreenReaderLink skipTo="main" message="Skip to main content" />
      <Header />
      <main id="main">
        <HeroBanner />
        <Shortener />
        <Features />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
