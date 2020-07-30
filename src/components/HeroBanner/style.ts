import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

export const ImageWrapper = styled.div`
  width: 50rem;
  height: 33rem;
  padding: 0 2.2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroContent = styled.div`
  margin-top: 4.2rem;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.gray300};
  line-height: 4.6rem;
  letter-spacing: -1px;
`;

export const SubHeading = styled.h2`
  margin-top: 1.8rem;
  padding: 0 2rem;
  line-height: 3rem;
  color: ${theme.colors.gray200};
`;

export const Link = styled.a`
  display: inline-block;
  margin-top: 2.6rem;
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 2.8rem;
  padding: 1.6rem 4.2rem;
`;
