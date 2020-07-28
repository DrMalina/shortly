import React from 'react';
import { Header } from './components/Header';
import { ScreenReaderLink } from './components/ScreenReaderLink';

const App = () => {
  return (
    <>
      <ScreenReaderLink skipTo="main" message="Skip to main content" />
      <Header />
    </>
  );
};

export default App;
