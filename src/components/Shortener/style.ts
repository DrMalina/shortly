import styled from 'styled-components';
import bgMobile from '../../assets/images/bg-shorten-mobile.svg';
import bgDesktop from '../../assets/images/bg-shorten-desktop.svg';

export const Section = styled.div`
  position: relative;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  &:after {
    content: '';
    background-color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 8rem;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -1;
  }

  @media (min-width: 775px) {
    &:after {
      top: 6rem;
    }
  }

  @media (min-width: 965px) {
    &:after {
      top: 9rem;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 111rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  max-width: 111rem;
  margin-top: 9rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${bgMobile});
  background-position: top right;
  background-repeat: no-repeat;

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

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

interface InputProps {
  error: boolean | null;
}

export const Input = styled.input<InputProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 3px solid
    ${(props) => (props.error ? props.theme.colors.error : props.theme.colors.white)};
  color: ${(props) => (props.error ? props.theme.colors.error : props.theme.colors.black)};
  border-radius: 0.5rem;
  outline: none;
  padding: 1.3rem;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  ::placeholder {
    color: ${(props) => (props.error ? props.theme.colors.error : props.theme.colors.gray300)};
  }

  @media (min-width: 775px) {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 3rem;
    border-radius: 1rem;
    margin-right: 2rem;
    font-size: 2rem;
  }
`;

export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 1.3rem;
  font-style: italic;
  margin-top: 0.8rem;
  padding-left: 0.5rem;

  @media (min-width: 775px) {
    position: absolute;
    top: 8.4rem;
  }

  @media (min-width: 965px) {
    top: 12rem;
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: ease-in-out 350ms background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  @media (min-width: 775px) {
    margin-top: 0;
    font-size: 2rem;
    border-radius: 1rem;
    padding: 1.4rem 4rem;
  }
`;

export const Results = styled.div`
  position: relative;
  z-index: 12;
  overflow: hidden;
`;
