import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';
import bgBoostMobile from '../../assets/images/bg-boost-mobile.svg';

export const Container = styled.section`
  background-color: ${theme.colors.background};
  background-image: url(${bgBoostMobile});
  background-position: top right;
  background-repeat: no-repeat;
  text-align: center;
  padding: 9rem 0;
`;

export const Heading = styled.h2`
  margin-top: 1.8rem;
  font-size: 2.6rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};
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
