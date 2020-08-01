import React, { useState, FC } from 'react';
import iconBurger from '../../assets/images/icon-burger.svg';
import iconClose from '../../assets/images/icon-close.svg';
import { MobileNavigation } from '../MobileNavigation';
import { Container, Button, DesktopNavigation, Tabs, Link } from './style';

export const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container aria-label="Main Navigation">
      <DesktopNavigation>
        <Tabs>
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
        </Tabs>
        <Tabs>
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#" primary>
              Sign Up
            </Link>
          </li>
        </Tabs>
      </DesktopNavigation>
      <Button
        aria-expanded={isMenuOpen}
        aria-label="Open/close menu"
        aria-controls="menuItems"
        onClick={() => toggleMenu()}
      >
        <img src={isMenuOpen ? iconClose : iconBurger} alt="" />
      </Button>
      <MobileNavigation hidden={!isMenuOpen} />
    </Container>
  );
};
