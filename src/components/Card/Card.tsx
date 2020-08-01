import React, { FC } from 'react';
import { Container, CardIcon, CardContent, CardHeading, CardParagraph } from './style';

interface CardProps {
  heading: string;
  paragraph: string;
  iconPath: string;
}

export const Card: FC<CardProps> = ({ heading, paragraph, iconPath }) => {
  return (
    <Container>
      <CardIcon path={iconPath} />
      <CardContent>
        <CardHeading>{heading}</CardHeading>
        <CardParagraph>{paragraph}</CardParagraph>
      </CardContent>
    </Container>
  );
};
