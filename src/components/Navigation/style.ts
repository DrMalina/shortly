import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  @media (min-width: 775px) {
    display: none;
  }
`;

export const DesktopNavigation = styled.div`
  display: none;

  @media (min-width: 775px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -0.3rem;
  }
`;

export const Tabs = styled.ul`
  display: flex;
  align-items: center;

  &:first-child {
    margin-left: 2rem;
  }
`;

export const Container = styled.nav`
  @media (min-width: 775px) {
    flex-grow: 1;
  }
`;

interface LinkProps {
  primary?: boolean;
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  margin-left: 2.4rem;
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.bold};
  line-height: 2rem;
  color: ${theme.colors.gray200};
  transition: ease-in-out 250ms color;

  &:hover {
    color: ${theme.colors.gray300};
  }

  ${(props) =>
    props.primary &&
    `
  display: block;
  color: ${theme.colors.white};
  border-radius: 3rem;
  padding: 1rem 2rem;
  background-color: ${theme.colors.primary};
  transition: ease-in-out 350ms background-color;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primaryLight};
  }
  `}
`;
