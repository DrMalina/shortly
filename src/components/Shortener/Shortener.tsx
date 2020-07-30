import React, { FC } from 'react';
import { Container, SrLabel, Input, Button } from './style';

export const Shortener: FC = () => {
  return (
    <section>
      <Container>
        <SrLabel htmlFor="inputLink">Paste a link to shorten it:</SrLabel>
        <Input
          id="inputLink"
          type="text"
          placeholder="Shorten a link here..."
          autoComplete="inputLink"
        />
        <Button type="submit">Shorten It!</Button>
      </Container>
    </section>
  );
};
