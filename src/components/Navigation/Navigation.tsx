import React, { useState, FC } from 'react';
import iconBurger from '../../assets/images/icon-burger.svg';
import iconClose from '../../assets/images/icon-close.svg';
import { MobileNavigation } from '../MobileNavigation';
import { Button } from './style';

export const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav aria-label="Main Navigation">
      <Button
        aria-expanded={isMenuOpen}
        aria-label="Open/close menu"
        aria-controls="menuItems"
        onClick={() => toggleMenu()}
      >
        <img src={isMenuOpen ? iconClose : iconBurger} alt="" />
      </Button>
      <MobileNavigation hidden={!isMenuOpen} />
    </nav>
  );
};
