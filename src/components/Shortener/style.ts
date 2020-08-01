import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';
import bgMobile from '../../assets/images/bg-shorten-mobile.svg';
import bgDesktop from '../../assets/images/bg-shorten-desktop.svg';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 111rem;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  margin-top: 9rem;
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  padding: 2.6rem;
  border-radius: 1rem;
  background-color: ${theme.colors.background};
  background-image: url(${bgMobile});
  background-position: top right;
  background-repeat: no-repeat;

  @media (min-width: 775px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-image: url(${bgDesktop});
  }

  @media (min-width: 965px) {
    padding: 5.4rem;
  }
`;

export const SrLabel = styled.label`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Input = styled.input`
  border: 3px solid ${theme.colors.white};
  border-radius: 0.5rem;
  outline: none;
  padding: 0.8rem 1.3rem;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: ${theme.fontWeight.regular};

  ::placeholder {
    color: ${theme.colors.gray300};
  }

  @media (min-width: 775px) {
    flex-grow: 1;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 3rem;
    border-radius: 1rem;
    margin-right: 2rem;
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  border: none;
  background-color: ${theme.colors.primary};
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: ease-in-out 350ms background-color;

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }

  @media (min-width: 775px) {
    margin-top: 0;
    font-size: 2rem;
    border-radius: 1rem;
    padding: 1.4rem 4rem;
  }
`;
