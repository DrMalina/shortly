import styled from 'styled-components';
import { theme } from '../../theme/mainTheme';
import bgMobile from '../../assets/images/bg-shorten-mobile.svg';

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
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.regular};

  ::placeholder {
    color: ${theme.colors.gray300};
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  border: none;
  background-color: ${theme.colors.primary};
  font-family: inherit;
  font-size: ${theme.fontSize.s};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.white};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
`;
