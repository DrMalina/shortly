import React, { FC } from 'react';
import { Container, Heading, Link } from './style';

export const CTA: FC = () => {
  return (
    <Container>
      <Heading>Boost your links today</Heading>
      <Link href="#">Get Started</Link>
    </Container>
  );
};
