import React, { FC } from 'react';
import { ImageWrapper, Image, HeroContent, Heading, SubHeading, Link } from './style';
import workingSVG from '../../assets/images/illustration-working.svg';

export const HeroBanner: FC = () => {
  return (
    <section>
      <ImageWrapper>
        <Image src={workingSVG} alt="Illustration of a person working at desk" />
      </ImageWrapper>
      <HeroContent>
        <Heading>More than just shorter links</Heading>
        <SubHeading>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </SubHeading>
        <Link href="#">Get Started</Link>
      </HeroContent>
    </section>
  );
};
