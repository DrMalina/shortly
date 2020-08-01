import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

export const Container = styled.footer`
  background-color: ${theme.colors.gray400};
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 5.2rem;
`;

export const Logo = styled.a`
  font-size: 2.8rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};
  opacity: 0.9;
  text-decoration: none;
`;

export const SectionsWrapper = styled.div`
  margin-top: 6rem;
`;

export const Section = styled.div`
  margin-top: 4rem;
`;

export const Heading = styled.h2`
  color: ${theme.colors.white};
  opacity: 0.9;
  font-size: 1.6rem;
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 2.2rem;
`;

export const Link = styled.a`
  color: ${theme.colors.gray100};
  font-size: 1.5rem;
  text-decoration: none;
  line-height: 3.2rem;
  letter-spacing: -0.2px;
`;

export const SocialMedia = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.li`
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
`;
