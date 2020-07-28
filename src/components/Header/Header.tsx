import React, { FC, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import iconBurger from '../../assets/images/icon-burger.svg';
import iconClose from '../../assets/images/icon-close.svg';
import { Container, NavigationWrapper, Button } from './style';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <a href="/">
        <img src={logo} alt="Shortly logo" />
      </a>
      <NavigationWrapper>
        <Button onClick={() => toggleMenu()}>
          <img src={isMenuOpen ? iconClose : iconBurger} alt="Open/close menu" />
        </Button>
      </NavigationWrapper>
    </Container>
  );
};
