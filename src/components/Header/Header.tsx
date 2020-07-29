import React, { FC } from 'react';
import logo from '../../assets/images/logo.svg';
import { Navigation } from '../Navigation';
import { Container } from './style';

export const Header: FC = () => {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="Shortly logo" />
      </a>
      <Navigation />
    </Container>
  );
};
