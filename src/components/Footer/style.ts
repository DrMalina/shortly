import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray400};
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 5.2rem;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1165px;

  @media (min-width: 1165px) {
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const Logo = styled.a`
  font-size: 2.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  text-decoration: none;

  @media (min-width: 1165px) {
    font-size: 3.4rem;
  }
`;

export const SectionsWrapper = styled.div`
  margin-top: 6rem;

  @media (min-width: 650px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 2rem;
  }

  @media (min-width: 1165px) {
    margin-top: 0;
    justify-content: space-between;
  }
`;

export const Section = styled.div`
  margin-top: 4rem;

  @media (min-width: 650px) {
    &:last-child {
      flex: 1 1 100%;
      margin-top: 6rem;
    }

    &:nth-of-type(2) {
      margin-left: -2.4rem;
    }
  }

  @media (min-width: 1165px) {
    margin-top: 0;
    margin-right: 12rem;
    text-align: left;

    &:nth-of-type(2) {
      margin-left: 0;
    }

    &:last-child {
      flex: 0;
      margin-top: 0;
      margin-right: 0;
    }
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 2.2rem;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 1.5rem;
  text-decoration: none;
  line-height: 3.2rem;
  letter-spacing: -0.2px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
