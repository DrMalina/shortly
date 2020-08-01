import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1165px;

  @media (min-width: 700px) {
    display: flex;
    height: 43rem;
    margin-top: 2.4rem;
  }

  @media (min-width: 965px) {
    height: 48rem;
  }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 50rem;
  height: 33rem;
  padding: 0 2.2rem;

  @media (min-width: 700px) {
    order: 2;
    position: absolute;
    width: 73rem;
    height: 43rem;
    left: 45%;
  }

  @media (min-width: 965px) {
    height: 48rem;
    left: 55%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroContent = styled.div`
  margin-top: 4.2rem;
  text-align: center;

  @media (min-width: 560px) {
    padding: 0 1rem;
  }

  @media (min-width: 700px) {
    order: 1;
    flex-basis: 50%;
    text-align: left;
    padding-left: 2rem;
  }

  @media (min-width: 965px) {
    flex-basis: 65%;
    max-width: 62rem;
  }
`;

export const Heading = styled.h1`
  font-size: 4.2rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.gray300};
  line-height: 4.6rem;
  letter-spacing: -1px;

  @media (min-width: 965px) {
    font-size: 8rem;
    line-height: 9rem;
    letter-spacing: -2px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 1.8rem;
  padding: 0 2rem;
  line-height: 3rem;
  color: ${theme.colors.gray200};

  @media (min-width: 700px) {
    margin-top: 0.8rem;
    padding-left: 0;
    padding-right: 6rem;
  }

  @media (min-width: 965px) {
    font-size: 2.2rem;
    line-height: 4rem;
  }
`;

export const Link = styled.a`
  display: inline-block;
  margin-top: 2.6rem;
  font-size: 2rem;
  font-weight: ${theme.fontWeight.bold};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 2.8rem;
  padding: 1.6rem 4.2rem;
  transition: ease-in-out 350ms background-color;

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }

  @media (min-width: 700px) {
    margin-top: 4rem;
  }

  @media (min-width: 965px) {
    padding: 2rem 4.2rem;
  }
`;
