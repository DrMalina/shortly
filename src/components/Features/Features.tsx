import React, { FC } from 'react';
import { Card } from '../Card';
import BrandRecognitionIcon from '../../assets/images/icon-brand-recognition.svg';
import DetailedRecordsIcon from '../../assets/images/icon-detailed-records.svg';
import FullyCustomizableIcon from '../../assets/images/icon-fully-customizable.svg';
import { Container, Heading, Paragraph, CardsWrapper } from './style';

export const Features: FC = () => {
  return (
    <Container>
      <Heading>Advanced Statistics</Heading>
      <Paragraph>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Paragraph>
      <CardsWrapper>
        <Card
          heading="Brand Recognition"
          paragraph="Boost your brand recognition with each click. Generic links don’t
  mean a thing. Branded links help instil confidence in your content."
          iconPath={BrandRecognitionIcon}
        />
        <Card
          heading="Detailed Records"
          paragraph="Gain insights into who is clicking your links. Knowing when and where
        people engage with your content helps inform better decisions."
          iconPath={DetailedRecordsIcon}
        />
        <Card
          heading="Fully Customizable"
          paragraph="Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement."
          iconPath={FullyCustomizableIcon}
        />
      </CardsWrapper>
    </Container>
  );
};
